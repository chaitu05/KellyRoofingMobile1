import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptUISideDrawerModule} from "nativescript-pro-ui/sidedrawer/angular";

import {SideDrawerComponent} from "./side-drawer/side-drawer.component";
import {ModalOptionsComponent} from "./modal-options/modal-options.component";
import {MultiSelModalComponent} from "./multi-sel-modal/multi-sel-modal.component";
import {LoadingIndicatorService} from "./loading-indicator.service";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        SideDrawerComponent,
        ModalOptionsComponent,
        MultiSelModalComponent,
    ],
    providers: [
        LoadingIndicatorService
    ],
    exports: [
        SideDrawerComponent,
        ModalOptionsComponent,
        MultiSelModalComponent,
        NativeScriptUISideDrawerModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ModalOptionsComponent, MultiSelModalComponent]
})
export class SharedModule {
}
