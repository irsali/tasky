import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, RouterOutlet, RouterLink, Routes, Router } from '@angular/router';

import { AppComponent }   from './app.component';
import { AboutComponent } from './core/abouts/aboutComponent';
import { SelectedActivity } from './core/selectedActivity/selectedActivityComponent';
import { ActivityInfoGroupComponent } from './core/activityInfoGroups/activityInfoGroupComponent';
import { ActivityInfoComponent } from './core/activityInfos/activityInfoComponent';
import { ContactUsComponent } from './core/contactUs/contactUsComponent';
import { MainContent } from './core/mainContents/mainContentComponent';
import { Navbar } from './core/uiComponents/navbars/navbarComponent';
import { DashboardComponent } from './core/dashboard/dashboardComponent';
import { ActivityForm } from './core/activityForm/activityFormComponent';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'activityinfogroup', component: ActivityInfoGroupComponent },
    { path: 'activityinfo', component: ActivityInfoComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home/:id', component: MainContent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)        
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AboutComponent,
        SelectedActivity,
        ActivityInfoGroupComponent,
        ActivityInfoComponent,
        ContactUsComponent,
        MainContent,
        Navbar,
        DashboardComponent,
        ActivityForm
    ],
})
export class AppModule { }