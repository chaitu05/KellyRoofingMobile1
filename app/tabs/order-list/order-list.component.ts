import {Component, Input, OnInit} from "@angular/core";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
import {Order} from "../../model/order";
import {ItemEventData} from "tns-core-modules/ui/list-view";

elementRegistryModule.registerElement("CardView",
    () => require("nativescript-cardview").CardView);

@Component({
    selector: "OrderList",
    moduleId: module.id,
    templateUrl: "./order-list.component.html",
    styleUrls: ["./order-list.component.css"]
})
export class OrderListComponent implements OnInit {

    public orders: Array<Order> = [];

    @Input() fromDate: Date;
    @Input() toDate: Date;

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
        console.log('$$$$$$$$  in constructor, from date: ' + this.fromDate);
        console.log('$$$$$$$$  in constructor, to date: ' + this.toDate);
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        console.log('$$$$$$$$  in ngOnint, from date: ' + this.fromDate);
        console.log('$$$$$$$$  in ngOnint, to date: ' + this.toDate);
        this.dummyOrderInitialize();
    }

    onOrderTap(args: ItemEventData): void {
        console.log('$$$$$$$$$ Item tapped: ' + args);
    }

    public getOrderStatus(order:Order):string {

        if (order.isShipped)
            return "Shipped";
        else if (!order.orderPlaced)
            return "Not-Ordered";
        else if (order.orderConfirmations.length == 0 && order.orderPlaced)
            return "Ordered";

        return "Confirmed " + order.orderConfirmations[0].priorDays +
            (order.orderConfirmations[0].priorDays > 1 ? "day " : "days " + "prior");

    };

    private dummyOrderInitialize() {
        this.orders.push({
            purchOrderNum: 12345, salesOrderNum: 2789, licenseNum: 2,
            jobName: 'wal-mart', materialType: 'ISO', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false,
        });
        this.orders.push({
            purchOrderNum: 12346, salesOrderNum: 3789, licenseNum: 2,
            jobName: 'wal-mart', materialType: 'Material', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 12347, salesOrderNum: 4789, licenseNum: 2,
            jobName: 'wal-mart', materialType: 'Skylites', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 12348, salesOrderNum: 5789, licenseNum: 2,
            jobName: 'Target', materialType: 'Metal', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 12349, salesOrderNum: 6789, licenseNum: 2,
            jobName: 'Target', materialType: 'Material', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 7789, licenseNum: 2,
            jobName: 'Smiths', materialType: 'Metal', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 8789, licenseNum: 2,
            jobName: 'Smiths', materialType: 'Skylites', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 9789, licenseNum: 2,
            jobName: 'Smiths', materialType: 'ISO', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isShipped: true
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 10789, licenseNum: 2,
            jobName: 'Smiths', materialType: 'ISO', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 32345, salesOrderNum: 100789, licenseNum: 2,
            jobName: 'Sams club', materialType: 'Meta', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 42345, salesOrderNum: 110789, licenseNum: 2,
            jobName: 'Costco', materialType: 'Material', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: 'Skylites', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
        this.orders.push({
            purchOrderNum: 62345, salesOrderNum: 130789, licenseNum: 2,
            jobName: 'Lees', materialType: 'ISO', orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isShipped: false
        });
    }
}
