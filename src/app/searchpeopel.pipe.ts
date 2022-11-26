import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpeopel'
})
export class SearchpeopelPipe implements PipeTransform {

  transform(trendingPeoplePopular:any[], term:string):any[] {

    return trendingPeoplePopular.filter((person)=>person.name.toLowerCase().includes(term.toLowerCase())) ;
  }

}
