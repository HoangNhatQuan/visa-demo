"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VISA_APPLICATION_STATUS_TRANSITIONS = void 0;
exports.isValidStatusTransition = isValidStatusTransition;
exports.VISA_APPLICATION_STATUS_TRANSITIONS = {
    SUBMITTED: ['UNDER_REVIEW', 'DOCS_REQUIRED', 'REJECTED'],
    UNDER_REVIEW: ['DOCS_REQUIRED', 'APPROVED', 'REJECTED'],
    DOCS_REQUIRED: ['UNDER_REVIEW', 'APPROVED', 'REJECTED'],
    APPROVED: [],
    REJECTED: [],
};
function isValidStatusTransition(from, to) {
    if (from === to)
        return true;
    return exports.VISA_APPLICATION_STATUS_TRANSITIONS[from].includes(to);
}
//# sourceMappingURL=visa-application-status-transitions.js.map