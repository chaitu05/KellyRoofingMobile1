import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import {OrdersListRoutingModule} from "./orders-list-routing.module";
import {OrdersListComponent} from "./orders-list.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        NativeScriptModule,
        OrdersListRoutingModule,
        SharedModule
    ],
    declarations: [
        OrdersListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OrdersListModule { }
