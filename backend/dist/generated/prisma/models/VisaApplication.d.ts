import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VisaApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$VisaApplicationPayload>;
export type AggregateVisaApplication = {
    _count: VisaApplicationCountAggregateOutputType | null;
    _min: VisaApplicationMinAggregateOutputType | null;
    _max: VisaApplicationMaxAggregateOutputType | null;
};
export type VisaApplicationMinAggregateOutputType = {
    id: string | null;
    applicantName: string | null;
    email: string | null;
    nationality: string | null;
    destinationCountry: string | null;
    visaType: string | null;
    travelDate: Date | null;
    status: $Enums.VisaApplicationStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VisaApplicationMaxAggregateOutputType = {
    id: string | null;
    applicantName: string | null;
    email: string | null;
    nationality: string | null;
    destinationCountry: string | null;
    visaType: string | null;
    travelDate: Date | null;
    status: $Enums.VisaApplicationStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VisaApplicationCountAggregateOutputType = {
    id: number;
    applicantName: number;
    email: number;
    nationality: number;
    destinationCountry: number;
    visaType: number;
    travelDate: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VisaApplicationMinAggregateInputType = {
    id?: true;
    applicantName?: true;
    email?: true;
    nationality?: true;
    destinationCountry?: true;
    visaType?: true;
    travelDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VisaApplicationMaxAggregateInputType = {
    id?: true;
    applicantName?: true;
    email?: true;
    nationality?: true;
    destinationCountry?: true;
    visaType?: true;
    travelDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VisaApplicationCountAggregateInputType = {
    id?: true;
    applicantName?: true;
    email?: true;
    nationality?: true;
    destinationCountry?: true;
    visaType?: true;
    travelDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VisaApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisaApplicationWhereInput;
    orderBy?: Prisma.VisaApplicationOrderByWithRelationInput | Prisma.VisaApplicationOrderByWithRelationInput[];
    cursor?: Prisma.VisaApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VisaApplicationCountAggregateInputType;
    _min?: VisaApplicationMinAggregateInputType;
    _max?: VisaApplicationMaxAggregateInputType;
};
export type GetVisaApplicationAggregateType<T extends VisaApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateVisaApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVisaApplication[P]> : Prisma.GetScalarType<T[P], AggregateVisaApplication[P]>;
};
export type VisaApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisaApplicationWhereInput;
    orderBy?: Prisma.VisaApplicationOrderByWithAggregationInput | Prisma.VisaApplicationOrderByWithAggregationInput[];
    by: Prisma.VisaApplicationScalarFieldEnum[] | Prisma.VisaApplicationScalarFieldEnum;
    having?: Prisma.VisaApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VisaApplicationCountAggregateInputType | true;
    _min?: VisaApplicationMinAggregateInputType;
    _max?: VisaApplicationMaxAggregateInputType;
};
export type VisaApplicationGroupByOutputType = {
    id: string;
    applicantName: string;
    email: string;
    nationality: string;
    destinationCountry: string;
    visaType: string;
    travelDate: Date;
    status: $Enums.VisaApplicationStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: VisaApplicationCountAggregateOutputType | null;
    _min: VisaApplicationMinAggregateOutputType | null;
    _max: VisaApplicationMaxAggregateOutputType | null;
};
type GetVisaApplicationGroupByPayload<T extends VisaApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VisaApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VisaApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VisaApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VisaApplicationGroupByOutputType[P]>;
}>>;
export type VisaApplicationWhereInput = {
    AND?: Prisma.VisaApplicationWhereInput | Prisma.VisaApplicationWhereInput[];
    OR?: Prisma.VisaApplicationWhereInput[];
    NOT?: Prisma.VisaApplicationWhereInput | Prisma.VisaApplicationWhereInput[];
    id?: Prisma.UuidFilter<"VisaApplication"> | string;
    applicantName?: Prisma.StringFilter<"VisaApplication"> | string;
    email?: Prisma.StringFilter<"VisaApplication"> | string;
    nationality?: Prisma.StringFilter<"VisaApplication"> | string;
    destinationCountry?: Prisma.StringFilter<"VisaApplication"> | string;
    visaType?: Prisma.StringFilter<"VisaApplication"> | string;
    travelDate?: Prisma.DateTimeFilter<"VisaApplication"> | Date | string;
    status?: Prisma.EnumVisaApplicationStatusFilter<"VisaApplication"> | $Enums.VisaApplicationStatus;
    createdAt?: Prisma.DateTimeFilter<"VisaApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VisaApplication"> | Date | string;
    notes?: Prisma.VisaApplicationNoteListRelationFilter;
};
export type VisaApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicantName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    destinationCountry?: Prisma.SortOrder;
    visaType?: Prisma.SortOrder;
    travelDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    notes?: Prisma.VisaApplicationNoteOrderByRelationAggregateInput;
};
export type VisaApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VisaApplicationWhereInput | Prisma.VisaApplicationWhereInput[];
    OR?: Prisma.VisaApplicationWhereInput[];
    NOT?: Prisma.VisaApplicationWhereInput | Prisma.VisaApplicationWhereInput[];
    applicantName?: Prisma.StringFilter<"VisaApplication"> | string;
    email?: Prisma.StringFilter<"VisaApplication"> | string;
    nationality?: Prisma.StringFilter<"VisaApplication"> | string;
    destinationCountry?: Prisma.StringFilter<"VisaApplication"> | string;
    visaType?: Prisma.StringFilter<"VisaApplication"> | string;
    travelDate?: Prisma.DateTimeFilter<"VisaApplication"> | Date | string;
    status?: Prisma.EnumVisaApplicationStatusFilter<"VisaApplication"> | $Enums.VisaApplicationStatus;
    createdAt?: Prisma.DateTimeFilter<"VisaApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VisaApplication"> | Date | string;
    notes?: Prisma.VisaApplicationNoteListRelationFilter;
}, "id">;
export type VisaApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicantName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    destinationCountry?: Prisma.SortOrder;
    visaType?: Prisma.SortOrder;
    travelDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VisaApplicationCountOrderByAggregateInput;
    _max?: Prisma.VisaApplicationMaxOrderByAggregateInput;
    _min?: Prisma.VisaApplicationMinOrderByAggregateInput;
};
export type VisaApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.VisaApplicationScalarWhereWithAggregatesInput | Prisma.VisaApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.VisaApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VisaApplicationScalarWhereWithAggregatesInput | Prisma.VisaApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"VisaApplication"> | string;
    applicantName?: Prisma.StringWithAggregatesFilter<"VisaApplication"> | string;
    email?: Prisma.StringWithAggregatesFilter<"VisaApplication"> | string;
    nationality?: Prisma.StringWithAggregatesFilter<"VisaApplication"> | string;
    destinationCountry?: Prisma.StringWithAggregatesFilter<"VisaApplication"> | string;
    visaType?: Prisma.StringWithAggregatesFilter<"VisaApplication"> | string;
    travelDate?: Prisma.DateTimeWithAggregatesFilter<"VisaApplication"> | Date | string;
    status?: Prisma.EnumVisaApplicationStatusWithAggregatesFilter<"VisaApplication"> | $Enums.VisaApplicationStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VisaApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"VisaApplication"> | Date | string;
};
export type VisaApplicationCreateInput = {
    id?: string;
    applicantName: string;
    email: string;
    nationality: string;
    destinationCountry: string;
    visaType: string;
    travelDate: Date | string;
    status?: $Enums.VisaApplicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: Prisma.VisaApplicationNoteCreateNestedManyWithoutApplicationInput;
};
export type VisaApplicationUncheckedCreateInput = {
    id?: string;
    applicantName: string;
    email: string;
    nationality: string;
    destinationCountry: string;
    visaType: string;
    travelDate: Date | string;
    status?: $Enums.VisaApplicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: Prisma.VisaApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput;
};
export type VisaApplicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationality?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationCountry?: Prisma.StringFieldUpdateOperationsInput | string;
    visaType?: Prisma.StringFieldUpdateOperationsInput | string;
    travelDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVisaApplicationStatusFieldUpdateOperationsInput | $Enums.VisaApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.VisaApplicationNoteUpdateManyWithoutApplicationNestedInput;
};
export type VisaApplicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationality?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationCountry?: Prisma.StringFieldUpdateOperationsInput | string;
    visaType?: Prisma.StringFieldUpdateOperationsInput | string;
    travelDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVisaApplicationStatusFieldUpdateOperationsInput | $Enums.VisaApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.VisaApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type VisaApplicationCreateManyInput = {
    id?: string;
    applicantName: string;
    email: string;
    nationality: string;
    destinationCountry: string;
    visaType: string;
    travelDate: Date | string;
    status?: $Enums.VisaApplicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisaApplicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationality?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationCountry?: Prisma.StringFieldUpdateOperationsInput | string;
    visaType?: Prisma.StringFieldUpdateOperationsInput | string;
    travelDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVisaApplicationStatusFieldUpdateOperationsInput | $Enums.VisaApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationality?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationCountry?: Prisma.StringFieldUpdateOperationsInput | string;
    visaType?: Prisma.StringFieldUpdateOperationsInput | string;
    travelDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVisaApplicationStatusFieldUpdateOperationsInput | $Enums.VisaApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicantName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    destinationCountry?: Prisma.SortOrder;
    visaType?: Prisma.SortOrder;
    travelDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VisaApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicantName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    destinationCountry?: Prisma.SortOrder;
    visaType?: Prisma.SortOrder;
    travelDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VisaApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicantName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    destinationCountry?: Prisma.SortOrder;
    visaType?: Prisma.SortOrder;
    travelDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VisaApplicationScalarRelationFilter = {
    is?: Prisma.VisaApplicationWhereInput;
    isNot?: Prisma.VisaApplicationWhereInput;
};
export type EnumVisaApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VisaApplicationStatus;
};
export type VisaApplicationCreateNestedOneWithoutNotesInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationCreateWithoutNotesInput, Prisma.VisaApplicationUncheckedCreateWithoutNotesInput>;
    connectOrCreate?: Prisma.VisaApplicationCreateOrConnectWithoutNotesInput;
    connect?: Prisma.VisaApplicationWhereUniqueInput;
};
export type VisaApplicationUpdateOneRequiredWithoutNotesNestedInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationCreateWithoutNotesInput, Prisma.VisaApplicationUncheckedCreateWithoutNotesInput>;
    connectOrCreate?: Prisma.VisaApplicationCreateOrConnectWithoutNotesInput;
    upsert?: Prisma.VisaApplicationUpsertWithoutNotesInput;
    connect?: Prisma.VisaApplicationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VisaApplicationUpdateToOneWithWhereWithoutNotesInput, Prisma.VisaApplicationUpdateWithoutNotesInput>, Prisma.VisaApplicationUncheckedUpdateWithoutNotesInput>;
};
export type VisaApplicationCreateWithoutNotesInput = {
    id?: string;
    applicantName: string;
    email: string;
    nationality: string;
    destinationCountry: string;
    visaType: string;
    travelDate: Date | string;
    status?: $Enums.VisaApplicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisaApplicationUncheckedCreateWithoutNotesInput = {
    id?: string;
    applicantName: string;
    email: string;
    nationality: string;
    destinationCountry: string;
    visaType: string;
    travelDate: Date | string;
    status?: $Enums.VisaApplicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisaApplicationCreateOrConnectWithoutNotesInput = {
    where: Prisma.VisaApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisaApplicationCreateWithoutNotesInput, Prisma.VisaApplicationUncheckedCreateWithoutNotesInput>;
};
export type VisaApplicationUpsertWithoutNotesInput = {
    update: Prisma.XOR<Prisma.VisaApplicationUpdateWithoutNotesInput, Prisma.VisaApplicationUncheckedUpdateWithoutNotesInput>;
    create: Prisma.XOR<Prisma.VisaApplicationCreateWithoutNotesInput, Prisma.VisaApplicationUncheckedCreateWithoutNotesInput>;
    where?: Prisma.VisaApplicationWhereInput;
};
export type VisaApplicationUpdateToOneWithWhereWithoutNotesInput = {
    where?: Prisma.VisaApplicationWhereInput;
    data: Prisma.XOR<Prisma.VisaApplicationUpdateWithoutNotesInput, Prisma.VisaApplicationUncheckedUpdateWithoutNotesInput>;
};
export type VisaApplicationUpdateWithoutNotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationality?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationCountry?: Prisma.StringFieldUpdateOperationsInput | string;
    visaType?: Prisma.StringFieldUpdateOperationsInput | string;
    travelDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVisaApplicationStatusFieldUpdateOperationsInput | $Enums.VisaApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationUncheckedUpdateWithoutNotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationality?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationCountry?: Prisma.StringFieldUpdateOperationsInput | string;
    visaType?: Prisma.StringFieldUpdateOperationsInput | string;
    travelDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVisaApplicationStatusFieldUpdateOperationsInput | $Enums.VisaApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationCountOutputType = {
    notes: number;
};
export type VisaApplicationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notes?: boolean | VisaApplicationCountOutputTypeCountNotesArgs;
};
export type VisaApplicationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationCountOutputTypeSelect<ExtArgs> | null;
};
export type VisaApplicationCountOutputTypeCountNotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisaApplicationNoteWhereInput;
};
export type VisaApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicantName?: boolean;
    email?: boolean;
    nationality?: boolean;
    destinationCountry?: boolean;
    visaType?: boolean;
    travelDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    notes?: boolean | Prisma.VisaApplication$notesArgs<ExtArgs>;
    _count?: boolean | Prisma.VisaApplicationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visaApplication"]>;
