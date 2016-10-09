import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../shared/auth.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    myForm: FormGroup;
    error = false;

    constructor(private fb: FormBuilder,
                private authService: AuthService,
                private router: Router) {}

    onLogin() {
      let resultLogin = this.authService.loginUser(this.myForm.value);
      console.log("Login result: " + resultLogin);
      //if (resultLogin == "auth/ok") {
        this.router.navigate(['home']);
      //} else {
      //  this.router.navigate(['error']);
      //}
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
