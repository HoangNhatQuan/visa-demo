import { Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateOperatorDto } from './dto/create-operator.dto';
import type { UpdateOperatorDto } from './dto/update-operator.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        password: string;
        name: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findById(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        password: string;
        name: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: {
        email: string;
        password: string;
        name: string;
        role?: Role;
    }): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        password: string;
        name: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    listOperators(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }[]>;
    createOperator(dto: CreateOperatorDto): Promise<{
        id: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    updateOperator(id: string, dto: UpdateOperatorDto): Promise<{
        id: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    deleteOperator(id: string): Promise<{
        success: boolean;
    }>;
}
