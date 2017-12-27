import { TypingCarouselDirective } from './../typing-carousel.directive';
import { Component, OnInit, Directive } from '@angular/core';
import {Observable} from "rxjs"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})
export class HomeComponent implements OnInit {
 carousel = ['Hello, My name is Al.','I am full-stack developer. ','I am passionate about coding. ','Thank you for visting my site.'];
 words = "Hello: "
 currentWord = ""; 
 index = 0;
 globalIndex = 0;
 delayTwo = 175;
 delayOne = 200;
 constructor() {
    
   }
  
  typeWriter(){
        if(this.carousel[this.globalIndex]){
            if( this.index < this.carousel[this.globalIndex].length){
                this.currentWord += this.carousel[this.globalIndex][this.index];
                this.words =  this.currentWord + "|";
                this.index ++;
                let timer = Observable.timer(this.delayTwo);
                timer.subscribe(t => this.typeWriter() );
            }else{
                this.globalIndex += 1; 
                  console.log(this.carousel.length, " carousel length ");
                      if(this.globalIndex < this.carousel.length){
                    
                          this.index = 0;
                          this.currentWord = "";
                          this.words = "";
                          this.typeWriter();
                      }
              }

        }
                 
  }

  ngOnInit(){
    this.typeWriter();
  }

  

 

}
