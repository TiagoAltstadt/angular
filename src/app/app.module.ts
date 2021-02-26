import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BigTextComponent } from './big-text/big-text.component';
import { AnotherComponentComponent } from './another-component/another-component.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BigTextComponent,
    AnotherComponentComponent,
    Assignment2Component,
    CreateServerComponent,
    Assignment3Component,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
