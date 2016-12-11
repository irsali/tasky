import { Injectable, OnInit } from '@angular/core';

import {ActivityInfo } from '../../domain/ActivityInfo';
import {ACTIVITYINFOES} from '../../mock/activityInfo.mock';

@Injectable()
export class ActivityInfoGroupService implements OnInit {
    private activityInfoList: Array<ActivityInfo>;
    constructor() {
        this.activityInfoList = ACTIVITYINFOES;
    }

    ngOnInit(): void {

    }

    add(activityInfo: ActivityInfo): void {
        if (!activityInfo.Id) {
            activityInfo.Id = this.getNextId();
            this.activityInfoList.push(activityInfo);
        }
    }

    getNextId(): number {
        var activity = this.activityInfoList[this.activityInfoList.length - 1];
        return activity.Id + 1;
    }

    getAll(): ActivityInfo[] {
        return this.activityInfoList;
    }

    getAncestors(id: number): ActivityInfo[] {
        let ancestors: ActivityInfo[] = new Array<ActivityInfo>();
        let currentActivityInfo: ActivityInfo = this.getParentById(id);

        while (currentActivityInfo != null) {
            ancestors.push(currentActivityInfo);
            currentActivityInfo = this.getById(currentActivityInfo.ParentId);
        }

        return ancestors.reverse();
    }

    getSublings(id: number): ActivityInfo[] {
        let currentActivityInfo = this.getById(id);

        if (currentActivityInfo == null) {
            return null;
        }

        let siblingActivityInfos: ActivityInfo[] = this.activityInfoList.filter((activityInfo, index, activityInfoArray) => {
            return activityInfo.ParentId == currentActivityInfo.ParentId;
        });;

        return siblingActivityInfos;
    }

    getChildren(id: number): ActivityInfo[] {
        let childActivityInfos: ActivityInfo[] = this.activityInfoList.filter((activityInfo, index, activityInfoArray) => {
            return activityInfo.ParentId == id;
        });

        return childActivityInfos;
    }

    public getById(id: number): ActivityInfo {
        let activityInfos: ActivityInfo[] = this.activityInfoList.filter((activityInfo, index, activityInfoArray) => {
            return activityInfo.Id == id;
        });

        if (activityInfos != null && activityInfos.length > 0) {
            return activityInfos[0];
        }

        return null;
    }

    public getName(id: number): string {
        let activityInfos: ActivityInfo[] = this.activityInfoList.filter((activityInfo, index, activityInfoArray) => {
            return activityInfo.Id == id;
        });

        if (activityInfos != null && activityInfos.length > 0) {
            return activityInfos[0].Title;
        }

        return null;
    }

    private getParentById(id: number): ActivityInfo {
        let activityInfo: ActivityInfo = this.getById(id);

        if (activityInfo != null && activityInfo.ParentId != null) {
            return this.getById(activityInfo.ParentId);
        }
        return null;
    }
}