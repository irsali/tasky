import 'rxjs/add/operator/switchMap';
import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute, Params, Route }   from '@angular/router';
import { Location }                 from '@angular/common';

import {ActivityInfoGroupComponent} from '../activityInfoGroups/activityInfoGroupComponent';
import {ActivityInfoGroupService} from '../activityInfoGroups/activityInfoGroupService';
import {ActivityInfo } from '../../domain/ActivityInfo';

@Component({
    selector: 'main-content',
    providers: [ActivityInfoGroupService],
    styleUrls: ['app/core/mainContents/mainContent.css'],
    templateUrl: 'app/core/mainContents/mainContent.html',
})
export class MainContent implements OnInit {
    ancestorsDisplayName: string = "Parent Activities Hierarchy";
    siblingsDisplayName: string = "Sibling Activities";
    childrenDisplayName: string = "Child Activities";

    currentId: number;

    constructor( @Inject(ActivityInfoGroupService) private activityInfoGroupService: ActivityInfoGroupService, @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => { this.currentId = +params['id'] });
    }

    getAncestors(): ActivityInfo[] {
        return this.activityInfoGroupService.getAncestors(this.currentId);
    }

    getSublings(): ActivityInfo[] {
        return this.activityInfoGroupService.getSublings(this.currentId);
    }

    getChildren(): ActivityInfo[] {
        return this.activityInfoGroupService.getChildren(this.currentId);
    }

    getActivityInfo(): ActivityInfo {
        return this.activityInfoGroupService.getById(this.currentId);
    }
}