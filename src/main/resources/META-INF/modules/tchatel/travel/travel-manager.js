System.register(['./travel'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var travel_1;
    var TravelManager, SampleTravelManager;
    return {
        setters:[
            function (travel_1_1) {
                travel_1 = travel_1_1;
            }],
        execute: function() {
            TravelManager = (function () {
                function TravelManager() {
                    this.list = [];
                }
                TravelManager.prototype.find = function (id) {
                    return this.list.filter(function (c) { return c.id == id; })[0];
                };
                TravelManager.prototype.remove = function (travel) {
                    var index = this.list.indexOf(travel);
                    this.list.splice(index, 1);
                };
                return TravelManager;
            }());
            exports_1("TravelManager", TravelManager);
            SampleTravelManager = (function (_super) {
                __extends(SampleTravelManager, _super);
                function SampleTravelManager() {
                    _super.call(this);
                    this.list.push(new travel_1.Travel("SF2015", "San Francisco", "USA", 2015, "sanfrancisco.jpg"), new travel_1.Travel("NA2014", "Nantes", "France", 2014, "nantes.jpg"), new travel_1.Travel("BX2014", "Bruxelles", "Belgique", 2014, "bruxelles.jpg"), new travel_1.Travel("YO2014", "Yosemite", "USA", 2014, "yosemite.jpg"), new travel_1.Travel("BT2013", "Bretagne", "France", 2013, "bretagne.jpg"));
                }
                return SampleTravelManager;
            }(TravelManager));
            exports_1("SampleTravelManager", SampleTravelManager);
        }
    }
});
//# sourceMappingURL=travel-manager.js.map