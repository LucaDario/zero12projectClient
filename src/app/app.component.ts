import { Component } from '@angular/core';
import {GlobalCredentialUser} from "./global/GlobalCredentialUser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {


  private _logged: boolean;
  private _role: string;
  private _tokenBasic: string;

  constructor(private _credentials : GlobalCredentialUser) {}
}
