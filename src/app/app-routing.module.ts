import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { AuthGuard } from './auth.guard';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';



const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'moviedetails/:id',canActivate:[AuthGuard],component:MovieDetailsComponent},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'tvdetails/:id',canActivate:[AuthGuard],component:TvdetailsComponent},
  {path:'peopledetails/:id',canActivate:[AuthGuard],component:PeopledetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 

exports: [RouterModule]
})
export class AppRoutingModule { }
