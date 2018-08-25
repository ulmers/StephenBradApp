import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HealthRecFormComponent } from '../health-rec-form/health-rec-form.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: 'form', component: HealthRecFormComponent},
  { path: '', component: AppComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
