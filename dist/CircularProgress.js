"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularProgress = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var utils_1 = require("./utils");
// const defaultProps = {
// 	stroke: '#3D99FF',
// }
var CircularProgress = function (_a) {
    var _b = _a.stroke, stroke = _b === void 0 ? '#3D99FF' : _b, rest = __rest(_a, ["stroke"]);
    var _c = _1.useCircularInputContext(), value = _c.value, radius = _c.radius, center = _c.center;
    var innerCircumference = utils_1.DEG_360_IN_RAD * radius;
    return (react_1.default.createElement(_1.CircularTrack, __assign({ stroke: stroke }, rest, { strokeDasharray: innerCircumference, strokeDashoffset: innerCircumference * (1 - value), transform: "rotate(-90 " + center.x + " " + center.y + ")" })));
};
exports.CircularProgress = CircularProgress;
// CircularProgress.defaultProps = defaultProps
//# sourceMappingURL=CircularProgress.js.map