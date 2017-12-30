import { ContactComponent } from './contact/contact.component';
import { MyworkComponent } from './mywork/mywork.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TypingCarouselDirective } from './typing-carousel.directive';
import { AgmCoreModule } from '@agm/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutmeComponent,
    MyworkComponent,
    ContactComponent,
    TypingCarouselDirective
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiQOkNFVlI6IqR5vU5bXvFQWbdwosz75U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
