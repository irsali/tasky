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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var aboutComponent_1 = require('./core/abouts/aboutComponent');
var selectedActivityComponent_1 = require('./core/selectedActivity/selectedActivityComponent');
var activityInfoGroupComponent_1 = require('./core/activityInfoGroups/activityInfoGroupComponent');
var activityInfoComponent_1 = require('./core/activityInfos/activityInfoComponent');
var contactUsComponent_1 = require('./core/contactUs/contactUsComponent');
var mainContentComponent_1 = require('./core/mainContents/mainContentComponent');
var navbarComponent_1 = require('./core/uiComponents/navbars/navbarComponent');
var dashboardComponent_1 = require('./core/dashboard/dashboardComponent');
var activityFormComponent_1 = require('./core/activityForm/activityFormComponent');
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'activityinfogroup', component: activityInfoGroupComponent_1.ActivityInfoGroupComponent },
    { path: 'activityinfo', component: activityInfoComponent_1.ActivityInfoComponent },
    { path: 'contactus', component: contactUsComponent_1.ContactUsComponent },
    { path: 'about', component: aboutComponent_1.AboutComponent },
    { path: 'home/:id', component: mainContentComponent_1.MainContent },
    { path: 'dashboard', component: dashboardComponent_1.DashboardComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule],
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                aboutComponent_1.AboutComponent,
                selectedActivityComponent_1.SelectedActivity,
                activityInfoGroupComponent_1.ActivityInfoGroupComponent,
                activityInfoComponent_1.ActivityInfoComponent,
                contactUsComponent_1.ContactUsComponent,
                mainContentComponent_1.MainContent,
                navbarComponent_1.Navbar,
                dashboardComponent_1.DashboardComponent,
                activityFormComponent_1.ActivityForm
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map