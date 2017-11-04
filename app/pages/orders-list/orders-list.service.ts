import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Order} from "../../model/order";
import {User} from "../../model/user";
import {MaterialType} from "../../model/material-type";
import {OrderType} from "../../model/order-type";

@Injectable()
export class OrdersListService {

    private headers = new Headers({'Content-Type': 'application/json'});

    public orders: Array<Order> = [];

    constructor(private http: Http) {
    }

    getOrders(user: User, startTime: Date, endTime: Date): Promise<Order[]> {

        this.dummyOrderInitialize();
        console.log('service orders: ' + this.orders.length);
        return Promise.resolve(this.orders);

    }

    private getRandomDate(): Date {

        let dt: Date = new Date();
        dt.setDate(new Date().getDate() + (Math.floor(Math.random() * (7 - 0 )) + 0));
        console.log('dt: ' + dt);
        return dt;
    }

    private dummyOrderInitialize() {


        this.orders.push({
            purchOrderNum: 12345, salesOrderNum: 2789, licenseNum: 2,
            jobName: 'wal-mart', materialType: MaterialType.insulation, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 12346, salesOrderNum: 3789, licenseNum: 2,
            jobName: 'wal-mart', materialType: MaterialType.membrane, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 1, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
            ,note: 'Some items are not available. Screws, Nails are not in the confirmed order yet.'
        });
        this.orders.push({
            purchOrderNum: 12347,
            salesOrderNum: 4789,
            licenseNum: 2,
            jobName: 'wal-mart',
            materialType: MaterialType.skylites,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 12348, salesOrderNum: 5789, licenseNum: 2,
            jobName: 'Target', materialType: MaterialType.metal, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 12349, salesOrderNum: 6789, licenseNum: 2,
            jobName: 'Target', materialType: MaterialType.membrane, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 7789, licenseNum: 2,
            jobName: 'Smiths', materialType: MaterialType.metal, orderType: OrderType.Delivery, orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 22345,
            salesOrderNum: 8789,
            licenseNum: 2,
            jobName: 'Smiths',
            materialType: MaterialType.skylites,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(),
            city: 'Salt lake',
            orderPlaced: true,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345,
            salesOrderNum: 9789,
            licenseNum: 2,
            jobName: 'Smiths',
            materialType: MaterialType.insulation,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(),
            city: 'Salt lake',
            orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 22345,
            salesOrderNum: 10789,
            licenseNum: 2,
            jobName: 'Smiths',
            materialType: MaterialType.insulation,
            orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 32345, salesOrderNum: 100789, licenseNum: 2,
            jobName: 'Sams club', materialType: MaterialType.metal, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 42345,
            salesOrderNum: 110789,
            licenseNum: 2,
            jobName: 'Costco',
            materialType: MaterialType.membrane,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 62345,
            salesOrderNum: 130789,
            licenseNum: 2,
            jobName: 'Lees',
            materialType: MaterialType.insulation,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345,
            salesOrderNum: 120789,
            licenseNum: 2,
            jobName: 'Costco',
            materialType: MaterialType.skylites,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: this.getRandomDate(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
    }
}
