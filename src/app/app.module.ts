import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
// import { WarningAlertComponent } from './warning-alert/warning-alert.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';
// import { UsernameComponent } from './username/username.component';
import { TunaObscuraComponent } from './tuna-obscura/tuna-obscura.component';

@NgModule({
  declarations: [AppComponent, TunaObscuraComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
