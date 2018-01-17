import {Component, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalCredentialUser} from "../global/GlobalCredentialUser";


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: []
})
export class LoginComponent implements OnInit {

    private _username: string;
    private _password: string;


    constructor(private _http: HttpClient, private _credentials: GlobalCredentialUser) {
    }

    onClickAccess() {
        const headers = new HttpHeaders()
            .set("Authorization", "Basic " + btoa(this._username + ":" + this._password))
            .set("Content-Type", "application/json")
            .set("Access-Control-Allow-Origin", "http://localhost:4200")
            .set("withCredentials", "true");
        this._http.get("http://localhost:8094/common/role?userid=" + this._username, {headers: headers})
            .subscribe(data => {

                    this._credentials.role = data[0];
                    this._credentials.tokenBasic = btoa(this._username + ":" + this._password);
                    this._credentials.userid = this._username;

                },
                error => {
                    alert("Nome utente o password errari");
                    console.log(error);
                });
    }

    ngOnInit() {
    }

}
