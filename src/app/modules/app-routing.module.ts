import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../components/log-in/log-in.component';
import { RegisterComponent } from '../components/register/register.component';
import { HomeComponent } from '../components/home/home.component';
import { EventsComponent } from '../components/events/events.component';
import { AuthGuardService } from '../service/auth-guard.service';
import { NewEventComponent } from '../components/events/new-event/new-event.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'home', component: HomeComponent , canActivate : [AuthGuardService]},
  { path: 'events', component: EventsComponent, canActivate : [AuthGuardService] },
  { path: 'new-event', component: NewEventComponent, canActivate : [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
