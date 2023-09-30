import { DetailsModel } from "../Details/details-model";
import { EmploymentModel } from "../employment/employment-model";



export class ResumeModel {

    details?: DetailsModel = undefined;
    employmentHistory?: EmploymentModel[] = undefined;
}
