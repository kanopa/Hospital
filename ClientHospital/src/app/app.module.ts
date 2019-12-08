import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormRecordComponent } from './form-record/form-record.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { DoctorComponent } from './doctor/doctor.component';

const appRoutes: Routes = [
  {path: 'doctor', component: DoctorsComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'main', component: MainComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    PatientComponent,
    MainComponent,
    FormRecordComponent,
    DoctorComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
