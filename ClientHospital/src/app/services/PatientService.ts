import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../models/Patient';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class PatientService {
    public baseUrl: string = environment.ApiUrl;
    public routePatient = '/api/DoctorController';
    public headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    }

    CreatePatient() {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post<Patient>(
            this.baseUrl + this.routePatient,
            {headers}
        );
    }
}
