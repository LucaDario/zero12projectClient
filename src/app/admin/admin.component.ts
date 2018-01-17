import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {GlobalCredentialUser} from "../global/GlobalCredentialUser";
import {UserLightAccount} from "../user/models/UserLightAccount";
import {Light} from "../lightclassic/models/Light";
import {LightClassic} from "../lightclassic/models/LightClassic";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private _usersAndConsumptions = [];
  private _headers = new HttpHeaders;

  constructor(private _http: HttpClient,  private _credentials: GlobalCredentialUser) {
    this._headers = new HttpHeaders()
        .set("Authorization", "Basic " + _credentials.tokenBasic)
        .set("Content-Type", "application/json")
        .set("Access-Control-Allow-Origin", "http://localhost:4200")
        .set("withCredentials", "true");

  }

  ngOnInit() {
    const headers = this._headers;
    this._http.get("http://localhost:8094/admin/alluser", {headers: headers})
        .subscribe(data => {

              let array = data as Array<UserLightAccount>;
              for(let user of array){
                let arrayLight = user.lights as Array<Light>;
                let consumptionForUser = 0;
                for(let light of arrayLight){
                  let lightC = light as LightClassic;

                  if(lightC.status.toString() == "on"){
                    consumptionForUser = consumptionForUser + lightC.consumption;
                  }

                }

                this._usersAndConsumptions[this._usersAndConsumptions.length] = {user: user.id, consumption: consumptionForUser}

              }
              console.log(this._usersAndConsumptions);

            },
            error => console.log(error));
  }

}
