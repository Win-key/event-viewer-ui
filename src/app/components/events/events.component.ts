import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events : {eventName, eventDesc, location, eventDate}[] = [
    {eventName : "event 1", eventDesc : "Test event number 1", location : "Chennai", eventDate : "2021-04-12"},
    {eventName : "event 2", eventDesc : "Test event number 2", location : "Bangalore", eventDate : "2021-04-13"}
  ] 
  constructor(private _router: Router, private api : ApiService, private alert : AlertService) { }

  ngOnInit(): void {
    this.api.getEvents().subscribe(
      res=>{
        this.events = res.data;
      },
      err=>{
        this.alert.openSnackBar(err.data);
      }
    )
  }

  routeToNewEvent() {
    this._router.navigate(['new-event']);
  }

}
