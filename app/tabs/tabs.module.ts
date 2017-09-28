import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";

import { OrderListComponent } from "./order-list/order-list.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUIListViewModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        OrderListComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
