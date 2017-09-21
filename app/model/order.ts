import {OrderConfirmation} from "./order-confirmation";

export class Order {

    purchOrderNum: number;
    salesOrderNum: number;
    licenseNum: number;
    jobName: string;
    materialType: string; // (ISO, Material, Metal, Skylites)
    orderDate: Date;
    pickupDate: Date;
    city: string;
    orderPlaced: boolean;
    orderConfirmations: OrderConfirmation[];
    isShipped: boolean;
    // orderStatus: string; // ordered, confirmed 4 days prior, confirmed 1 day prior, shipped
    // shippedDate: Date;
    // orderStatus:string;

    /*public orderStatus():string {

        if (this.isShipped)
            return "Shipped";
        else if (!this.orderPlaced)
            return "Not-Ordered";
        else if (this.orderConfirmations.length == 0 && this.orderPlaced)
            return "Ordered";

        return "Confirmed " + this.orderConfirmations[0].priorDays +
            (this.orderConfirmations[0].priorDays > 1 ? "day " : "days " + "prior");

    };*/

    public toString = () => {
        return `Order = (${
        "\nPurchase order number = " + this.purchOrderNum
        + "\nLicense # = " + this.licenseNum
        + "\nJob name = " + this.jobName
        + "\nMaterial type = " + this.materialType
        + "\nSales Order Number = " + this.salesOrderNum
        + "\nOrder date = " + this.orderDate
        + "\nPickup date = " + this.pickupDate
        + "\nCity = " + this.city
        + "\nOrder Placed = " + this.orderPlaced
        + "\nOrder Confirmations = " + this.orderConfirmations
        + "\nOrder Shipped = " + this.isShipped
            })`
    }

}
