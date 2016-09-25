import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// import { AuthService } from "../shared/auth.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    myForm: FormGroup;
    error = false;

    constructor(private fb: FormBuilder) {} // , private authService: AuthService) {}

    onSignin() {
      // this.authService.signinUser(this.myForm.value);
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
