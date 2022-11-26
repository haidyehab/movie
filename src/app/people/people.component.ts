import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
 
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  
  trendingPeople:any[]=[];
  trendingPeoplePopular:any[]=[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  term:string ='';
  pages:number[]=[];
  pageNumber:Number=10;
  

  ngOnInit(): void {

    
    //pagination

    this.pages =new Array(this.pageNumber).fill(0).map((x,i)=>i+1);
    this._MoviesService.getPeopleByPagination(1).subscribe({
      next:(response)=>{  for(let i=0;i<response.results.length ; i++){
        if(response.results[i].profile_path == null)
        {
          response.results[i].profile_path ='../../assets/unnamed.jpg'
        }else{
          response.results[i].profile_path = this.imgPrefix +response.results[i].profile_path
        }
      }
      this.trendingPeoplePopular = response.results.slice(0,16)
        
      }
    }) 

  }

  test(pageNumber:number){
    this._MoviesService.getPeopleByPagination(pageNumber).subscribe({
      next:(response)=>{ 
        for(let i=0;i<response.results.length ; i++){
          if(response.results[i].profile_path == null)
          {
            response.results[i].profile_path ='../../assets/unnamed.jpg'
          }else{
            response.results[i].profile_path = this.imgPrefix +response.results[i].profile_path
          }
        }
        this.trendingPeoplePopular = response.results.slice(0,16)
        // this.trendingPeoplePopular =response.results
      
       console.log(this.trendingPeoplePopular)
      }
    })
  }
  
  

 

  

}
