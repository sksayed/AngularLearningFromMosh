import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  private priposition = ["of", "the"];
  public hasPriposition(word:string)
  {
    return this.priposition.includes(word);
  }
  transform(value: string ): string {
      if (!value)
      {
        return null ;
      }
      let word = value.split(' ');
      // age split kora hoise 
      for ( let i = 0 ; i<word.length ; i++)
      {
        if (i> 0 && this.hasPriposition(word[i]))
        {
          word[i] = word[i].toLowerCase();
        }
        else
        {
          word[i] = word[i].charAt(0).toUpperCase()+word[i].slice(1);
        }
      }
      let finalWord = word.join(' ');
      return finalWord ;

  }

}
