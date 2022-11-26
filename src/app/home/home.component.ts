import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
   trendingMovies:any[]=[];
   trendingTv:any[]=[];
   trendingPeople:any[]=[];
   imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
   term:string ='';

  ngOnInit(): void {
    //movie

    this._MoviesService.getTrendingMovies('movie').subscribe({
      
      next:(response)=>this.trendingMovies = response.results.slice(0,16)
    })

    //tv

    this._MoviesService.getTrendingTv('tv').subscribe({
      
      next:(response)=>this.trendingTv = response.results.slice(0,16)
    })

    //people

 
    this._MoviesService.getTrendingPeople('person').subscribe({
      next:(response)=>{
        for(let i=0;i<response.results.length ; i++){
          if(response.results[i].profile_path == null)
          {
            response.results[i].profile_path ='../../assets/unnamed.jpg'
          }else{
            response.results[i].profile_path = this.imgPrefix +response.results[i].profile_path
          }
        }
        this.trendingPeople = response.results.slice(0,16)
      }
    })
   
    
  }
}
