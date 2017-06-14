import { Component, OnInit } from '@angular/core';
import{AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	count = 0;
  constructor(public af : AngularFire,
    public flashMessage:FlashMessagesService,
	public firebaseService : FirebaseService) { }

  ngOnInit() {
  }
  
  login() {
	this.af.auth.login();	
  }   
}