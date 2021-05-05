export interface CompanyBranch {
   name: string;
   countryID: number;
   stateID: number;
   cityID: number;
   addressLine: string;
   addressLineTwo?: string;
   zipCode: number;
   phoneIndex: number;
   phoneNumber: number;
}