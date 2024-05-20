import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { TruncatePipe } from './helpers/pipes/truncate.pipe';
import { HighlighterDirective } from './helpers/directives/highlighter.directive';

const pipes = [
  TruncatePipe
];

const directives = [
  HighlighterDirective
];

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    ...pipes,
    ...directives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
