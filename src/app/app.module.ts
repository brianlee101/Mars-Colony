import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EncountersComponent } from './encounters/encounters.component';
import { ReportComponent } from './report/report.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register',component: RegisterComponent},
  {path:'encounters',components: EncountersComponent},
  {path:'report', components: ReportComponent},
  {path:'notfound', components: NotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    EncountersComponent,
    ReportComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
