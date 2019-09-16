import { Component , Input } from '@angular/core' ;
import { CoursesService } from './courses.services';

@Component({
    selector:"courses",
    template:`<h1>{{NumberofAuthors}} {{ title }}</h1>
                <ul>
                     <li *ngFor =" let course of courses"> 
                        {{course}}
                     </li>
                </ul>
                <br>
                <img [src]="img" [height]="imgHeight" [width]="imgWeidth" >

                <table>
                    <thead>
                     <th> Number </th>
                     <th> Author </th>
                    </thead>
                    <tbody *ngFor="let course of courses; let i = index">
                    <td>{{i+1}}</td>
                     <td>
                          {{course}}
                     </td>
                    </tbody>
                </table> 
                <br>
                <button class="btn btn-primary"> save </button>
                 
                <span class="glyphicon "
                      [class.glyphicon-star] ="StarState"
                      [class.glyphicon-star-empty]="!StarState"
                
                (click)="ClickOnStar()"></span>

                <br/>

                <input type="text" [(ngModel)]="value" >
                <br/>
                <p>
                    {{value | titleCase }}
                </p> 
                
                `
})


export class Courses {

    title:string = " sayed is learning angular 8";
    public courses :string [];
    private NumberofAuthors:number;
    private img:string ;
    private imgHeight: number = 420 ;
    private imgWeidth: number = 420 ;
    private indexf:number = 5;

    value:string ;

    constructor (services : CoursesService)
    {
        this.courses = services.getCourses();
        this.NumberofAuthors =this.courses.length ;
        this.img = services.imageUrl;
    }

     @Input()  private StarState:boolean = false ;
     Show(val:string):void
     {
        this.value =val ;
     }

     ShowSpace(val:string ):void
     {
         
         let lower = val.toLocaleLowerCase();
         //age lower case e nea hoise
         let arrOFstring = lower.split(' ');
         // split kora hoise 
        for ( let i = 0 ; i<arrOFstring.length ; i++)
        {
          arrOFstring[i] = arrOFstring[i].charAt(0).toUpperCase()+arrOFstring[i].slice(1);
        }
        let finalWord = arrOFstring.join(' ');

        this.value = finalWord ;

     }
    ClickOnStar ()
    {
        if (!this.StarState)
        {
            this.StarState = true;
        }
        else{
            this.StarState =false;
        }

        console.log(this.StarState);

    }
    
    
    


}