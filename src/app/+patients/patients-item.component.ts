import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DataService } from "../shared/data.service";

import { CurrentPatient } from "../shared/current-patient.service";

@Component({
    selector: '[patients-item]',
    templateUrl: 'patients-item.component.html'
})
export class PatientsItemComponent implements OnInit {
    @Input() patient: any;

    patientKey: String;

    constructor(private router: Router,
                private dataService: DataService,
                private currentPatient: CurrentPatient) {
    };

    ngOnInit() {
        this.patientKey = this.patient.$key;
    }

    /* not here anymore
     createDiseaseCase(key_value) {
     this.dataService.createDiseaseCase(this.patient.$key,key_value)
     };
     */

    editPatient(patientKey) {
        this.router.navigate(['patients/' + patientKey + '/edit']);
    }


    openDiseaseCases(patientKey) {
        console.log("[patient-row] patientKey: " + patientKey);

        this.currentPatient.setPatientData({name: this.patient.name, key: patientKey});

        this.router.navigate(['/diseaseCases/' + patientKey])
    }
}

