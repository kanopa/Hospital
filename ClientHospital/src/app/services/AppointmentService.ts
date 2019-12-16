import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../models/Appointment';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class PatientService {
    public baseUrl: string = environment.ApiUrl;
    public routeAppointment = '/api/AppointmentController';
    public headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    }

    CreateAppointment(newAppointment: Appointment) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post<Appointment>(
            this.baseUrl + this.routeAppointment, newAppointment, {headers}
        );
    }
    GetAppointment(httpParams?: any) {
        return this.http.get<Appointment[]>(this.baseUrl + this.routeAppointment,
        {observe: 'response', headers: this.headers, params: httpParams});
    }
}
