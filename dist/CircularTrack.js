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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularTrack = void 0;
var react_1 = __importStar(require("react"));
var _1 = require("./");
var useCircularDrag_1 = require("./useCircularDrag");
// export const defaultProps = {
// 	stroke: '#CEE0F5',
// 	fill: 'none',
// 	strokeWidth: 20,
// 	strokeLinecap: 'round',
// }
var CircularTrack = function (_a) {
    var _b = _a.stroke, stroke = _b === void 0 ? '#CEE0F5' : _b, _c = _a.fill, fill = _c === void 0 ? 'none' : _c, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 20 : _d, _e = _a.strokeLinecap, strokeLinecap = _e === void 0 ? 'round' : _e, props = __rest(_a, ["stroke", "fill", "strokeWidth", "strokeLinecap"]);
    var _f = _1.useCircularInputContext(), radius = _f.radius, center = _f.center;
    var ref = react_1.useRef(null);
    useCircularDrag_1.useCircularDrag(ref);
    return (react_1.default.createElement("circle", __assign({ stroke: stroke, fill: fill, strokeWidth: strokeWidth, strokeLinecap: strokeLinecap }, props, { ref: ref, cx: center.x, cy: center.y, r: radius })));
};
exports.CircularTrack = CircularTrack;
// CircularTrack.defaultProps = defaultProps
//# sourceMappingURL=CircularTrack.js.map