import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import {OrdersListRoutingModule} from "./orders-list-routing.module";
import {OrdersListComponent} from "./orders-list.component";

@NgModule({
    imports: [
        NativeScriptModule,
        OrdersListRoutingModule,
    ],
    declarations: [
        OrdersListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OrdersListModule { }
