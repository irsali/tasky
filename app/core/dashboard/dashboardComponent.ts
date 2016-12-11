import {Component, Inject} from '@angular/core';
//import { View } from '@angular/forms';

@Component({
	selector: 'about',
    template: '{{message}}'
})
export class DashboardComponent
{
	message: string = "Welcome to this wonderful application";
}