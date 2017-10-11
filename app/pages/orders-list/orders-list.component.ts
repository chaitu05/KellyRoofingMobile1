import {Component, Input, OnInit, ViewChild} from "@angular/core";
// import * as elementRegistryModule from 'nativescript-angular/element-registry';
import {Order} from "../../model/order";
import {MaterialType} from "../../model/material-type";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {ActionOptions} from "tns-core-modules/ui/dialogs";
import {ItemEventData} from "tns-core-modules/ui/list-view";
import {environment} from "../../config/environment";
import {TextField} from "tns-core-modules/ui/text-field";
import {SegmentedBar, SegmentedBarItem} from "tns-core-modules/ui/segmented-bar";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {isAndroid} from "tns-core-modules/platform";

/*elementRegistryModule.registerElement("CardView",
    () => require("nativescript-cardview").CardView);
elementRegistryModule.registerElement("FilterSelect",
    () => require("nativescript-filter-select").FilterSelect);*/

@Component({
    selector: "OrdersList",
    moduleId: module.id,
    templateUrl: "./orders-list.component.html",
    styleUrls: ["./orders-list.component.css"]
})
export class OrdersListComponent implements OnInit {

    @Input() fromDate: Date;
    @Input() toDate: Date;
    // @Input() ordersFromTab: Array<Order>;
    public orders: Array<Order> = [];
    public segBarItems: Array<SegmentedBarItem> = [];

    public emptyFilterProp = environment.SelectFilterProp;
    public selectedFilterProp = this.emptyFilterProp;
    public noFilterProp = environment.NoFilterProp;
    public filterOnProps = environment.filterOnProps;

    @ViewChild("filterTextField") filterTf: TextField;

    /* ***********************************************************
        * Use the @ViewChild decorator to get a reference to the drawer component.
        * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
        *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor() {
        console.log('$$$$$$$$  in constructor, to date: ' + this.orders);
    }

    private initSegBarItems() {

        const today = new SegmentedBarItem();
        today.title = "Today";
        this.segBarItems.push(today);

        const tomorrow = new SegmentedBarItem();
        tomorrow.title = "Tomorrow";
        this.segBarItems.push(tomorrow);

        const next7days = new SegmentedBarItem();
        next7days.title = "Next 7 Days";
        this.segBarItems.push(next7days);
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.initSegBarItems();
        this.dummyOrderInitialize();
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

    public getOrderStatus(order: Order): string {

        if (order.isShipped)
            return "Shipped";
        else if (!order.orderPlaced)
            return "Not-Ordered";
        else if (order.orderConfirmations.length == 0 && order.orderPlaced)
            return "Ordered";

        return "Confirmed " + order.orderConfirmations[0].priorDays +
            (order.orderConfirmations[0].priorDays > 1 ? "day " : "days " + "prior");

    };

    getIconSource(icon: string, iosDir: string): string {
        console.log('in icon source');
        return isAndroid ? "res://" + icon : "res://" + iosDir + "/" + icon;
    }

    public filterItemChanged(args) {
        // todo: update showing orders
    }

    public onSegBarSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        console.log('Segmented bar selected index changed: ' + (segmetedBar.selectedIndex + 1));


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

    private dummyOrderInitialize() {
        this.orders.push({
            purchOrderNum: 12345, salesOrderNum: 2789, licenseNum: 2,
            jobName: 'wal-mart', materialType: MaterialType.fibreglass, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false,
        });
        this.orders.push({
            purchOrderNum: 12346, salesOrderNum: 3789, licenseNum: 2,
            jobName: 'wal-mart', materialType: MaterialType.material, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 12347, salesOrderNum: 4789, licenseNum: 2,
            jobName: 'wal-mart', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 12348, salesOrderNum: 5789, licenseNum: 2,
            jobName: 'Target', materialType: MaterialType.metal, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 12349, salesOrderNum: 6789, licenseNum: 2,
            jobName: 'Target', materialType: MaterialType.material, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 7789, licenseNum: 2,
            jobName: 'Smiths', materialType: MaterialType.metal, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 8789, licenseNum: 2,
            jobName: 'Smiths', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 9789, licenseNum: 2,
            jobName: 'Smiths', materialType: MaterialType.fibreglass, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isShipped: true
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 10789, licenseNum: 2,
            jobName: 'Smiths', materialType: MaterialType.fibreglass, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 32345, salesOrderNum: 100789, licenseNum: 2,
            jobName: 'Sams club', materialType: MaterialType.metal, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 42345, salesOrderNum: 110789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.material, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 62345, salesOrderNum: 130789, licenseNum: 2,
            jobName: 'Lees', materialType: MaterialType.fibreglass, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
    }

}
