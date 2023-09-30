import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ResumeModel } from '../models/resume/resume-model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  constructor(private ProfileService: ProfileService, breakpointObserver: BreakpointObserver) {
    this.ProfileService.getResume().subscribe((resume: ResumeModel) => {
      console.log(resume);
      this.resume = resume

    });
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  stepperOrientation: Observable<StepperOrientation>;
  resume?: ResumeModel = undefined;

}
