"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Entity_1 = require('./Entity');
var ActivityInfo = (function (_super) {
    __extends(ActivityInfo, _super);
    function ActivityInfo(Title, Description, DueDate, ParentId, Id) {
        if (Title === void 0) { Title = null; }
        if (Description === void 0) { Description = null; }
        if (DueDate === void 0) { DueDate = null; }
        _super.call(this);
        this.Title = Title;
        this.Description = Description;
        this.DueDate = DueDate;
        this.ParentId = ParentId;
        this.Id = Id;
        this.Id = Id;
        this.Title = Title;
        this.Description = Description;
        this.DueDate = DueDate;
        this.ParentId = ParentId;
    }
    return ActivityInfo;
}(Entity_1.EntityBase));
exports.ActivityInfo = ActivityInfo;
//# sourceMappingURL=ActivityInfo.js.map