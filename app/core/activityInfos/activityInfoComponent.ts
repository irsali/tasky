import {Component, Inject, Input, OnInit } from '@angular/core';

import {ActivityInfo} from '../../domain/ActivityInfo';

@Component({
    selector: 'activity-info', 
    templateUrl: 'app/core/activityInfos/activityInfo.html',
    styleUrls: ['app/core/activityInfos/activityInfo.css'],
})
export class ActivityInfoComponent
{
    @Input()
    public activityInfo: ActivityInfo;

    constructor(
    ) { }
}