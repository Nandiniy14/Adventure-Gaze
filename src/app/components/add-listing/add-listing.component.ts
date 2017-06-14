import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  title : any;
  city : any;
  review : any;
  image : any;
  constructor( private firebaseService : FirebaseService,
               private router : Router) { }

  
  ngOnInit() {
  }
    onAddSubmit(){
	var email = this.firebaseService.getUsername();
	  let listing = { 
	     title    : this.title,
		 city     : this.city,
		 review : this.review,
		 name : email
	   }
	   
	   this.firebaseService.addListing(listing);
	   this.router.navigate(['listings']);
  }


}