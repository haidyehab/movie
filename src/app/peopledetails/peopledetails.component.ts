import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.css']
})
export class PeopledetailsComponent implements OnInit {

  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute) { }
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'
  peopleDetails:any=''
  peopleId:string='';
  trendingPeople:any[]=[];

  ngOnInit(): void {
    this.peopleId=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getPeopleDetails(this.peopleId).subscribe({
      next:(response)=> {this.peopleDetails =response
      console.log(this.peopleDetails)}
   
    })

  }

}
