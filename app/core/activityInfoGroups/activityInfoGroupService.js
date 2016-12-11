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
var core_1 = require('@angular/core');
var activityInfo_mock_1 = require('../../mock/activityInfo.mock');
var ActivityInfoGroupService = (function () {
    function ActivityInfoGroupService() {
        this.activityInfoList = activityInfo_mock_1.ACTIVITYINFOES;
    }
    ActivityInfoGroupService.prototype.ngOnInit = function () {
    };
    ActivityInfoGroupService.prototype.add = function (activityInfo) {
        if (!activityInfo.Id) {
            activityInfo.Id = this.getNextId();
            this.activityInfoList.push(activityInfo);
        }
    };
    ActivityInfoGroupService.prototype.getNextId = function () {
        var activity = this.activityInfoList[this.activityInfoList.length - 1];
        return activity.Id + 1;
    };
    ActivityInfoGroupService.prototype.getAll = function () {
        return this.activityInfoList;
    };
    ActivityInfoGroupService.prototype.getAncestors = function (id) {
        var ancestors = new Array();
        var currentActivityInfo = this.getParentById(id);
        while (currentActivityInfo != null) {
            ancestors.push(currentActivityInfo);
            currentActivityInfo = this.getById(currentActivityInfo.ParentId);
        }
        return ancestors.reverse();
    };
    ActivityInfoGroupService.prototype.getSublings = function (id) {
        var currentActivityInfo = this.getById(id);
        if (currentActivityInfo == null) {
            return null;
        }
        var siblingActivityInfos = this.activityInfoList.filter(function (activityInfo, index, activityInfoArray) {
            return activityInfo.ParentId == currentActivityInfo.ParentId;
        });
        ;
        return siblingActivityInfos;
    };
    ActivityInfoGroupService.prototype.getChildren = function (id) {
        var childActivityInfos = this.activityInfoList.filter(function (activityInfo, index, activityInfoArray) {
            return activityInfo.ParentId == id;
        });
        return childActivityInfos;
    };
    ActivityInfoGroupService.prototype.getById = function (id) {
        var activityInfos = this.activityInfoList.filter(function (activityInfo, index, activityInfoArray) {
            return activityInfo.Id == id;
        });
        if (activityInfos != null && activityInfos.length > 0) {
            return activityInfos[0];
        }
        return null;
    };
    ActivityInfoGroupService.prototype.getName = function (id) {
        var activityInfos = this.activityInfoList.filter(function (activityInfo, index, activityInfoArray) {
            return activityInfo.Id == id;
        });
        if (activityInfos != null && activityInfos.length > 0) {
            return activityInfos[0].Title;
        }
        return null;
    };
    ActivityInfoGroupService.prototype.getParentById = function (id) {
        var activityInfo = this.getById(id);
        if (activityInfo != null && activityInfo.ParentId != null) {
            return this.getById(activityInfo.ParentId);
        }
        return null;
    };
    ActivityInfoGroupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ActivityInfoGroupService);
    return ActivityInfoGroupService;
}());
exports.ActivityInfoGroupService = ActivityInfoGroupService;
//# sourceMappingURL=activityInfoGroupService.js.map