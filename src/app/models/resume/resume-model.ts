import { DetailsModel } from "../Details/details-model";
import { EmploymentModel } from "../employment/employment-model";



export class ResumeModel {
    constructors() {
        this.skills = {};
    }

    details?: DetailsModel = undefined;
    employmentHistory?: EmploymentModel[] = undefined;
    skills: { [key: string]: string[] } = {};
}
