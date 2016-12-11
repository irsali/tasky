import {EntityBase} from './Entity';

export interface IActivity
{
    Id?: number;
    Title: string;
    Description: string;
    CreatedOn: Date;
}

export class Activity extends EntityBase implements IActivity
{
    constructor(
        public Title: string,
        public Description: string,
        public CreatedOn: Date,
        public Id?: number
    )
    {
        super();
        this.Id = Id;
        this.Title = Title;
        this.Description = Description;
        this.CreatedOn = CreatedOn;
    }
}