export type VisaApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicantName?: boolean;
    email?: boolean;
    nationality?: boolean;
    destinationCountry?: boolean;
    visaType?: boolean;
    travelDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["visaApplication"]>;
export type VisaApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicantName?: boolean;
    email?: boolean;
    nationality?: boolean;
    destinationCountry?: boolean;
    visaType?: boolean;
    travelDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["visaApplication"]>;
export type VisaApplicationSelectScalar = {
    id?: boolean;
    applicantName?: boolean;
    email?: boolean;
    nationality?: boolean;
    destinationCountry?: boolean;
    visaType?: boolean;
    travelDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VisaApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicantName" | "email" | "nationality" | "destinationCountry" | "visaType" | "travelDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["visaApplication"]>;
export type VisaApplicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notes?: boolean | Prisma.VisaApplication$notesArgs<ExtArgs>;
    _count?: boolean | Prisma.VisaApplicationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VisaApplicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type VisaApplicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $VisaApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VisaApplication";
    objects: {
        notes: Prisma.$VisaApplicationNotePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        applicantName: string;
        email: string;
        nationality: string;
        destinationCountry: string;
        visaType: string;
        travelDate: Date;
        status: $Enums.VisaApplicationStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["visaApplication"]>;
    composites: {};
};
export type VisaApplicationGetPayload<S extends boolean | null | undefined | VisaApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload, S>;
export type VisaApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VisaApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VisaApplicationCountAggregateInputType | true;
};
export interface VisaApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VisaApplication'];
        meta: {
            name: 'VisaApplication';
        };
    };
    findUnique<T extends VisaApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, VisaApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VisaApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VisaApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VisaApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, VisaApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VisaApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VisaApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VisaApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, VisaApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VisaApplicationCreateArgs>(args: Prisma.SelectSubset<T, VisaApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VisaApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, VisaApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VisaApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VisaApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VisaApplicationDeleteArgs>(args: Prisma.SelectSubset<T, VisaApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VisaApplicationUpdateArgs>(args: Prisma.SelectSubset<T, VisaApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VisaApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, VisaApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VisaApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, VisaApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VisaApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VisaApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VisaApplicationUpsertArgs>(args: Prisma.SelectSubset<T, VisaApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VisaApplicationCountArgs>(args?: Prisma.Subset<T, VisaApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VisaApplicationCountAggregateOutputType> : number>;
    aggregate<T extends VisaApplicationAggregateArgs>(args: Prisma.Subset<T, VisaApplicationAggregateArgs>): Prisma.PrismaPromise<GetVisaApplicationAggregateType<T>>;
    groupBy<T extends VisaApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VisaApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: VisaApplicationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VisaApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisaApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VisaApplicationFieldRefs;
}
export interface Prisma__VisaApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    notes<T extends Prisma.VisaApplication$notesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VisaApplication$notesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VisaApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"VisaApplication", 'String'>;
    readonly applicantName: Prisma.FieldRef<"VisaApplication", 'String'>;
    readonly email: Prisma.FieldRef<"VisaApplication", 'String'>;
    readonly nationality: Prisma.FieldRef<"VisaApplication", 'String'>;
    readonly destinationCountry: Prisma.FieldRef<"VisaApplication", 'String'>;
    readonly visaType: Prisma.FieldRef<"VisaApplication", 'String'>;
    readonly travelDate: Prisma.FieldRef<"VisaApplication", 'DateTime'>;
    readonly status: Prisma.FieldRef<"VisaApplication", 'VisaApplicationStatus'>;
    readonly createdAt: Prisma.FieldRef<"VisaApplication", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"VisaApplication", 'DateTime'>;
}
export type VisaApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
    where: Prisma.VisaApplicationWhereUniqueInput;
};
export type VisaApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
    where: Prisma.VisaApplicationWhereUniqueInput;
};
export type VisaApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
    where?: Prisma.VisaApplicationWhereInput;
    orderBy?: Prisma.VisaApplicationOrderByWithRelationInput | Prisma.VisaApplicationOrderByWithRelationInput[];
    cursor?: Prisma.VisaApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisaApplicationScalarFieldEnum | Prisma.VisaApplicationScalarFieldEnum[];
};
export type VisaApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
    where?: Prisma.VisaApplicationWhereInput;
    orderBy?: Prisma.VisaApplicationOrderByWithRelationInput | Prisma.VisaApplicationOrderByWithRelationInput[];
    cursor?: Prisma.VisaApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisaApplicationScalarFieldEnum | Prisma.VisaApplicationScalarFieldEnum[];
};
export type VisaApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
    where?: Prisma.VisaApplicationWhereInput;
    orderBy?: Prisma.VisaApplicationOrderByWithRelationInput | Prisma.VisaApplicationOrderByWithRelationInput[];
    cursor?: Prisma.VisaApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisaApplicationScalarFieldEnum | Prisma.VisaApplicationScalarFieldEnum[];
};
export type VisaApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisaApplicationCreateInput, Prisma.VisaApplicationUncheckedCreateInput>;
};
export type VisaApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VisaApplicationCreateManyInput | Prisma.VisaApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VisaApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    data: Prisma.VisaApplicationCreateManyInput | Prisma.VisaApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VisaApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisaApplicationUpdateInput, Prisma.VisaApplicationUncheckedUpdateInput>;
    where: Prisma.VisaApplicationWhereUniqueInput;
};
export type VisaApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VisaApplicationUpdateManyMutationInput, Prisma.VisaApplicationUncheckedUpdateManyInput>;
    where?: Prisma.VisaApplicationWhereInput;
    limit?: number;
};
export type VisaApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisaApplicationUpdateManyMutationInput, Prisma.VisaApplicationUncheckedUpdateManyInput>;
    where?: Prisma.VisaApplicationWhereInput;
    limit?: number;
};
export type VisaApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
    where: Prisma.VisaApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisaApplicationCreateInput, Prisma.VisaApplicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VisaApplicationUpdateInput, Prisma.VisaApplicationUncheckedUpdateInput>;
};
export type VisaApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
    where: Prisma.VisaApplicationWhereUniqueInput;
};
export type VisaApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisaApplicationWhereInput;
    limit?: number;
};
export type VisaApplication$notesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationNoteInclude<ExtArgs> | null;
    where?: Prisma.VisaApplicationNoteWhereInput;
    orderBy?: Prisma.VisaApplicationNoteOrderByWithRelationInput | Prisma.VisaApplicationNoteOrderByWithRelationInput[];
    cursor?: Prisma.VisaApplicationNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisaApplicationNoteScalarFieldEnum | Prisma.VisaApplicationNoteScalarFieldEnum[];
};
export type VisaApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationInclude<ExtArgs> | null;
};
export {};
