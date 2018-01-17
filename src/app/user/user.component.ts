import {Component, OnInit, Inject} from "@angular/core";
import {UserLightAccount} from "./models/UserLightAccount";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalCredentialUser} from "../global/GlobalCredentialUser";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    private _user: UserLightAccount = new UserLightAccount("user.id","usr.name");
    private _headers: HttpHeaders;


    constructor(private _http: HttpClient, private _credentials: GlobalCredentialUser) {
        this._headers = new HttpHeaders()
            .set("Authorization", "Basic " + this._credentials.tokenBasic)
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .set("Access-Control-Allow-Origin", "http://localhost:4200");






    }



    ngOnInit() {

        const headers = this._headers;
        this._http.get(" http://localhost:8094/user/userbyid?userid=" + this._credentials.userid, {headers: headers})
            .subscribe(data => {
                    this._user = data as UserLightAccount;
                    console.log(this._user.id)
                },
                error => {
                    console.log(error);
                });


    }



}



