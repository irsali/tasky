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
var MainContent = (function () {
    function MainContent(activityInfoGroupService, activatedRoute) {
        this.activityInfoGroupService = activityInfoGroupService;
        this.activatedRoute = activatedRoute;
        this.ancestorsDisplayName = "Parent Activities Hierarchy";
        this.siblingsDisplayName = "Sibling Activities";
        this.childrenDisplayName = "Child Activities";
    }
    MainContent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { _this.currentId = +params['id']; });
    };
    MainContent.prototype.getAncestors = function () {
        return this.activityInfoGroupService.getAncestors(this.currentId);
    };
    MainContent.prototype.getSublings = function () {
        return this.activityInfoGroupService.getSublings(this.currentId);
    };
    MainContent.prototype.getChildren = function () {
        return this.activityInfoGroupService.getChildren(this.currentId);
    };
    MainContent.prototype.getActivityInfo = function () {
        return this.activityInfoGroupService.getById(this.currentId);
    };
    MainContent = __decorate([
        core_1.Component({
            selector: 'main-content',
            providers: [activityInfoGroupService_1.ActivityInfoGroupService],
            styleUrls: ['app/core/mainContents/mainContent.css'],
            templateUrl: 'app/core/mainContents/mainContent.html',
        }),
        __param(0, core_1.Inject(activityInfoGroupService_1.ActivityInfoGroupService)),
        __param(1, core_1.Inject(router_1.ActivatedRoute)), 
        __metadata('design:paramtypes', [activityInfoGroupService_1.ActivityInfoGroupService, router_1.ActivatedRoute])
    ], MainContent);
    return MainContent;
}());
exports.MainContent = MainContent;
//# sourceMappingURL=mainContentComponent.js.map