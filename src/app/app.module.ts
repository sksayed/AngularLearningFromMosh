import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Courses } from './courses.component';
import { TitleComponent } from './title/title.component';
import { CoursesService } from './courses.services';
import { TitleCasePipe } from './title-case.pipe';
import { from } from 'rxjs';
import { FavouriteComponent } from './favourite/favourite.component';



@NgModule({
  declarations: [
    AppComponent,
    Courses,
    TitleComponent,
    TitleCasePipe,
    FavouriteComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ CoursesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
