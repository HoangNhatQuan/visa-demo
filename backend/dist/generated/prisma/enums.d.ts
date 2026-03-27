export declare const VisaApplicationStatus: {
    readonly SUBMITTED: "SUBMITTED";
    readonly UNDER_REVIEW: "UNDER_REVIEW";
    readonly DOCS_REQUIRED: "DOCS_REQUIRED";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type VisaApplicationStatus = (typeof VisaApplicationStatus)[keyof typeof VisaApplicationStatus];
export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly OPERATOR: "OPERATOR";
};
export type Role = (typeof Role)[keyof typeof Role];
