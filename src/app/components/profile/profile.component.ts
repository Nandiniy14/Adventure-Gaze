import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	groups;
	listings;
	email;
	constructor(private firebaseService : FirebaseService) { }
	ngOnInit() {
		this.firebaseService.getGroups().subscribe(groups =>{
			this.groups = groups;
		});
		this.firebaseService.getListings().subscribe(listings =>{
			this.listings = listings;
		});
		
	}
	user(){
		this.email = this.firebaseService.getUsername(); 
	}
}
