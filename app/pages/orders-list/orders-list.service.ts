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

    getOrders(user: User): Promise<Order[]> {

        this.dummyOrderInitialize();
        return Promise.resolve(this.orders);

    }

    private dummyOrderInitialize() {
        this.orders.push({
            purchOrderNum: 12345, salesOrderNum: 2789, licenseNum: 2,
            jobName: 'wal-mart', materialType: MaterialType.fibreglass, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 12346, salesOrderNum: 3789, licenseNum: 2,
            jobName: 'wal-mart', materialType: MaterialType.material, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 1, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
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
            pickupDate: new Date(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 12348, salesOrderNum: 5789, licenseNum: 2,
            jobName: 'Target', materialType: MaterialType.metal, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: true
        });
        this.orders.push({
            purchOrderNum: 12349, salesOrderNum: 6789, licenseNum: 2,
            jobName: 'Target', materialType: MaterialType.material, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345, salesOrderNum: 7789, licenseNum: 2,
            jobName: 'Smiths', materialType: MaterialType.metal, orderType: OrderType.Delivery, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4, confirmedAt: new Date()},
                {confirmed: true, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 22345,
            salesOrderNum: 8789,
            licenseNum: 2,
            jobName: 'Smiths',
            materialType: MaterialType.skylites,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(),
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
            materialType: MaterialType.fibreglass,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(),
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
            materialType: MaterialType.fibreglass,
            orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 32345, salesOrderNum: 100789, licenseNum: 2,
            jobName: 'Sams club', materialType: MaterialType.metal, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 42345,
            salesOrderNum: 110789,
            licenseNum: 2,
            jobName: 'Costco',
            materialType: MaterialType.material,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 62345,
            salesOrderNum: 130789,
            licenseNum: 2,
            jobName: 'Lees',
            materialType: MaterialType.fibreglass,
            orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup, orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
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
            pickupDate: new Date(),
            city: 'Salt lake',
            orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}],
            isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Pickup,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
        this.orders.push({
            purchOrderNum: 52345, salesOrderNum: 120789, licenseNum: 2,
            jobName: 'Costco', materialType: MaterialType.skylites, orderType: OrderType.Delivery,
            orderDate: new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4, confirmedAt: new Date()},
                {confirmed: false, priorDays: 1, confirmedAt: new Date()}], isPickedOrShipped: false
        });
    }
}
