/**
 * Created by lucadario on 16/01/18.
 */

import {Injectable} from "@angular/core";


@Injectable()
export class GlobalCredentialUser{

    private _role: string = "N/A";
    private _tokenBasic: string = "";
    private _userid: string;


    get userid(): string {
        return this._userid;
    }

    set userid(value: string) {
        this._userid = value;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    get tokenBasic(): string {
        return this._tokenBasic;
    }

    set tokenBasic(value: string) {
        this._tokenBasic = value;
    }

}