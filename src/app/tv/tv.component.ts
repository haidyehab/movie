import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  trendingTv:any[]=[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  pages:number[]=[];
  pageNumber:Number=10;
  term:string='';

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    
    this._MoviesService.getTrendingTv('tv').subscribe({
      
      next:(response)=>this.trendingTv = response.results.slice(0,16)
    })

    //pagination

   this.pages=new Array(this.pageNumber).fill(0).map((x,i)=>i+1);

    this._MoviesService.getTvByPagination(1).subscribe({
      next:(response)=>{
        this.trendingTv =response.results  
      }
    })
    

  }

  test(pageNumber:number){
    this._MoviesService.getTvByPagination(pageNumber).subscribe({
      next:(response)=>this.trendingTv =response.results
      
    })
   
  }

}
