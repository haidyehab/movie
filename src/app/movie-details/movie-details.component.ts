import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails:any=''
  movieId:string=''; 
 imgPrefix:string = 'https://image.tmdb.org/t/p/w500'
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.movieId=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getMoviesDetails(this.movieId).subscribe({
      next:(response)=>{
        this.movieDetails =response
      } 
    })
   


  }

}
