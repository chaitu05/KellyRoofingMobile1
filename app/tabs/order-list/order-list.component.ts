import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "OrderList",
    moduleId: module.id,
    templateUrl: "./order-list.component.html"
})
export class OrderListComponent implements OnInit {

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
    }
}
