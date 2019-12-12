import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { BatsmanScoreComponent } from './batsman-score/batsman-score.component';
import { OpponentComponent } from './opponent/opponent.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path : '',
    redirectTo:'login',
    pathMatch :'full'
  },
  {
    path : 'login',
    component: LoginComponent
  },
  
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path :'register',
    component : RegisterComponent
  },
  {
    path :'sidebar',
    component: SidebarComponent,
    canActivate :[AuthGuard],
    children :[
      { path:'', redirectTo:'overview',pathMatch:'full', },
      { path:'overview', component: OverviewComponent,},
      { path :'batsman_score', component:BatsmanScoreComponent},
      { path :'opponent', component:OpponentComponent }
    
    ]
  },
  {
    path :'header',
    component: HeaderComponent
  },  
];

@NgModule({
  imports:[ RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
