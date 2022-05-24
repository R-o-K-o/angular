import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UserResolveService, UserService} from "./services";

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {AddressComponent} from './components/address/address.component';
import {GeoComponent} from './components/geo/geo.component';
import {CompanyComponent} from './components/company/company.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    AddressComponent,
    GeoComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [UserService, UserResolveService]
})
export class UserModule { }
