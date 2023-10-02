export class DetailsModel {
    constructor(name: string, Summary: string, phoneNumber: string, email: string, jobRole: string, address: string[]) {
        this.name = name;
        this.Summary = Summary;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.jobRole = jobRole;
        this.address = address;

    }
    name?: string;
    Summary?: string;
    phoneNumber?: string;
    email?: string;
    jobRole?: string;
    imageUrl?: string;
    address?: string[];
}
