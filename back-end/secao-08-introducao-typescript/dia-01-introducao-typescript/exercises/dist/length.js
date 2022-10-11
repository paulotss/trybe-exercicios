"use strict";
var units;
(function (units) {
    units[units["km"] = 1000] = "km";
    units[units["hm"] = 100] = "hm";
    units[units["dam"] = 10] = "dam";
    units[units["m"] = 1] = "m";
    units[units["dm"] = 0.1] = "dm";
    units[units["cm"] = 0.01] = "cm";
    units[units["mm"] = 0.001] = "mm";
})(units || (units = {}));
function lengthConvert(value, base, convert) {
    const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    const pos1 = units.indexOf(base) + 1;
    const pos2 = units.indexOf(convert) + 1;
    const multi = pos1 - pos2;
    if (multi > 0) {
        console.log(value / (Math.pow(10, Math.abs(multi))));
    }
    else if (multi < 0) {
        console.log(value * (Math.pow(10, Math.abs(multi))));
    }
    else {
        console.log(value);
    }
}
lengthConvert(10, 'm', 'km');
