import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { }
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  tvDetails:any=''
  tvId:string='';


  ngOnInit(): void {
    this.tvId=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getTvDetails(this.tvId).subscribe({
      next:(response)=> {
        this.tvDetails =response
        console.log(this.tvDetails)
      }
     
    })
    
    
  }
 

}
