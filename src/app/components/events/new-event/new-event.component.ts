import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor(private fb: FormBuilder, private _router : Router,
     private alertService : AlertService, private api : ApiService) { }
  
  eventForm : FormGroup;
  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      eventDesc: ['', Validators.required],
      location: ['', Validators.required],
      eventDate: ['', Validators.required]
    });
  }

  cancel() {
    this._router.navigate(['events']);
  }

  save() {
    if(this.eventForm.invalid){
      this.alertService.openSnackBar("Please check the highlighted fields.");
      return
    }
    this.api.createEvent(this.eventForm.value).subscribe(
      res=>{
        this.alertService.openSnackBar('Successfully created the event');
        this._router.navigate(['events']);
      },
      err=>{
        this.alertService.openSnackBar('Please try later.');
        this._router.navigate(['events']);
      }
    );

    console.log(this.eventForm.value);
  }

}
