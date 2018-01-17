/**
 * Created by lucadario on 16/01/18.
 */
import {Light} from "../models/Light";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Component, Inject} from "@angular/core";
@Component({
    selector: 'dialog-addlight',
    templateUrl: './dialog-addlight.html',
    styleUrls: ['./dialog-addlight.css']
})
export class DialogAddLight {

    private _lightsType;
    private _type: string;
    private _id: string;
    private _consumption: string;
    private _location: string;

    constructor(public dialogRef: MatDialogRef<DialogAddLight>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this._lightsType = [
            {value: "lightclassic", viewValue: "Luce Classica"}
        ]
    };

    onNoClick(): void {
        this.dialogRef.close();
    }
}