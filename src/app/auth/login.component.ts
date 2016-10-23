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

  //currentUser: String;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router,
              private loggedInUser:LoggedInUser) {
  }

  onLogin() {
    this.authService.loginUser(this.myForm.value);

    /*
     this.subscription = this.loggedInUser.userName.subscribe(pName => {
     //this.currentUser = pName;
     console.log("[login ] currentUser: " + pName);
     */
    this.router.navigate(['/allPatients']);
    /*
     });
     */
    // subscribe subject
    //
    //
  }

  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


}
