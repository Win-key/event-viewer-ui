import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private alertService : AlertService, 
    private api : ApiService,
    private route : Router) { }
  logInForm : FormGroup;
  ngOnInit(): void {
    this.logInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  save() {
    if(this.logInForm.invalid){
      this.alertService.openSnackBar("Please check the highlighted fields.");
      return
    }
    this.api.login(this.logInForm.value).subscribe(
      (res)=>{
        localStorage.setItem('userData', JSON.stringify(res.data));
        this.route.navigate(['home']);
      },
      err=>{
        this.alertService.openSnackBar("Please check you credentials");
      }
    );
    console.log(this.logInForm.value);
  }

}
