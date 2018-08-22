import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GoogleSignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
