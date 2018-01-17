import { Component, OnInit } from '@angular/core';
import {GlobalCredentialUser} from "../global/GlobalCredentialUser";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _credentials: GlobalCredentialUser) {
  }

  logout(){
    this._credentials.role = "N/A";
    this._credentials.tokenBasic = "";
    this._credentials.userid = "";
  }

  ngOnInit() {
  }

}
