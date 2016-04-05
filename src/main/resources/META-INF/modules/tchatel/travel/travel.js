System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Travel;
    return {
        setters:[],
        execute: function() {
            Travel = (function () {
                function Travel(id, place, country, year, img) {
                    this.id = id;
                    this.place = place;
                    this.country = country;
                    this.year = year;
                    this.img = img;
                }
                Travel.prototype.isOld = function () {
                    return this.year < 2015;
                };
                return Travel;
            }());
            exports_1("Travel", Travel);
        }
    }
});
//# sourceMappingURL=travel.js.map