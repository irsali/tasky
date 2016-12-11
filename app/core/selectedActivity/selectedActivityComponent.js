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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var activityInfoGroupService_1 = require('../activityInfoGroups/activityInfoGroupService');
var ActivityInfo_1 = require('../../domain/ActivityInfo');
var SelectedActivity = (function () {
    function SelectedActivity(activityInfoGroupService, activatedRoute) {
        this.activityInfoGroupService = activityInfoGroupService;
        this.activatedRoute = activatedRoute;
    }
    SelectedActivity.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.activityInfo) {
            this.activatedRoute.params.subscribe(function (params) { _this.currentId = +params['id']; });
            this.getSetActivityInfo(this.currentId);
        }
    };
    SelectedActivity.prototype.getSetActivityInfo = function (currentId) {
        this.activityInfo = this.activityInfoGroupService.getById(currentId);
    };
    SelectedActivity.prototype.getName = function (id) {
        if (this.activityInfo)
            return this.activityInfoGroupService.getName(this.activityInfo.ParentId);
        else
            return null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ActivityInfo_1.ActivityInfo)
    ], SelectedActivity.prototype, "activityInfo", void 0);
    SelectedActivity = __decorate([
        core_1.Component({
            selector: 'selected-activity',
            templateUrl: 'app/core/selectedActivity/selectedActivity.html',
        }),
        __param(0, core_1.Inject(activityInfoGroupService_1.ActivityInfoGroupService)),
        __param(1, core_1.Inject(router_1.ActivatedRoute)), 
        __metadata('design:paramtypes', [activityInfoGroupService_1.ActivityInfoGroupService, router_1.ActivatedRoute])
    ], SelectedActivity);
    return SelectedActivity;
}());
exports.SelectedActivity = SelectedActivity;
//# sourceMappingURL=selectedActivityComponent.js.map