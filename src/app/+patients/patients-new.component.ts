import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import { DataService } from "../shared/data.service";

@Component({
    templateUrl: './patients-new.component.html'
})
export class PatientsNewComponent {

    private subscription: Subscription;

    userKey: String;
    userName: String;
    user: Observable<any>;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private dataService: DataService) {

        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.userKey = params['userKey'];
                console.log("patients-new -> userKey: " + this.userKey);

                this.dataService.getUser(this.userKey).subscribe((user) => {
                    this.userName = user.name;
                    console.log("user: " + user.name);
                });
            });
    };

    createPatient(key_value) {
        this.dataService.createPatient(this.userKey, key_value);
        this.goBack();
    };

    goBack() {
        this.location.back();
    };

    ngOnDestroy() {
        this.subscription.unsubscribe();
    };
}
