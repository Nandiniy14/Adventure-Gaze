import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  description;
  members ;
  admin ;
  name ;
  show ;
  email;
  groups:any;
  dgroups:any[] = [];
  
	constructor(private firebaseService : FirebaseService,
               private router : Router) { 
		this.show = false;
	}
	ngOnInit() {
		this.email = this.firebaseService.getUsername();
		this.firebaseService.getGroups().subscribe(groups =>{
			this.groups = groups;
		});
		if(this.groups != undefined){
			for(let group of this.groups){
				let storageRef = firebase.storage().ref();
				storageRef.child(group.path).getDownloadURL().then((url) => {
					let listing = { 
						$key :group.$key,
						name : group.name,
						admin  : group.admin,
						members:group.members,
						imageUrl  : url,
						image :group.image,
						path : group.path,
						description : group.description
					}
					this.dgroups.push(listing);
				});	
			}
		}console.log(this.dgroups);
	}
	
	createGroup(){
		this.show = true;
	}
	JoinGroup(id){
		var user = firebase.auth().currentUser;
		var email;
		var sign = "$";
		if(user != null){
			email = user.email;
		}
		email = sign.concat(email);
		let group = { 
			admin : id.admin,
			description : id.description,
			image : id.image,
			members : id.members.concat(email),
			name  : id.name,
			path :id.path
		}
		console.log(group);
		this.firebaseService.updateGroup(id.$key,group);
		this.router.navigate(['profile']);
	}

	
	onAddSubmit(){
		
		var user = firebase.auth().currentUser;
		if (user != null) {
			this.admin = user.email;
			this.members = user.email;
		}
		this.show = false;
		let group = { 
			description : this.description,
			admin : this.admin,
			name  : this.name,
			members : this.members
		}
		this.firebaseService.addGroup(group);
		this.show = false;
		this.router.navigate(['profile']);
	}
	
}