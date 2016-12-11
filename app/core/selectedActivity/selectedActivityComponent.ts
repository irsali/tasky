import 'rxjs/add/operator/switchMap';
import {Component, OnInit, Inject, Input} from '@angular/core';
import {ActivatedRoute, Params, Route }   from '@angular/router';
import { Location }                 from '@angular/common';

import {ActivityInfoGroupService} from '../activityInfoGroups/activityInfoGroupService';
import {ActivityInfo } from '../../domain/ActivityInfo';

@Component({
    selector: 'selected-activity',
    templateUrl: 'app/core/selectedActivity/selectedActivity.html',
})
export class SelectedActivity implements OnInit {

    constructor( @Inject(ActivityInfoGroupService) private activityInfoGroupService: ActivityInfoGroupService, @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute) { }

    currentId: number;
    @Input()
    activityInfo: ActivityInfo;

    ngOnInit() {
        if (!this.activityInfo) {
            this.activatedRoute.params.subscribe((params: Params) => { this.currentId = +params['id'] });
            this.getSetActivityInfo(this.currentId);
        }
    }

    getSetActivityInfo(currentId) {
        this.activityInfo = this.activityInfoGroupService.getById(currentId);
    }

    getName(id): string {
        if (this.activityInfo)
            return this.activityInfoGroupService.getName(this.activityInfo.ParentId);
        else
            return null;
    }
}