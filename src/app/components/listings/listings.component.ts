import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FilterPipe } from '../../filter.pipe';
import { UniquePipe } from '../../unique.pipe';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings :any;
  users;
  count = 0;
  flag = 0;
  constructor(private firebaseService : FirebaseService) { }
  email;
  ngOnInit() {
	    this.firebaseService.getUsers().subscribe(users =>{
			this.users = users;  
	  }); 
	
	  this.firebaseService.getListings().subscribe(listings =>{
		  this.listings = listings;
	  });
	
  } 
	loop(){
		this.email = this.firebaseService.getUsername();
		console.log(this.users +" users "+this.email+"loop function");
		let user = { 
			name: this.email,
			follows:""
		}
		for(let i of this.users){
			console.log(i.name + "for loop");
			if(i.name == this.email){			
				this.flag = 2;
				console.log("name already exist");
				break;
			}		
		}
		if(this.flag != 2){
			this.firebaseService.addUser(user);
			this.flag = 0;
		}
		this.count = 1;
	}
}