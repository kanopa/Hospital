import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { NewAppointment } from '../models/Appointment';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AppointmentService {
    public baseUrl: string = environment.ApiUrl;
    public routeAppointment = '/api/Appointment';
    public headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    }

    CreateAppointment(newAppointment: NewAppointment) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post<NewAppointment>(
            this.baseUrl + this.routeAppointment, newAppointment, {headers}
        );
    }
    GetAppointment(httpParams?: any) {
        return this.http.get<NewAppointment[]>(this.baseUrl + this.routeAppointment,
        {observe: 'response', headers: this.headers, params: httpParams});
    }
}
