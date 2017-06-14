import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-group-reviews',
  templateUrl: './group-reviews.component.html',
  styleUrls: ['./group-reviews.component.css']
})
export class GroupReviewsComponent implements OnInit {

  id : any;
  listings :any;
  imageUrl : any;
  
  constructor(
	private firebaseService : FirebaseService,
	private router : Router,
	private route : ActivatedRoute) { }

  ngOnInit() {
	this.id  = this.route.snapshot.params['id'];
	this.firebaseService.getListings().subscribe(listings =>{
		  this.listings = listings;	
	}); 
  }
}
