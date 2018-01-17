import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LightComponent} from "./lightclassic";
import {UserComponent} from "./user";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {DialogAddLight} from "./lightclassic/dialogaddlight/DialogAddLight";
import {MatNativeDateModule, MatInputModule, MatDialogModule} from "@angular/material";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {LoginComponent} from "./login/login.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {Routes} from "@angular/router";
import {GlobalCredentialUser} from "./global/GlobalCredentialUser";
import {AdminComponent} from "./admin/admin.component";
import {MatMenuModule} from '@angular/material/menu';
import {MenuComponent} from "./menu/menu.component";
import {WrapperuserviewComponent} from "./wrapperuserview/wrapperuserview.component";




@NgModule({
    declarations: [
        AppComponent, LightComponent, UserComponent, DialogAddLight, LoginComponent,AdminComponent,MenuComponent,WrapperuserviewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatMenuModule

    ],
    providers: [GlobalCredentialUser],
    bootstrap: [AppComponent],
    entryComponents: [UserComponent, DialogAddLight]

})

export class AppModule {
}

