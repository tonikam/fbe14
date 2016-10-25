import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    templateUrl: '_patients-read.component.html',
    styles: []
})
export class PatientsReadComponent {

    subscription: Subscription;
    patientKey: String;

    constructor(private route: ActivatedRoute) {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.patientKey = params['patientKey'];
                console.log("reading patient: " + this.patientKey);
            }
        );
    };
}
