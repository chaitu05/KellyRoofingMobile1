import { Component, OnInit, ViewChild } from "@angular/core";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";

@Component({
    selector: "Profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onMainMenuTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
