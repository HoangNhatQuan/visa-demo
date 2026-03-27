"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisaApplicationsController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const auth_guard_1 = require("../auth/guards/auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const create_visa_application_dto_1 = require("./dto/create-visa-application.dto");
const create_visa_application_note_dto_1 = require("./dto/create-visa-application-note.dto");
const list_visa_applications_query_dto_1 = require("./dto/list-visa-applications-query.dto");
const update_visa_application_status_dto_1 = require("./dto/update-visa-application-status.dto");
const visa_applications_service_1 = require("./visa-applications.service");
let VisaApplicationsController = class VisaApplicationsController {
    visaApplicationsService;
    constructor(visaApplicationsService) {
        this.visaApplicationsService = visaApplicationsService;
    }
    async createApplication(dto) {
        return this.visaApplicationsService.createApplication(dto);
    }
    async listApplications(query) {
        return this.visaApplicationsService.listApplications(query);
    }
    async getApplicationDetail(id) {
        return this.visaApplicationsService.getApplicationDetail(id);
    }
    async updateApplicationStatus(id, dto) {
        return this.visaApplicationsService.updateApplicationStatus(id, dto);
    }
    async addNote(id, dto, user) {
        return this.visaApplicationsService.addNote(id, dto, user.sub);
    }
};
exports.VisaApplicationsController = VisaApplicationsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.Role.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_visa_application_dto_1.CreateVisaApplicationDto]),
    __metadata("design:returntype", Promise)
], VisaApplicationsController.prototype, "createApplication", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_visa_applications_query_dto_1.ListVisaApplicationsQueryDto]),
    __metadata("design:returntype", Promise)
], VisaApplicationsController.prototype, "listApplications", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ version: '4' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VisaApplicationsController.prototype, "getApplicationDetail", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ version: '4' }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_visa_application_status_dto_1.UpdateVisaApplicationStatusDto]),
    __metadata("design:returntype", Promise)
], VisaApplicationsController.prototype, "updateApplicationStatus", null);
__decorate([
    (0, common_1.Post)(':id/notes'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ version: '4' }))),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_visa_application_note_dto_1.CreateVisaApplicationNoteDto, Object]),
    __metadata("design:returntype", Promise)
], VisaApplicationsController.prototype, "addNote", null);
exports.VisaApplicationsController = VisaApplicationsController = __decorate([
    (0, common_1.Controller)('visa-applications'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [visa_applications_service_1.VisaApplicationsService])
], VisaApplicationsController);
//# sourceMappingURL=visa-applications.controller.js.map