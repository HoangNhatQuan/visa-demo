"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trim = Trim;
const class_transformer_1 = require("class-transformer");
function Trim(options = {}) {
    const { emptyToUndefined = false, toUpperCase = false } = options;
    return (0, class_transformer_1.Transform)(({ value }) => {
        if (typeof value !== 'string')
            return value;
        const trimmed = value.trim();
        if (!trimmed.length && emptyToUndefined) {
            return undefined;
        }
        return toUpperCase ? trimmed.toUpperCase() : trimmed;
    });
}
//# sourceMappingURL=trim.decorator.js.map