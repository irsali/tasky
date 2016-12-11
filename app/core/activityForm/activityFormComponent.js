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
var core_1 = require('@angular/core');
var ActivityInfo_1 = require('../../domain/ActivityInfo');
var activityInfoGroupService_1 = require('../activityInfoGroups/activityInfoGroupService');
var ActivityForm = (function () {
    function ActivityForm(activityInfoGroupService) {
        this.activityInfoGroupService = activityInfoGroupService;
        this.submitted = false;
        this.activityInfo = new ActivityInfo_1.ActivityInfo();
    }
    ActivityForm.prototype.ngOnInit = function () {
        this.activities = this.activityInfoGroupService.getAll();
    };
    ActivityForm.prototype.onSubmit = function (x) {
        if (x === void 0) { x = null; }
        if (x) {
            this.form = x;
        }
        this.submitted = true;
        this.activityInfoGroupService.add(this.activityInfo);
    };
    ActivityForm.prototype.newActivity = function () {
        this.submitted = false;
        this.activityInfo = new ActivityInfo_1.ActivityInfo();
        if (this.form) {
            this.form.reset();
        }
    };
    Object.defineProperty(ActivityForm.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.activityInfo); },
        enumerable: true,
        configurable: true
    });
    ActivityForm = __decorate([
        core_1.Component({
            selector: 'activity-form',
            templateUrl: 'app/core/activityForm/activityForm.html',
        }),
        __param(0, core_1.Inject(activityInfoGroupService_1.ActivityInfoGroupService)), 
        __metadata('design:paramtypes', [activityInfoGroupService_1.ActivityInfoGroupService])
    ], ActivityForm);
    return ActivityForm;
}());
exports.ActivityForm = ActivityForm;
//# sourceMappingURL=activityFormComponent.js.map