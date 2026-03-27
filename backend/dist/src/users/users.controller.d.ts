import { CreateOperatorDto } from './dto/create-operator.dto';
import { UpdateOperatorDto } from './dto/update-operator.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
