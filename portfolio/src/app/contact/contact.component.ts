import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude = 40.74881;
  longitude: number = -73.985428;	
  contactInfo;
  constructor() {
    
    this.contactInfo = {
          email: '',
          subject: '',
          message: ''
    };
}

  ngOnInit() {
  }
 submit(){
   console.log(this.contactInfo);
 }
  onChoseLocation(e){
    console.log(e);
    this.latitude = e.coords.lat;
    this.longitude = e.coords.lng;
  }

}
