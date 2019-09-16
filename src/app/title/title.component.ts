import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input('isFavourite') isSelected:boolean = false ;

  @Output() change = new EventEmitter () ;

  ClickOnStar()
  {
    this.isSelected = !this.isSelected;
    //this one is for publishing the event 
    this.change.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
