import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


import { AuthService } from "../shared/auth.service";
import { LoggedInUser } from "../shared/logged-in-user.service";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  error = false;

  loggedInUserData: any;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router,
              private loggedInUser:LoggedInUser) {
  }

  onLogin() {
    this.authService.loginUser(this.myForm.value);

    this.loggedInUser.userData.subscribe(loggedInData => {
      this.loggedInUserData = loggedInData;
      console.log("[login] loggedInUserData - key: " + this.loggedInUserData.key);
      console.log("[login] loggedInUserData - name: " + this.loggedInUserData.name);

      this.router.navigate(['/patients']);

     });
  };

  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


}
