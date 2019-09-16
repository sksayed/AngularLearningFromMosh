import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor() { }

  private star:boolean = false ;

  onclick()
  {
    this.star = !this.star;
    console.log(this.star);
  }

  ngOnInit() {
  }

}
