import {Component, OnInit} from "@angular/core";
import {LightClassic} from "./models/LightClassic";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Light} from "./models/Light";
import {MatDialog} from "@angular/material";
import {DialogAddLight} from "./dialogaddlight/DialogAddLight";
import {GlobalCredentialUser} from "../global/GlobalCredentialUser";


@Component({
    selector: 'light',
    templateUrl: './light.component.html',
    styleUrls: ['./light.component.css'],
    providers: []
})
export class LightComponent implements OnInit {

    private statusLightForToggle: string;
    private lights = [];
    private headers: HttpHeaders;
    private consumptionTotal = 0;


    constructor(public dialog: MatDialog, private _http: HttpClient,  private _credentials: GlobalCredentialUser) {


        this.headers = new HttpHeaders()
            .set("Authorization", "Basic " + _credentials.tokenBasic)
            .set("Content-Type", "application/json")
            .set("Access-Control-Allow-Origin", "http://localhost:4200")
            .set("withCredentials", "true");

    }


    public changeStatus($event, id) {

        let status;
        if ($event.checked == true) {
            status = "on";
        }
        else if ($event.checked == false) {
            status = "off";
        }
        const headers = this.headers;
        this._http.post("http://localhost:8094/user/setstatus", {
            userid: this._credentials.userid,
            status: status,
            lightid: id
        }, {headers: headers}).subscribe(data => {

                for (let light of this.lights) {
                    if (light.id == id && $event.checked == false) {
                        this.consumptionTotal -= light.consumption;
                        light._status = false;
                    }
                    else if (light.id == id && $event.checked == true) {
                        this.consumptionTotal += light.consumption;
                        light._status = true;
                    }
                }

            },
            error => console.log(error));
    }

    public deleteLight(id, light: Light) {
        const headers = this.headers;
        this._http.delete("http://localhost:8094/user/deletelight?userid=" + this._credentials.userid + "&lightid=" + id, {headers: headers})
            .subscribe(data => {


                if(light._status == true){
                    this.consumptionTotal = this.consumptionTotal-light._consumption;
                }
                },
                error => console.log(error));
        let index = this.lights.indexOf(light);
        this.lights.splice(index, 1);

    }


    openDialog(): void {
        let dialogRef = this.dialog.open(DialogAddLight, {
            width: '250px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {

            this.addLight(result);

        });
    }

    private addLight(result) {
        if (result != undefined) {
            let jsonResult = {
                id: result[0],
                consumption: result[2],
                location: result[1],
                type: result[3],
                status: "off"
            };

            const headers = this.headers;
            this._http.put("http://localhost:8094/user/addlight", {
                userid: this._credentials.userid,
                lightid: result[0],
                lighttype: result[3],
                consumption: result[2],
                location: result[1],
                state: 'off'
            }, {headers: headers}).subscribe(data => {
                console.log("ciao");
                    this.lights[this.lights.length] = new LightClassic().fromJSON(jsonResult);


                },
                error => {
                console.log(error);
                if(error.error.error == "idLight not Unique"){
                    alert("Id Luce Già inserito");
                }

        });



        }


    }

    ngOnInit() {
        const headers = this.headers;
        this._http.get("http://localhost:8094/user/light?userid="+this._credentials.userid, {headers: headers})
            .subscribe(data => {
                    let i = 0;
                    let array = data as Array<Light>;
                    for (let light of array) {
                        let l = new LightClassic().fromJSON(light);
                        this.lights[i] = l;
                        i++;


                        if (l.status == true) {
                            this.consumptionTotal += l.consumption;
                        }

                    }

                },
                error => console.log(error));

    }
}

