import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
constructor(private _MoviesService:MoviesService) { }
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}

trendingMovies:any[]=[];
pages:number[]=[];
pageNumbers:number=10
imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
term:string ='';
  ngOnInit(): void {
  
    this._MoviesService.getTrendingMovies('movie').subscribe({
      
      next:(response)=>this.trendingMovies = response.results.slice(0,16)
    })
    this.pages= new Array(this.pageNumbers).fill('').map((x,i)=>i+1)
    this._MoviesService. getMoviesByPagination(1).subscribe({

      next:(response)=>this.trendingMovies=response.results
    })
  }

  test(pageNumber:number){
    this._MoviesService. getMoviesByPagination(pageNumber).subscribe({
    next:(response)=>this.trendingMovies=response.results
  })
  }
}
