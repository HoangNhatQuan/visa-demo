import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly VisaApplication: "VisaApplication";
    readonly VisaApplicationNote: "VisaApplicationNote";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const VisaApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly applicantName: "applicantName";
    readonly email: "email";
    readonly nationality: "nationality";
    readonly destinationCountry: "destinationCountry";
    readonly visaType: "visaType";
    readonly travelDate: "travelDate";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VisaApplicationScalarFieldEnum = (typeof VisaApplicationScalarFieldEnum)[keyof typeof VisaApplicationScalarFieldEnum];
export declare const VisaApplicationNoteScalarFieldEnum: {
    readonly id: "id";
    readonly applicationId: "applicationId";
    readonly authorId: "authorId";
    readonly content: "content";
    readonly createdAt: "createdAt";
};
export type VisaApplicationNoteScalarFieldEnum = (typeof VisaApplicationNoteScalarFieldEnum)[keyof typeof VisaApplicationNoteScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
