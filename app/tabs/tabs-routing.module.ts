import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TabsComponent } from "./tabs.component";
import {ScratchCompComponent} from "./scratch-comp/scratch-comp.component";

const routes: Routes = [
    { path: "", component: TabsComponent },
    // { path: "", component: ScratchCompComponent },
    { path: "scratch", component: ScratchCompComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TabsRoutingModule { }
