 import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   
  post = {
    title :'hello-world',
    isSelected:false
      }

      OnisFavouriteChanged()
      {
        console.log("favourite has been changed");
      }
}
