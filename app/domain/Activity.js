"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Entity_1 = require('./Entity');
var Activity = (function (_super) {
    __extends(Activity, _super);
    function Activity(Title, Description, CreatedOn, Id) {
        _super.call(this);
        this.Title = Title;
        this.Description = Description;
        this.CreatedOn = CreatedOn;
        this.Id = Id;
        this.Id = Id;
        this.Title = Title;
        this.Description = Description;
        this.CreatedOn = CreatedOn;
    }
    return Activity;
}(Entity_1.EntityBase));
exports.Activity = Activity;
//# sourceMappingURL=Activity.js.map