import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  abouts:[] = [];
  slides = [
    {'image': 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
    {'image': 'https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
    {'image': 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
    {'image': 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80'},
    {'image': 'https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=930&q=80'},
    {'image': 'https://images.unsplash.com/photo-1531692333527-0df5b708e9cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'}];
  
  constructor(private route: Router, private api: ApiService, private alert : AlertService) { }

  ngOnInit(): void {
    this.api.homeData().subscribe(
      (res)=>{
        this.slides = res.data.slides;
        this.abouts = res.data.about;
      },
      err=>{
        this.alert.openSnackBar("Please try later");
        this.route.navigate(['/login'])
      }
    );
  }

  getUserName(){
    let user = JSON.parse(localStorage.getItem('userData'));
    return `${user.firstName}, ${user.lastName}`;
  }

}
