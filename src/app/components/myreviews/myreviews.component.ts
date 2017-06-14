import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-myreviews',
  templateUrl: './myreviews.component.html',
  styleUrls: ['./myreviews.component.css']
})
export class MyreviewsComponent implements OnInit {
	listings;
	email;
  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
	  this.firebaseService.getListings().subscribe(listings =>{
			this.listings = listings;
		});
  }
  user(){
		this.email = this.firebaseService.getUsername(); 
	}

}
