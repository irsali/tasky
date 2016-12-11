import {Component, Inject} from '@angular/core';
//import { View } from '@angular/forms';

@Component({
	selector: 'about',
	template: 'This is about page created by {{name}}'
})
export class AboutComponent
{
	name: string = "Irshad Ali";
}