import {Light} from "./Light";
/**
 * Created by lucadario on 12/01/18.
 */
export class LightClassic implements Light {
    _id: string;
    _type: string;
    _consumption: number;
    _location: string;
    _status: boolean;


    constructor() {
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get consumption(): number {
        return this._consumption;
    }

    set consumption(value: number) {
        this._consumption = value;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }

    fromJSON(json): LightClassic {
        this._id = json.id;
        this._consumption = json.consumption;
        this._location = json.location;

        if (json.status == "on") {
            this._status = true;
        }
        else if (json.status == "off") {
            this._status = false;
        }

        this._type = json.type;
        return this;

    }


}