import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Components Imports
import { AppComponent } from './app.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { Page404Component } from './components/page404/page404.component';

// Service Import
import { ClientService } from './services/client.service';
import { ClientsComponent } from './components/clients/clients.component';

const appRoute: Routes = [
  {path: '', component: DashbordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]

// Add credential of firebase
export const firebaseConfig = {
    apiKey: 'AIzaSyAJSOW8VN8H-HKTSo_99_6Jg_8Krw1suns',
    authDomain: 'clientpanel-7b146.firebaseapp.com',
    databaseURL: 'https://clientpanel-7b146.firebaseio.com',
    projectId: 'clientpanel-7b146',
    storageBucket: 'clientpanel-7b146.appspot.com',
    messagingSenderId: '1021522846709'
}

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    Page404Component,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
