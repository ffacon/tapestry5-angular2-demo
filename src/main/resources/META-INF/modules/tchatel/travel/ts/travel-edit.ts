import {Component} from "angular2/core";
import {RouteParams} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";

import {Travel} from "./travel";
import {TravelManager} from "./travel-manager";


@Component({
    selector: 'travel-edit',
    template: `
        <h2>Edit travel: {{travel.place}}</h2>
        <form class="pure-form pure-form-aligned">
            <fieldset>
                <div class="pure-control-group">
                    <label for="name">Place</label>
                    <input id="name" type="text" [(ngModel)]="travel.place"/>
                </div>
                <div class="pure-control-group">
                    <label for="email">Country</label>
                    <input id="email" type="text" [(ngModel)]="travel.country"/>
                </div>
                <div class="pure-control-group">
                    <label for="phone">Year</label>
                    <input id="phone" type="number" [(ngModel)]="travel.year"/>
                </div>
                <div class="pure-controls">
                    <a [routerLink]="['/List']" class="pure-button pure-button-primary">Return to list</a>
                </div>
            </fieldset>
        </form>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class TravelEdit {
    travel: Travel;
    constructor(tm: TravelManager, params: RouteParams) {
        this.travel = tm.find(params.get('id'));
    }
}
