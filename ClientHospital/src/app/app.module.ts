import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent, DoctorCardDialog } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormRecordComponent } from './form-record/form-record.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatTableModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { DoctorComponent, DoctorDeleteDialog } from './doctor/doctor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

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
    ScheduleComponent,
    DoctorDeleteDialog,
    DoctorCardDialog
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
    MatTableModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
    BrowserAnimationsModule
  ],
  entryComponents: [DoctorDeleteDialog, DoctorCardDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
