import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService{

  constructor(private _HttpClient:HttpClient,) { }
   //movies
  getTrendingMovies(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US`)
  }

  getMoviesDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US`)
  }
  getMoviesByPagination(pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`)
  }
//tv

  getTrendingTv(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US`)
  }
  getTvDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US`)
  }
  getTvByPagination(pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US&sort_by=popularity.desc&page=${pageNumber}`)
  }

  //people
 

  // getTrendingPeople(mediaType:string):Observable<any>
  // {
  //   return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US&page`)
  // }
  getTrendingPeople(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US`)
  }

  getPeopleByPagination(pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US&page=${pageNumber}`)
  }


  getPeopleDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=fb6dc741e71bd5130fa6d46989e6ad9e&language=en-US`)
  }

  }

