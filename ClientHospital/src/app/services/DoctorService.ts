import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from '../models/Doctor';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class DoctorService {

    public baseUrl: string = environment.ApiUrl;
    public routeDoctor = '/api/doctor';
    public headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    }

    CreateDoctor(newDoctor: Doctor) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post<Doctor>(
            this.baseUrl + this.routeDoctor, newDoctor, {headers}
        );
    }

    GetAllDoctors(httpParams?: any) {
        return this.http.get<Doctor[]>(this.baseUrl + this.routeDoctor,
        {observe: 'response', headers: this.headers, params: httpParams});
    }

    DeleteDoctor(id: number, httpParams?: any) {
        return this.http.delete<Doctor[]>(this.baseUrl + this.routeDoctor + `/${id}`,
            {observe: 'response', headers: this.headers, params: httpParams});
    }
}
