import { Injectable } from '@angular/core';
import { DetailsModel } from '../models/Details/details-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getResume() {
    return this.http.get('assets/resume.json');
  };

}
