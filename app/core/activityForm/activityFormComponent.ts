import {Component, Inject, OnInit } from '@angular/core';
import {Form, NgForm } from '@angular/forms';


import {ActivityInfo } from '../../domain/ActivityInfo';
import {ActivityInfoGroupService} from '../activityInfoGroups/activityInfoGroupService';

@Component({
    selector: 'activity-form',
    templateUrl: 'app/core/activityForm/activityForm.html',
})
export class ActivityForm implements OnInit {

    constructor( @Inject(ActivityInfoGroupService) private activityInfoGroupService: ActivityInfoGroupService) {

    }

    ngOnInit(): void {
        this.activities = this.activityInfoGroupService.getAll();
    }

    submitted = false;
    activityInfo: ActivityInfo = new ActivityInfo();
    activities: ActivityInfo[];
    form: NgForm;


    onSubmit(x: NgForm = null) {
        if (x) {
            this.form = x;
        }
        this.submitted = true;
        this.activityInfoGroupService.add(this.activityInfo);
    }

    newActivity(): void {
        this.submitted = false;
        this.activityInfo = new ActivityInfo();
        if (this.form) {
            this.form.reset();
        }

    }



    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.activityInfo); }
}