import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import {OrdersListRoutingModule} from "./orders-list-routing.module";
import {OrdersListComponent} from "./orders-list.component";
import {SharedModule} from "../shared/shared.module";
import {OrdersListService} from "./orders-list.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        NativeScriptModule,
        OrdersListRoutingModule,
        HttpModule,
        SharedModule
    ],
    declarations: [
        OrdersListComponent
    ],
    providers: [
        OrdersListService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OrdersListModule { }
