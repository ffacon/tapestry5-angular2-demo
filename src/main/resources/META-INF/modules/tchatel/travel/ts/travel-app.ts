import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";

import {TravelList} from "./travel-list";
import {TravelEdit} from "./travel-edit";


@RouteConfig([
    { path: '/',            component: TravelList, as: 'List' },
    { path: '/edit/:id',    component: TravelEdit, as: 'Edit' },
])
@Component({
    selector: 'travel-app',
    template: `
        <h1>Angular 2 : Sample Travels Application</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class TravelApp {
    constructor() {
    }
}

