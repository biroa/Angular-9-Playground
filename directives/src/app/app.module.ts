import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-hightlight/better-highlight.directive';
import {BetterHighlightWithPropertiesDirective} from './better-highlight-with-properties/better-highlight-with-properties.directive';

import { AppComponent } from './app.component';
import { CustomunlessDirective } from './customunless.directive';
//import { Custom } from './custom.unless.directive';
import { UnlessDirective } from './custom/unless.directive';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BetterHighlightWithPropertiesDirective,
    CustomunlessDirective,
    Custom.UnlessDirective,
    UnlessDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
