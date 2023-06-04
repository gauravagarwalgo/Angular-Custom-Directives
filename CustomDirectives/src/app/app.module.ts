import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirectives/setbackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { HoverDirective } from './CustomDirectives/hover.directive';
import { BetterHighlightDirective } from './CustomDirectives/better-highlight.directive';
import { ClassDirective } from './CustomDirectives/class.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterHighlightDirective,
    ClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
