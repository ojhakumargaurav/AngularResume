export class EmploymentModel {
    constructor(companyName: string, jobTitle: string, startDate: string, endDate: string, description: string[]) {
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }

    companyName?: string;
    jobTitle?: string;
    startDate?: string;
    endDate?: string;
    description?: string[];

}
