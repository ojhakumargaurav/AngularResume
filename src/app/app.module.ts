import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DetailsComponent } from './details/details.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProfileService } from './services/profile.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ResumeComponent } from './resume/resume.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NgSwitch, NgSwitchCase, AsyncPipe } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EmploymentHistoryComponent,
    ResumeComponent,
    SkillsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    MatListModule,
    MatStepperModule,
    NgSwitch, NgSwitchCase, AsyncPipe
  ],
  providers: [ProfileService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
