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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVisaApplicationDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const trim_decorator_1 = require("../../common/decorators/trim.decorator");
class CreateVisaApplicationDto {
    applicantName;
    email;
    nationality;
    destinationCountry;
    visaType;
    travelDate;
}
exports.CreateVisaApplicationDto = CreateVisaApplicationDto;
__decorate([
    (0, trim_decorator_1.Trim)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateVisaApplicationDto.prototype, "applicantName", void 0);
__decorate([
    (0, trim_decorator_1.Trim)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateVisaApplicationDto.prototype, "email", void 0);
__decorate([
    (0, trim_decorator_1.Trim)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateVisaApplicationDto.prototype, "nationality", void 0);
__decorate([
    (0, trim_decorator_1.Trim)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateVisaApplicationDto.prototype, "destinationCountry", void 0);
__decorate([
    (0, trim_decorator_1.Trim)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateVisaApplicationDto.prototype, "visaType", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateVisaApplicationDto.prototype, "travelDate", void 0);
//# sourceMappingURL=create-visa-application.dto.js.map