import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
 
  users;
  listings;
  email;
  $key;
  imageUrl;
  followlistings :any[] = [] ;
  count1 = 0;
  count2 = 0;
  countg = 0;
  cfollows;
  splitted : any;
  constructor(public firebaseService : FirebaseService) { }
ngOnInit() {
      
	  this.firebaseService.getListings().subscribe(listings =>{
		  this.listings = listings;
	  });
	  this.firebaseService.getUsers().subscribe(users =>{
		  this.users = users;
	  });
	  
  
	this.email = this.firebaseService.getUsername();
	for(let user of this.users){
		if(user.name == this.email){
			this.$key = user.$key;	
			this.cfollows = user.follows;
			break;
		}		
	} 

	this.splitted = this.cfollows.split("$"); 
	this.count2 = 1;
	console.log(this.listings+"listings  "+this.splitted+"followers   "+this.users+" users  ");	
		
		if(this.listings != undefined){
			if(this.splitted != undefined){
				for(let list of this.listings){
					for(let follow of this.splitted){
						if(follow == list.name){
							let storageRef = firebase.storage().ref();
							console.log(storageRef);
							console.log(list.path);
							storageRef.child(list.path).getDownloadURL().then((url) => {
														
							
							let listing = { 
								title    : list.title,
								city     : list.city,
								path  : url,
								review : list.review,
								name : list.name
							}
							console.log(listing+"if condition")
							this.followlistings.push(listing);
						});	}
					}
				}
			}
		}
		console.log(this.followlistings);
			
}
	
  follow(id){
    var sign = "$";
	id = id.concat(sign);
	let user = { 
		name  : this.email,
		follows : this.cfollows.concat(id)
	}
	this.firebaseService.updateUser(this.$key,user);
	this.count1 = 0;
  }

}
