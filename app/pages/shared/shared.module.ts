import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptUISideDrawerModule} from "nativescript-pro-ui/sidedrawer/angular";

import {SideDrawerComponent} from "./side-drawer/side-drawer.component";
import {ModalOptionsComponent} from "./modal-options/modal-options.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        SideDrawerComponent,
        ModalOptionsComponent,
    ],
    exports: [
        SideDrawerComponent,
        ModalOptionsComponent,
        NativeScriptUISideDrawerModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ModalOptionsComponent]
})
export class SharedModule {
}
