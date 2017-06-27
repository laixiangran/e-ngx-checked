import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EssenceNg2CheckedModule } from "../../src/essence-ng2-checked.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        EssenceNg2CheckedModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
