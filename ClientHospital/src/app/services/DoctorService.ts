import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from '../models/Doctor';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class DoctorService {

    public baseUrl: string = environment.ApiUrl;
    public routeDoctor = '/api/DoctorController';
    public headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    }

    GetAllDoctors(httpParams?: any) {
        return this.http.get<Doctor[]>(this.baseUrl + this.routeDoctor,
        {observe: 'response', headers: this.headers, params: httpParams});
    }
}
