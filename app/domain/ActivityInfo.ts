import {EntityBase} from './Entity';

export interface IActivityInfo
{
    Id?: number;
    Title: string;
    Description: string;
    DueDate: Date;
    ParentId?: number;

}

export class ActivityInfo extends EntityBase implements IActivityInfo
{
    constructor(
        public Title: string = null,
        public Description: string = null,
        public DueDate: Date = null,
        public ParentId?: number,
        public Id?: number
    )
    {
        super();
        this.Id = Id;
        this.Title = Title;
        this.Description = Description;
        this.DueDate = DueDate;
        this.ParentId = ParentId;
    }
}
