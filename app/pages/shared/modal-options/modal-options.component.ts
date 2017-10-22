import {Component, OnInit} from "@angular/core";
import {isAndroid} from "tns-core-modules/platform";
import {ModalDialogParams} from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";
import {DatePicker} from "tns-core-modules/ui/date-picker";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-options.component.html",
    styleUrls: ["./modal-options.component.css"]
})
export class ModalOptionsComponent implements OnInit {


    ascOrder: string = "asc";
    descOrder: string = "desc";

    constructor(private params: ModalDialogParams, private page: Page) {
        console.log('In ModalOptionsComp constructor: ' + this.params.context);
        console.log('In ModalOptionsComp constructor: ' + this.params.context["title"]);
        console.log('In ModalOptionsComp constructor: ' + this.params.context["listOptions"]);
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        this.page.on("unloaded", () => {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            this.params.closeCallback();
        });

    }

    getIconSource(icon: string, iosDir: string): string {
        return isAndroid ? "res://" + icon : "res://" + iosDir + "/" + icon;
    }

    public submit() {
        let datePicker: DatePicker = <DatePicker>this.page.getViewById<DatePicker>("datePicker");
        this.params.closeCallback(datePicker.date);
    }

    optionTapped(tappedOptStr:string, order:string) {
        console.log('$$$$$$$ Tapped option str: ' + tappedOptStr);
        console.log('$$$$$$$ Tapped option str: ' + order);
        this.params.closeCallback();
    }

    cancelTapped() {
        this.params.closeCallback();
    }

}
