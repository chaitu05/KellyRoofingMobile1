import {Component, Input, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {Order} from "../../model/order";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {ActionOptions} from "tns-core-modules/ui/dialogs";
import {ItemEventData} from "tns-core-modules/ui/list-view";
import {environment} from "../../config/environment";
import {TextField} from "tns-core-modules/ui/text-field";
import {SegmentedBar, SegmentedBarItem} from "tns-core-modules/ui/segmented-bar";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {isAndroid} from "tns-core-modules/platform";
import {OrdersListService} from "./orders-list.service";
import {OrderType} from "../../model/order-type";
import {ModalDialogOptions, ModalDialogService} from "nativescript-angular";
import {ModalOptionsComponent} from "../shared/modal-options/modal-options.component";
import {OrderingParams} from "../shared/modal-options/ordering-params";

@Component({
    selector: "OrdersList",
    moduleId: module.id,
    templateUrl: "./orders-list.component.html",
    styleUrls: ["./orders-list.component.css"]
})
export class OrdersListComponent implements OnInit {

    @Input() fromDate: Date;
    @Input() toDate: Date;
    public orders: Array<Order> = [];
    public segBarItems: Array<SegmentedBarItem> = [];
    public title: string = "";
    public orderStr: string = " Orders";

    public emptyFilterProp = environment.SelectFilterProp;
    public selectedFilterProp = this.emptyFilterProp;
    public noFilterProp = environment.NoFilterProp;
    public filterOnProps = environment.filterOnProps;
    public sortBtnText = environment.SortBtnText;

    @ViewChild("filterTextField") filterTf: TextField;
    // @ViewChild("segBarRef") segBar: SegmentedBar;

    public emptySortProp = environment.SelectSortProp;
    public selectedSortProp = this.emptySortProp;
    public noSortProp = environment.NoSortProp;
    public sortOnProps = environment.SortOnProps;

    public isSortSelected: boolean = false;
    public sortedAsc: boolean = false;

    /* ***********************************************************
        * Use the @ViewChild decorator to get a reference to the drawer component.
        * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
        *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private olService: OrdersListService, private modalService: ModalDialogService,
                private vcRef: ViewContainerRef) {
        console.log('$$$$$$$$  in constructor, to date: ' + this.orders);
    }

    private initSegBarItems() {

        const today = new SegmentedBarItem();
        today.title = "Today";
        this.segBarItems.push(today);
        this.title = today.title + this.orderStr;

        const tomorrow = new SegmentedBarItem();
        tomorrow.title = "Tomorrow";
        this.segBarItems.push(tomorrow);

        const next7days = new SegmentedBarItem();
        next7days.title = "7 Days";
        this.segBarItems.push(next7days);
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.initSegBarItems();
        // this.dummyOrderInitialize();
        this.olService.getOrders(null).then(orders => {
            this.orders = orders;
        });

        // update orders array to push picked up or delivered orders to the bottom


        console.log('$$$$$$$ in orders list comp ngOnInit: ' + this.orders.length);

    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    onOrderTap(args: ItemEventData): void {
        console.log('$$$$$$$$$ Item tapped: ' + args);
    }

    getOrderStatus(order: Order): string {

        if (order.isPickedOrShipped) {
            return order.orderType === OrderType.Pickup ? environment.OrderPickedUp : environment.OrderDelivered;
        }
        else if (!order.orderPlaced)
            return environment.OrderNotOrdered;
        else if (order.orderConfirmations.length == 0 && order.orderPlaced)
            return environment.OrderOrdered;

        return "Confirmed " + order.orderConfirmations[0].priorDays +
            (order.orderConfirmations[0].priorDays > 1 ? " days" : " day") + " prior";

    };

    getOrderStatusColor(order: Order): string {

        let status = this.getOrderStatus(order);

        if (status === environment.OrderConfirmedb41day)
            return environment.skyColor;
        else if (status === environment.OrderConfirmedb44day)
            return "#d261f9";
        else if (status === environment.OrderPickedUp || status === environment.OrderDelivered)
            return "green";
        else if (status === environment.OrderNotOrdered)
            return "red";
        else if (status === environment.OrderOrdered)
            return "#ff8330";

        return "red";
    }

    getButtonStatus(order: Order): string {

        let status = this.getOrderStatus(order);

        if (status === environment.OrderPickedUp)
            return environment.OrderPickedUp;
        else if (status === environment.OrderDelivered)
            return environment.OrderDelivered;

        else {
            if (order.orderType === OrderType.Pickup)
                return environment.PickUp;
            else
                return environment.Deliver;
        }

    }

    getButtonBgColor(order: Order): string {

        if (order.isPickedOrShipped)
            return "#7cc17c";
        else
            return environment.lightenedSkyColor;

    }

    getCardViewRadius(): number {
        return isAndroid ? 35 : 10;
    }

    getIconSource(icon: string, iosDir: string): string {
        console.log('in icon source');
        return isAndroid ? "res://" + icon : "res://" + iosDir + "/" + icon;
    }

    public filterItemChanged(args) {
        // todo: update showing orders
    }

    public confirmPickup(args) {
        let o: Order = args as Order;
        console.log('Job name: ' + o.jobName + "" +
            "\nDate string: " + new Date().toLocaleString("en-US"));

        dialogs.confirm({
            title: "Picking up Order",
            message: "I am picking up \"" + o.jobName + "-" + o.salesOrderNum
            + "\" order at " + new Date().toLocaleString(),
            okButtonText: "Yes",
            cancelButtonText: "No",

        }).then((result) => {
            console.log(result)
        });
    }

    /*public segBarLoaded() {
        console.log('In segbar loaded');
        if(isAndroid) {
            let andTabView = (<any>this.segBar)._getAndroidTabView();
            for (var i = 0; i < this.segBar.items.length; i++) {
                andTabView.getTextViewForItemAt(i).setAllCaps(false);
            }
        }
    }*/


    public onSegBarSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.title = segmetedBar.items[segmetedBar.selectedIndex].title + this.orderStr;
        console.log('Segmented bar selected index changed: ' + (segmetedBar.selectedIndex) + "\nTitle: " + this.title);
    }

    onMainMenuTap(): void {
        console.log('$$$$$$$$$$$$$$ Main menu tapped.')
        this.drawerComponent.sideDrawer.showDrawer();
        /*this.routerExtensions.navigate(['main-menu'], {
            transition: {
                name: "slideTop"
            }
        });*/
    }

    public showFilterListPicker(args) {

        var options: ActionOptions = {
            message: "Select Filter",
            cancelButtonText: "Cancel",
            actions: this.filterOnProps
        };

        dialogs.action(options).then((result) => {
            console.log(result);
            if (result === 'Cancel' || result === this.noFilterProp)
                this.selectedFilterProp = this.emptyFilterProp;
            else {
                this.selectedFilterProp = result;
                this.filterTf.focus();
            }
        });
    }

    public showSortListPicker(args) {

        this.showModalOptions(environment.SortOnProps).then((result: OrderingParams) => {
            console.log('came back from modal: ' + result);
            if (!!result) {
                if (!!result.paramName) { // sort param selected.
                    console.log('came back from modal: ' + result.paramName);
                    console.log('came back from modal: ' + result.ascOrder + "\t !: " + !result.ascOrder);
                    this.isSortSelected = true;
                    this.sortedAsc = result.ascOrder;
                    this.sortBtnText = result.paramName;
                    console.log('came back from modal: ' + this.isSortSelected + "\t !: " + !this.sortedAsc);
                }
                else { // clear sort tapped.
                    this.isSortSelected = false;
                    this.sortBtnText = environment.SortBtnText;
                    this.sortedAsc = false;
                }
            }
        }).catch(error => this.handleError(error));

        /*var options: ActionOptions = {
            message: "Select Sort",
            cancelButtonText: "Cancel",
            actions: this.sortOnProps
        };

        dialogs.action(options).then((result) => {
            console.log(result);
            if (result === 'Cancel' || result === this.noSortProp)
                this.selectedSortProp = this.emptySortProp;
            else {
                this.selectedSortProp = result;
            }
        });*/
    }

    private showModalOptions(listOptions: Array<string>): Promise<any> {
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: {"listOptions": listOptions, "title": "Sort On"},
            fullscreen: false,
        };

        return this.modalService.showModal(ModalOptionsComponent, options);
    }

    private handleError(error: any) {
        // TODO: handle error
        console.log("\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Error: " + error);
    }
}
