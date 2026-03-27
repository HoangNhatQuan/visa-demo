import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VisaApplicationNoteModel = runtime.Types.Result.DefaultSelection<Prisma.$VisaApplicationNotePayload>;
export type AggregateVisaApplicationNote = {
    _count: VisaApplicationNoteCountAggregateOutputType | null;
    _min: VisaApplicationNoteMinAggregateOutputType | null;
    _max: VisaApplicationNoteMaxAggregateOutputType | null;
};
export type VisaApplicationNoteMinAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    authorId: string | null;
    content: string | null;
    createdAt: Date | null;
};
export type VisaApplicationNoteMaxAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    authorId: string | null;
    content: string | null;
    createdAt: Date | null;
};
export type VisaApplicationNoteCountAggregateOutputType = {
    id: number;
    applicationId: number;
    authorId: number;
    content: number;
    createdAt: number;
    _all: number;
};
export type VisaApplicationNoteMinAggregateInputType = {
    id?: true;
    applicationId?: true;
    authorId?: true;
    content?: true;
    createdAt?: true;
};
export type VisaApplicationNoteMaxAggregateInputType = {
    id?: true;
    applicationId?: true;
    authorId?: true;
    content?: true;
    createdAt?: true;
};
export type VisaApplicationNoteCountAggregateInputType = {
    id?: true;
    applicationId?: true;
    authorId?: true;
    content?: true;
    createdAt?: true;
    _all?: true;
};
export type VisaApplicationNoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisaApplicationNoteWhereInput;
    orderBy?: Prisma.VisaApplicationNoteOrderByWithRelationInput | Prisma.VisaApplicationNoteOrderByWithRelationInput[];
    cursor?: Prisma.VisaApplicationNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VisaApplicationNoteCountAggregateInputType;
    _min?: VisaApplicationNoteMinAggregateInputType;
    _max?: VisaApplicationNoteMaxAggregateInputType;
};
export type GetVisaApplicationNoteAggregateType<T extends VisaApplicationNoteAggregateArgs> = {
    [P in keyof T & keyof AggregateVisaApplicationNote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVisaApplicationNote[P]> : Prisma.GetScalarType<T[P], AggregateVisaApplicationNote[P]>;
};
export type VisaApplicationNoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisaApplicationNoteWhereInput;
    orderBy?: Prisma.VisaApplicationNoteOrderByWithAggregationInput | Prisma.VisaApplicationNoteOrderByWithAggregationInput[];
    by: Prisma.VisaApplicationNoteScalarFieldEnum[] | Prisma.VisaApplicationNoteScalarFieldEnum;
    having?: Prisma.VisaApplicationNoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VisaApplicationNoteCountAggregateInputType | true;
    _min?: VisaApplicationNoteMinAggregateInputType;
    _max?: VisaApplicationNoteMaxAggregateInputType;
};
export type VisaApplicationNoteGroupByOutputType = {
    id: string;
    applicationId: string;
    authorId: string;
    content: string;
    createdAt: Date;
    _count: VisaApplicationNoteCountAggregateOutputType | null;
    _min: VisaApplicationNoteMinAggregateOutputType | null;
    _max: VisaApplicationNoteMaxAggregateOutputType | null;
};
type GetVisaApplicationNoteGroupByPayload<T extends VisaApplicationNoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VisaApplicationNoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VisaApplicationNoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VisaApplicationNoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VisaApplicationNoteGroupByOutputType[P]>;
}>>;
export type VisaApplicationNoteWhereInput = {
    AND?: Prisma.VisaApplicationNoteWhereInput | Prisma.VisaApplicationNoteWhereInput[];
    OR?: Prisma.VisaApplicationNoteWhereInput[];
    NOT?: Prisma.VisaApplicationNoteWhereInput | Prisma.VisaApplicationNoteWhereInput[];
    id?: Prisma.UuidFilter<"VisaApplicationNote"> | string;
    applicationId?: Prisma.UuidFilter<"VisaApplicationNote"> | string;
    authorId?: Prisma.UuidFilter<"VisaApplicationNote"> | string;
    content?: Prisma.StringFilter<"VisaApplicationNote"> | string;
    createdAt?: Prisma.DateTimeFilter<"VisaApplicationNote"> | Date | string;
    application?: Prisma.XOR<Prisma.VisaApplicationScalarRelationFilter, Prisma.VisaApplicationWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type VisaApplicationNoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    application?: Prisma.VisaApplicationOrderByWithRelationInput;
    author?: Prisma.UserOrderByWithRelationInput;
};
export type VisaApplicationNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VisaApplicationNoteWhereInput | Prisma.VisaApplicationNoteWhereInput[];
    OR?: Prisma.VisaApplicationNoteWhereInput[];
    NOT?: Prisma.VisaApplicationNoteWhereInput | Prisma.VisaApplicationNoteWhereInput[];
    applicationId?: Prisma.UuidFilter<"VisaApplicationNote"> | string;
    authorId?: Prisma.UuidFilter<"VisaApplicationNote"> | string;
    content?: Prisma.StringFilter<"VisaApplicationNote"> | string;
    createdAt?: Prisma.DateTimeFilter<"VisaApplicationNote"> | Date | string;
    application?: Prisma.XOR<Prisma.VisaApplicationScalarRelationFilter, Prisma.VisaApplicationWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type VisaApplicationNoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.VisaApplicationNoteCountOrderByAggregateInput;
    _max?: Prisma.VisaApplicationNoteMaxOrderByAggregateInput;
    _min?: Prisma.VisaApplicationNoteMinOrderByAggregateInput;
};
export type VisaApplicationNoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.VisaApplicationNoteScalarWhereWithAggregatesInput | Prisma.VisaApplicationNoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.VisaApplicationNoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VisaApplicationNoteScalarWhereWithAggregatesInput | Prisma.VisaApplicationNoteScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"VisaApplicationNote"> | string;
    applicationId?: Prisma.UuidWithAggregatesFilter<"VisaApplicationNote"> | string;
    authorId?: Prisma.UuidWithAggregatesFilter<"VisaApplicationNote"> | string;
    content?: Prisma.StringWithAggregatesFilter<"VisaApplicationNote"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VisaApplicationNote"> | Date | string;
};
export type VisaApplicationNoteCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    application: Prisma.VisaApplicationCreateNestedOneWithoutNotesInput;
    author: Prisma.UserCreateNestedOneWithoutNotesInput;
};
export type VisaApplicationNoteUncheckedCreateInput = {
    id?: string;
    applicationId: string;
    authorId: string;
    content: string;
    createdAt?: Date | string;
};
export type VisaApplicationNoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    application?: Prisma.VisaApplicationUpdateOneRequiredWithoutNotesNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutNotesNestedInput;
};
export type VisaApplicationNoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationNoteCreateManyInput = {
    id?: string;
    applicationId: string;
    authorId: string;
    content: string;
    createdAt?: Date | string;
};
export type VisaApplicationNoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationNoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationNoteListRelationFilter = {
    every?: Prisma.VisaApplicationNoteWhereInput;
    some?: Prisma.VisaApplicationNoteWhereInput;
    none?: Prisma.VisaApplicationNoteWhereInput;
};
export type VisaApplicationNoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VisaApplicationNoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisaApplicationNoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisaApplicationNoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisaApplicationNoteCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutAuthorInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput> | Prisma.VisaApplicationNoteCreateWithoutAuthorInput[] | Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.VisaApplicationNoteCreateOrConnectWithoutAuthorInput | Prisma.VisaApplicationNoteCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.VisaApplicationNoteCreateManyAuthorInputEnvelope;
    connect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
};
export type VisaApplicationNoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutAuthorInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput> | Prisma.VisaApplicationNoteCreateWithoutAuthorInput[] | Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.VisaApplicationNoteCreateOrConnectWithoutAuthorInput | Prisma.VisaApplicationNoteCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.VisaApplicationNoteCreateManyAuthorInputEnvelope;
    connect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
};
export type VisaApplicationNoteUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutAuthorInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput> | Prisma.VisaApplicationNoteCreateWithoutAuthorInput[] | Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.VisaApplicationNoteCreateOrConnectWithoutAuthorInput | Prisma.VisaApplicationNoteCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.VisaApplicationNoteUpsertWithWhereUniqueWithoutAuthorInput | Prisma.VisaApplicationNoteUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.VisaApplicationNoteCreateManyAuthorInputEnvelope;
    set?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    disconnect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    delete?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    connect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    update?: Prisma.VisaApplicationNoteUpdateWithWhereUniqueWithoutAuthorInput | Prisma.VisaApplicationNoteUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.VisaApplicationNoteUpdateManyWithWhereWithoutAuthorInput | Prisma.VisaApplicationNoteUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.VisaApplicationNoteScalarWhereInput | Prisma.VisaApplicationNoteScalarWhereInput[];
};
export type VisaApplicationNoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutAuthorInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput> | Prisma.VisaApplicationNoteCreateWithoutAuthorInput[] | Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.VisaApplicationNoteCreateOrConnectWithoutAuthorInput | Prisma.VisaApplicationNoteCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.VisaApplicationNoteUpsertWithWhereUniqueWithoutAuthorInput | Prisma.VisaApplicationNoteUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.VisaApplicationNoteCreateManyAuthorInputEnvelope;
    set?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    disconnect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    delete?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    connect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    update?: Prisma.VisaApplicationNoteUpdateWithWhereUniqueWithoutAuthorInput | Prisma.VisaApplicationNoteUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.VisaApplicationNoteUpdateManyWithWhereWithoutAuthorInput | Prisma.VisaApplicationNoteUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.VisaApplicationNoteScalarWhereInput | Prisma.VisaApplicationNoteScalarWhereInput[];
};
export type VisaApplicationNoteCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutApplicationInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput> | Prisma.VisaApplicationNoteCreateWithoutApplicationInput[] | Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.VisaApplicationNoteCreateOrConnectWithoutApplicationInput | Prisma.VisaApplicationNoteCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.VisaApplicationNoteCreateManyApplicationInputEnvelope;
    connect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
};
export type VisaApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutApplicationInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput> | Prisma.VisaApplicationNoteCreateWithoutApplicationInput[] | Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.VisaApplicationNoteCreateOrConnectWithoutApplicationInput | Prisma.VisaApplicationNoteCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.VisaApplicationNoteCreateManyApplicationInputEnvelope;
    connect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
};
export type VisaApplicationNoteUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutApplicationInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput> | Prisma.VisaApplicationNoteCreateWithoutApplicationInput[] | Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.VisaApplicationNoteCreateOrConnectWithoutApplicationInput | Prisma.VisaApplicationNoteCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.VisaApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput | Prisma.VisaApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.VisaApplicationNoteCreateManyApplicationInputEnvelope;
    set?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    disconnect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    delete?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    connect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    update?: Prisma.VisaApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput | Prisma.VisaApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.VisaApplicationNoteUpdateManyWithWhereWithoutApplicationInput | Prisma.VisaApplicationNoteUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.VisaApplicationNoteScalarWhereInput | Prisma.VisaApplicationNoteScalarWhereInput[];
};
export type VisaApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutApplicationInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput> | Prisma.VisaApplicationNoteCreateWithoutApplicationInput[] | Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.VisaApplicationNoteCreateOrConnectWithoutApplicationInput | Prisma.VisaApplicationNoteCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.VisaApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput | Prisma.VisaApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.VisaApplicationNoteCreateManyApplicationInputEnvelope;
    set?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    disconnect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    delete?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    connect?: Prisma.VisaApplicationNoteWhereUniqueInput | Prisma.VisaApplicationNoteWhereUniqueInput[];
    update?: Prisma.VisaApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput | Prisma.VisaApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.VisaApplicationNoteUpdateManyWithWhereWithoutApplicationInput | Prisma.VisaApplicationNoteUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.VisaApplicationNoteScalarWhereInput | Prisma.VisaApplicationNoteScalarWhereInput[];
};
export type VisaApplicationNoteCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    application: Prisma.VisaApplicationCreateNestedOneWithoutNotesInput;
};
export type VisaApplicationNoteUncheckedCreateWithoutAuthorInput = {
    id?: string;
    applicationId: string;
    content: string;
    createdAt?: Date | string;
};
export type VisaApplicationNoteCreateOrConnectWithoutAuthorInput = {
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutAuthorInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput>;
};
export type VisaApplicationNoteCreateManyAuthorInputEnvelope = {
    data: Prisma.VisaApplicationNoteCreateManyAuthorInput | Prisma.VisaApplicationNoteCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type VisaApplicationNoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.VisaApplicationNoteUpdateWithoutAuthorInput, Prisma.VisaApplicationNoteUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutAuthorInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutAuthorInput>;
};
export type VisaApplicationNoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.VisaApplicationNoteUpdateWithoutAuthorInput, Prisma.VisaApplicationNoteUncheckedUpdateWithoutAuthorInput>;
};
export type VisaApplicationNoteUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.VisaApplicationNoteScalarWhereInput;
    data: Prisma.XOR<Prisma.VisaApplicationNoteUpdateManyMutationInput, Prisma.VisaApplicationNoteUncheckedUpdateManyWithoutAuthorInput>;
};
export type VisaApplicationNoteScalarWhereInput = {
    AND?: Prisma.VisaApplicationNoteScalarWhereInput | Prisma.VisaApplicationNoteScalarWhereInput[];
    OR?: Prisma.VisaApplicationNoteScalarWhereInput[];
    NOT?: Prisma.VisaApplicationNoteScalarWhereInput | Prisma.VisaApplicationNoteScalarWhereInput[];
    id?: Prisma.UuidFilter<"VisaApplicationNote"> | string;
    applicationId?: Prisma.UuidFilter<"VisaApplicationNote"> | string;
    authorId?: Prisma.UuidFilter<"VisaApplicationNote"> | string;
    content?: Prisma.StringFilter<"VisaApplicationNote"> | string;
    createdAt?: Prisma.DateTimeFilter<"VisaApplicationNote"> | Date | string;
};
export type VisaApplicationNoteCreateWithoutApplicationInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutNotesInput;
};
export type VisaApplicationNoteUncheckedCreateWithoutApplicationInput = {
    id?: string;
    authorId: string;
    content: string;
    createdAt?: Date | string;
};
export type VisaApplicationNoteCreateOrConnectWithoutApplicationInput = {
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutApplicationInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput>;
};
export type VisaApplicationNoteCreateManyApplicationInputEnvelope = {
    data: Prisma.VisaApplicationNoteCreateManyApplicationInput | Prisma.VisaApplicationNoteCreateManyApplicationInput[];
    skipDuplicates?: boolean;
};
export type VisaApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.VisaApplicationNoteUpdateWithoutApplicationInput, Prisma.VisaApplicationNoteUncheckedUpdateWithoutApplicationInput>;
    create: Prisma.XOR<Prisma.VisaApplicationNoteCreateWithoutApplicationInput, Prisma.VisaApplicationNoteUncheckedCreateWithoutApplicationInput>;
};
export type VisaApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.VisaApplicationNoteUpdateWithoutApplicationInput, Prisma.VisaApplicationNoteUncheckedUpdateWithoutApplicationInput>;
};
export type VisaApplicationNoteUpdateManyWithWhereWithoutApplicationInput = {
    where: Prisma.VisaApplicationNoteScalarWhereInput;
    data: Prisma.XOR<Prisma.VisaApplicationNoteUpdateManyMutationInput, Prisma.VisaApplicationNoteUncheckedUpdateManyWithoutApplicationInput>;
};
export type VisaApplicationNoteCreateManyAuthorInput = {
    id?: string;
    applicationId: string;
    content: string;
    createdAt?: Date | string;
};
export type VisaApplicationNoteUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    application?: Prisma.VisaApplicationUpdateOneRequiredWithoutNotesNestedInput;
};
export type VisaApplicationNoteUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationNoteUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationNoteCreateManyApplicationInput = {
    id?: string;
    authorId: string;
    content: string;
    createdAt?: Date | string;
};
export type VisaApplicationNoteUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutNotesNestedInput;
};
export type VisaApplicationNoteUncheckedUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationNoteUncheckedUpdateManyWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisaApplicationNoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.VisaApplicationDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visaApplicationNote"]>;
export type VisaApplicationNoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.VisaApplicationDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visaApplicationNote"]>;
export type VisaApplicationNoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.VisaApplicationDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visaApplicationNote"]>;
export type VisaApplicationNoteSelectScalar = {
    id?: boolean;
    applicationId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
};
export type VisaApplicationNoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicationId" | "authorId" | "content" | "createdAt", ExtArgs["result"]["visaApplicationNote"]>;
export type VisaApplicationNoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.VisaApplicationDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VisaApplicationNoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.VisaApplicationDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VisaApplicationNoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.VisaApplicationDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $VisaApplicationNotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VisaApplicationNote";
    objects: {
        application: Prisma.$VisaApplicationPayload<ExtArgs>;
        author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        applicationId: string;
        authorId: string;
        content: string;
        createdAt: Date;
    }, ExtArgs["result"]["visaApplicationNote"]>;
    composites: {};
};
export type VisaApplicationNoteGetPayload<S extends boolean | null | undefined | VisaApplicationNoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload, S>;
export type VisaApplicationNoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VisaApplicationNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VisaApplicationNoteCountAggregateInputType | true;
};
export interface VisaApplicationNoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VisaApplicationNote'];
        meta: {
            name: 'VisaApplicationNote';
        };
    };
    findUnique<T extends VisaApplicationNoteFindUniqueArgs>(args: Prisma.SelectSubset<T, VisaApplicationNoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VisaApplicationNoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VisaApplicationNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VisaApplicationNoteFindFirstArgs>(args?: Prisma.SelectSubset<T, VisaApplicationNoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VisaApplicationNoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VisaApplicationNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VisaApplicationNoteFindManyArgs>(args?: Prisma.SelectSubset<T, VisaApplicationNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VisaApplicationNoteCreateArgs>(args: Prisma.SelectSubset<T, VisaApplicationNoteCreateArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VisaApplicationNoteCreateManyArgs>(args?: Prisma.SelectSubset<T, VisaApplicationNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VisaApplicationNoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VisaApplicationNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VisaApplicationNoteDeleteArgs>(args: Prisma.SelectSubset<T, VisaApplicationNoteDeleteArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VisaApplicationNoteUpdateArgs>(args: Prisma.SelectSubset<T, VisaApplicationNoteUpdateArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VisaApplicationNoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, VisaApplicationNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VisaApplicationNoteUpdateManyArgs>(args: Prisma.SelectSubset<T, VisaApplicationNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VisaApplicationNoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VisaApplicationNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VisaApplicationNoteUpsertArgs>(args: Prisma.SelectSubset<T, VisaApplicationNoteUpsertArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VisaApplicationNoteCountArgs>(args?: Prisma.Subset<T, VisaApplicationNoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VisaApplicationNoteCountAggregateOutputType> : number>;
    aggregate<T extends VisaApplicationNoteAggregateArgs>(args: Prisma.Subset<T, VisaApplicationNoteAggregateArgs>): Prisma.PrismaPromise<GetVisaApplicationNoteAggregateType<T>>;
    groupBy<T extends VisaApplicationNoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VisaApplicationNoteGroupByArgs['orderBy'];
    } : {
        orderBy?: VisaApplicationNoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VisaApplicationNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisaApplicationNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VisaApplicationNoteFieldRefs;
}
export interface Prisma__VisaApplicationNoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    application<T extends Prisma.VisaApplicationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VisaApplicationDefaultArgs<ExtArgs>>): Prisma.Prisma__VisaApplicationClient<runtime.Types.Result.GetResult<Prisma.$VisaApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VisaApplicationNoteFieldRefs {
    readonly id: Prisma.FieldRef<"VisaApplicationNote", 'String'>;
    readonly applicationId: Prisma.FieldRef<"VisaApplicationNote", 'String'>;
    readonly authorId: Prisma.FieldRef<"VisaApplicationNote", 'String'>;
    readonly content: Prisma.FieldRef<"VisaApplicationNote", 'String'>;
    readonly createdAt: Prisma.FieldRef<"VisaApplicationNote", 'DateTime'>;
}
export type VisaApplicationNoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationNoteInclude<ExtArgs> | null;
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
};
export type VisaApplicationNoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationNoteInclude<ExtArgs> | null;
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
};
export type VisaApplicationNoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VisaApplicationNoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VisaApplicationNoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VisaApplicationNoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationNoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisaApplicationNoteCreateInput, Prisma.VisaApplicationNoteUncheckedCreateInput>;
};
export type VisaApplicationNoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VisaApplicationNoteCreateManyInput | Prisma.VisaApplicationNoteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VisaApplicationNoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    data: Prisma.VisaApplicationNoteCreateManyInput | Prisma.VisaApplicationNoteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VisaApplicationNoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VisaApplicationNoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationNoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisaApplicationNoteUpdateInput, Prisma.VisaApplicationNoteUncheckedUpdateInput>;
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
};
export type VisaApplicationNoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VisaApplicationNoteUpdateManyMutationInput, Prisma.VisaApplicationNoteUncheckedUpdateManyInput>;
    where?: Prisma.VisaApplicationNoteWhereInput;
    limit?: number;
};
export type VisaApplicationNoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisaApplicationNoteUpdateManyMutationInput, Prisma.VisaApplicationNoteUncheckedUpdateManyInput>;
    where?: Prisma.VisaApplicationNoteWhereInput;
    limit?: number;
    include?: Prisma.VisaApplicationNoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VisaApplicationNoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationNoteInclude<ExtArgs> | null;
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisaApplicationNoteCreateInput, Prisma.VisaApplicationNoteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VisaApplicationNoteUpdateInput, Prisma.VisaApplicationNoteUncheckedUpdateInput>;
};
export type VisaApplicationNoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationNoteInclude<ExtArgs> | null;
    where: Prisma.VisaApplicationNoteWhereUniqueInput;
};
export type VisaApplicationNoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisaApplicationNoteWhereInput;
    limit?: number;
};
export type VisaApplicationNoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisaApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.VisaApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.VisaApplicationNoteInclude<ExtArgs> | null;
};
export {};
