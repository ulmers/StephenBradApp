import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ChartsModule} from 'ng2-charts';
import { AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { HealthRecFormComponent } from './health-rec-form/health-rec-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GoogleSignInComponent,
    HealthRecFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
