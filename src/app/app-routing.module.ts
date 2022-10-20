import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path:'',
		component: LoginComponent,
		pathMatch: 'full'
  },
  {
    path:'home',
		component: HomeComponent,
		pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path:'**',
		redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
