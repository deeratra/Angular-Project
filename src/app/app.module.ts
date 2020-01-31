import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Ng2SmartTableModule } from 'ng2-smart-table'
// import { MatTableModule} from '@angular/material/table';
import { MatInputModule, MatProgressSpinnerModule, MatPaginatorModule,
  MatSortModule, MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { BatsmanScoreComponent } from './batsman-score/batsman-score.component';
import { OpponentComponent } from './opponent/opponent.component';
import { AuthenticationService } from './_service/authenticationService';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service'
import { RouterModule } from '@angular/router';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { SearchPlayerComponent } from './search-player/search-player.component';
// import { AComponent } from './a/a.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SidebarComponent,
    HeaderComponent,
    OverviewComponent,
    BatsmanScoreComponent,
    OpponentComponent,
    MatchDetailsComponent,
    SearchPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  //  Ng2SmartTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    //MatTableDataSource,
  ],
  providers: [AuthenticationService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
