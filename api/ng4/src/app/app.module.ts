// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {UsersComponent} from './users.component';
import {UserDetailComponent} from './user-detail.component';
import {DashboardComponent} from './dashboard.component';
import {UserAddComponent} from './user-add.component';
import {UserUpdateComponent} from './user-update.component';

// Services
import {UserService} from './user.service';
import { ProductComponent } from './product/product.component';

import { PagerService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent,
    UserAddComponent,
    UserUpdateComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService,PagerService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
