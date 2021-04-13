import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private fb: FormBuilder,
    private route : Router,
    private alertService : AlertService,
    private api : ApiService) { }

  registerForm : FormGroup;
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    }, { validators: this.checkPasswords });
  }

  save() {
    if(!this.checkPasswords(this.registerForm)){
      this.alertService.openSnackBar("Passwords doesn't match.");
      return
    }else if(this.registerForm.invalid){
      this.alertService.openSnackBar("Please check the highlighted fields.");
      return
    }
    this.api.register(this.registerForm.value).subscribe(
      ()=>{
        this.alertService.openSnackBar("Successfully registered. Please login");
        this.route.navigate(['login']);
      },
      err=>{
        this.alertService.openSnackBar(err.data);
      }
    );
    console.log(this.registerForm.value);
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('passwordConfirm').value;
    return password === confirmPassword;     
  }

}
