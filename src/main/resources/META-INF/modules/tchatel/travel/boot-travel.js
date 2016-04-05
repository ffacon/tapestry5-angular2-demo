System.register(['angular2/platform/browser', "angular2/core", "angular2/router", "./travel-app", "./travel-manager"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, router_1, router_2, router_3, router_4, travel_app_1, travel_manager_1, travel_manager_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
                router_4 = router_1_1;
            },
            function (travel_app_1_1) {
                travel_app_1 = travel_app_1_1;
            },
            function (travel_manager_1_1) {
                travel_manager_1 = travel_manager_1_1;
                travel_manager_2 = travel_manager_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(travel_app_1.TravelApp, [
                core_1.provide(travel_manager_1.TravelManager, { useClass: travel_manager_2.SampleTravelManager }),
                router_3.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_2.HashLocationStrategy }),
                core_1.provide(router_4.APP_BASE_HREF, { useValue: '/' })
            ]);
        }
    }
});
//# sourceMappingURL=boot-travel.js.map