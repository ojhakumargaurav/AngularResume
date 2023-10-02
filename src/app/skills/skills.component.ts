import { Component, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() skills?: { [key: string]: string[] } = {};
  constructor(private profileService: ProfileService) {

  };
  getArrays(skill: string[]) {

    return skill;
  }
  getIconClass(skill: string) {
    return "devicon-" + skill + "-plain-wordmark colored";
  }
}
