System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var TravelShow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TravelShow = (function () {
                function TravelShow() {
                }
                TravelShow = __decorate([
                    core_1.Component({
                        selector: 'travel-show',
                        template: "\n        <style>\n            table#travel-show img {\n                width: 400px;\n                height: 300px;\n            }\n            table#travel-show td.label {\n                width: 25%;\n                text-align: right;\n                color: #555;\n            }\n        </style>\n        <div *ngIf=\"travel\">\n            <h2>Travel details:</h2>\n            <table class=\"pure-table pure-table-bordered\"  id=\"travel-show\">\n                <tbody>\n                    <tr>\n                        <td class=\"label\">Place</td>\n                        <td>{{travel.place}}</td>\n                    </tr>\n                    <tr [hidden]=\"!travel.country\">\n                        <td class=\"label\">Country</td>\n                        <td>{{travel.country}}</td>\n                    </tr>\n                    <tr [hidden]=\"!travel.year\">\n                        <td class=\"label\">Year</td>\n                        <td>{{travel.year}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"label\">Picture</td>\n                        <td><img src=\"img/{{travel.img}}\"/></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
                        directives: [],
                        inputs: ['travel']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TravelShow);
                return TravelShow;
            }());
            exports_1("TravelShow", TravelShow);
        }
    }
});
//# sourceMappingURL=travel-show.js.map