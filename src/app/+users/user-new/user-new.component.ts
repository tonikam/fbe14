import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import { DataService } from "../../shared/data.service";

@Component({
    templateUrl: './user-new.component.html'
})
export class UserNewComponent implements OnDestroy {

    private subscription: Subscription;

    private userKey: String;
    private user: Observable<any>;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private dataService: DataService) {

        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.userKey = params['userKey'];
                //this.user = this.dataService.getCachedUserData(this.userKey);
            });
    };

    createPatient(key_value) {
        this.dataService.createPatient(this.userKey, key_value)
    };

    goBack() {
        this.location.back();
    };

    ngOnDestroy() {
        this.subscription.unsubscribe();
    };
}
