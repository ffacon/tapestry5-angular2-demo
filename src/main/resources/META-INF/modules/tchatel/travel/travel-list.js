System.register(["angular2/core", "angular2/router", './travel-manager', './travel-show'], function(exports_1, context_1) {
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
    var core_1, router_1, travel_manager_1, travel_show_1;
    var TravelList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (travel_manager_1_1) {
                travel_manager_1 = travel_manager_1_1;
            },
            function (travel_show_1_1) {
                travel_show_1 = travel_show_1_1;
            }],
        execute: function() {
            TravelList = (function () {
                function TravelList(tm) {
                    this.tm = tm;
                    this.travels = this.tm.list;
                }
                TravelList.prototype.select = function (travel) {
                    this.selectedTravel = travel;
                    return false;
                };
                TravelList.prototype.remove = function (travel) {
                    this.tm.remove(travel);
                    return false;
                };
                TravelList = __decorate([
                    core_1.Component({
                        selector: 'travel-list',
                        template: "\n        <style>\n            table#travel-list img {\n                width: 60px;\n                height: 45px;\n            }\n            table#travel-list .old {\n                color: brown;\n            }\n        </style>\n        <h2>Travels List:</h2>\n        <table class=\"pure-table pure-table-horizontal\" id=\"travel-list\">\n            <thead>\n                <tr>\n                    <td>Picture</td><td>Place</td><td>Country</td><td>Year</td><td></td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#travel of travels\">\n                    <td><img src=\"img/{{travel.img ||\u00A0'none.jpg'}}\"/></td>\n                    <td [ngClass]=\"{old: travel.isOld()}\">{{travel.place}}</td>\n                    <td>{{travel.country}}</td>\n                    <td>{{travel.year}}</td>\n                    <td>\n                        <a href (click)=\"select(travel)\" class=\"pure-button\">\n                            <i class=\"fa fa-caret-square-o-down\"></i> Show\n                        </a>\n                        <a href [routerLink]=\"['/Edit', {id: travel.id}]\" class=\"pure-button\">\n                            <i class=\"fa fa-pencil-square-o\"></i> Edit\n                        </a>\n                        <a href (click)=\"remove(travel)\" class=\"pure-button\">\n                            <i class=\"fa fa-trash-o\"></i> Remove\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <travel-show [travel]=\"selectedTravel\"></travel-show>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, travel_show_1.TravelShow]
                    }), 
                    __metadata('design:paramtypes', [travel_manager_1.TravelManager])
                ], TravelList);
                return TravelList;
            }());
            exports_1("TravelList", TravelList);
        }
    }
});
//# sourceMappingURL=travel-list.js.map