import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude = 40.74881;
  longitude: number = -73.985428;	
  contactInfo;
  constructor(private http: Http) {
    
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
   this.http.post('http://localhost:3000/contactme', this.contactInfo).subscribe(response => {
          this.contactInfo = {
            email: '',
            subject: '',
            message: ''
          };
    });
 }
  onChoseLocation(e){
    console.log(e);
    this.latitude = e.coords.lat;
    this.longitude = e.coords.lng;
  }

}
