export class DetailsModel {
    constructor(name: string, Summary: string, phoneNumber: string, email: string, jobRole: string) {
        this.name = name;
        this.Summary = Summary;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.jobRole = jobRole;

    }
    name?: string;
    Summary?: string;
    phoneNumber?: string;
    email?: string;
    jobRole?: string;
    imageUrl?: string;
}
