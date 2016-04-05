import {bootstrap}    from 'angular2/platform/browser'
import {provide} from "angular2/core";
import {LocationStrategy} from "angular2/router";
import {HashLocationStrategy} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";
import {APP_BASE_HREF} from "angular2/router";

import {TravelApp} from "./travel-app";
import {TravelManager} from "./travel-manager";
import {SampleTravelManager} from "./travel-manager";


bootstrap(TravelApp, [
    provide(TravelManager, {useClass: SampleTravelManager}),
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(APP_BASE_HREF, {useValue: '/'})
]);
