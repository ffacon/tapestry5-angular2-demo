System.register(["angular2/core", "angular2/router", "./travel-manager"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, travel_manager_1;
    var TravelEdit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (travel_manager_1_1) {
                travel_manager_1 = travel_manager_1_1;
            }],
        execute: function() {
            TravelEdit = (function () {
                function TravelEdit(tm, params) {
                    this.travel = tm.find(params.get('id'));
                }
                TravelEdit = __decorate([
                    core_1.Component({
                        selector: 'travel-edit',
                        template: "\n        <h2>Edit travel: {{travel.place}}</h2>\n        <form class=\"pure-form pure-form-aligned\">\n            <fieldset>\n                <div class=\"pure-control-group\">\n                    <label for=\"name\">Place</label>\n                    <input id=\"name\" type=\"text\" [(ngModel)]=\"travel.place\"/>\n                </div>\n                <div class=\"pure-control-group\">\n                    <label for=\"email\">Country</label>\n                    <input id=\"email\" type=\"text\" [(ngModel)]=\"travel.country\"/>\n                </div>\n                <div class=\"pure-control-group\">\n                    <label for=\"phone\">Year</label>\n                    <input id=\"phone\" type=\"number\" [(ngModel)]=\"travel.year\"/>\n                </div>\n                <div class=\"pure-controls\">\n                    <a [routerLink]=\"['/List']\" class=\"pure-button pure-button-primary\">Return to list</a>\n                </div>\n            </fieldset>\n        </form>\n    ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [travel_manager_1.TravelManager, router_1.RouteParams])
                ], TravelEdit);
                return TravelEdit;
            }());
            exports_1("TravelEdit", TravelEdit);
        }
    }
});
//# sourceMappingURL=travel-edit.js.map