import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	checkboxValue: number = 0;

	constructor() {}

	changeValue() {
		if (this.checkboxValue === 2) {
			this.checkboxValue = 0;
			return;
		}
		this.checkboxValue++;
	}
}
