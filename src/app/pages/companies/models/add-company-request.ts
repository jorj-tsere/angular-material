import { CompanyBranch } from '.';

export interface AddCompanyRequest {
    companyName: string;
    user: string;
    branches: CompanyBranch[]
}

