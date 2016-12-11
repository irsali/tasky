import {Component, Inject, Input} from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';


import {ActivityInfoComponent} from '../activityInfos/activityInfoComponent';
import {ActivityInfo} from '../../domain/ActivityInfo';
import {ActivityInfoGroupService} from './activityInfoGroupService';

@Component({
    selector: 'activity-info-group',    
    templateUrl: 'app/core/activityInfoGroups/activityInfoGroup.html',
    styleUrls: ['app/core/activityInfoGroups/activityInfoGroup.css'], 
})

export class ActivityInfoGroupComponent
{
    @Input()
    groupName: string;
    @Input()
    orientation: string;
    @Input()
    activityInfoList: ActivityInfo[];

    orientationClass: string;

	isDeckOriented(): boolean
	{
		let result: boolean = this.orientation == "deck";
		this.orientationClass = result ? "card card-inverse" : "";
		return result;
	}
}