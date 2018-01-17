/**
 * Created by lucadario on 14/01/18.
 */
import {LightClassic} from "../../lightclassic/models/LightClassic";
import {Light} from "../../lightclassic/models/Light";

export class UserLightAccount{
    get lights(): [Light] {
        return this._lights;
    }

    set lights(value: [Light]) {
        this._lights = value;
    }

    private _id:string;
    private _name:string;
    private _lights:[Light]



    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }


    get light(): [Light] {
        return this._lights;
    }

    set light(value: [Light]) {
        this._lights = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}