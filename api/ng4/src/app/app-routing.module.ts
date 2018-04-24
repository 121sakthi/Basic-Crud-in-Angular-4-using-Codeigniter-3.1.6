import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './dashboard.component';
import {UsersComponent}      from './users.component';
import {UserDetailComponent}  from './user-detail.component';
import {UserAddComponent} from './user-add.component';
import {UserUpdateComponent} from './user-update.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'update/:id', component: UserUpdateComponent},
  {path: 'users', component: UsersComponent},
  {path: 'add', component: UserAddComponent},
  {path: 'product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
