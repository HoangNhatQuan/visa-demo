"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const SALT_ROUNDS = 10;
async function main() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error('DATABASE_URL is required (use backend/.env)');
    }
    const email = process.env.SEED_ADMIN_EMAIL?.trim() || 'admin@visa-ops.local';
    const password = process.env.SEED_ADMIN_PASSWORD || 'Admin123!';
    const name = process.env.SEED_ADMIN_NAME?.trim() || 'Admin';
    const prisma = new client_1.PrismaClient({
        adapter: new adapter_pg_1.PrismaPg({ connectionString }),
    });
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);
    await prisma.user.upsert({
        where: { email },
        update: { password: hashed, name, role: client_1.Role.ADMIN },
        create: { email, password: hashed, name, role: client_1.Role.ADMIN },
    });
    console.log(`Seed admin OK → email: ${email}  password: ${password}`);
    await prisma.$disconnect();
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map