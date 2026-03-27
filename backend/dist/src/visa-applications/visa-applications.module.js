"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisaApplicationsModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const visa_applications_controller_1 = require("./visa-applications.controller");
const visa_applications_service_1 = require("./visa-applications.service");
let VisaApplicationsModule = class VisaApplicationsModule {
};
exports.VisaApplicationsModule = VisaApplicationsModule;
exports.VisaApplicationsModule = VisaApplicationsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [visa_applications_controller_1.VisaApplicationsController],
        providers: [visa_applications_service_1.VisaApplicationsService],
    })
], VisaApplicationsModule);
//# sourceMappingURL=visa-applications.module.js.map