import { Injectable } from '@angular/core';
import { DetailsModel } from '../models/Details/details-model';
import { HttpClient } from '@angular/common/http';
import { ResumeModel } from '../models/resume/resume-model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private http: HttpClient) { }

  getResume() {
    return this.http.get<ResumeModel>('assets/resume.json');
  };
  // check_if_image_available(skill: string) {
  //   return this.http.get(`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`);

  // }

}
