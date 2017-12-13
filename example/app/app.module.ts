import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ENgxCheckedModule } from '../../src/e-ngx-checked.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ENgxCheckedModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
