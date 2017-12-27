import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypingCarousel]'
})
export class TypingCarouselDirective implements OnInit {
  @Input() carousel:string;
  toRotate: any;
  //carousel: any;

  constructor(private el: ElementRef, private _renderer: Renderer) { 
    // this._renderer.setElementProperty(this._elemRef.nativeElement, 'innerHTML', 'my new content');
   console.log( el.nativeElement);
  
    // this.toRotate = toRotate;
    // this.el = el;
    // this.loopNum = 0;
    // this.period = parseInt(period, 10) || 2000;
    // this.txt = '';
    // this.tick();
    // this.isDeleting = false;
   }

   ngOnInit(){
    
      for(let i = 0; i < this.carousel.length; i++){
        let item = this.carousel[i]; 
        let currentContent = ""; 
        let self = this;
          for(let i = 0; i < item.length; i++ ){
             currentContent += item[i];
             setTimeout(function() {
              self._renderer.setElementProperty(self.el.nativeElement, 'innerHTML', currentContent + '|');
            }, 3000);
             
            console.log(currentContent);
          }
          
      }
   }

}