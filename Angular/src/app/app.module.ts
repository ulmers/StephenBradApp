import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatSelectModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatExpansionModule, MatInputModule} from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { HealthRecFormComponent } from './health-rec-form/health-rec-form.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: SignInComponent},
  { path: 'health-rec-form', component: HealthRecFormComponent}
];

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
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatStepperModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
