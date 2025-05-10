"use strict";
/**
 * 数字校验工具
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonNegativeInteger = exports.isPositiveInteger = exports.isInRange = exports.isNumber = void 0;
/**
 * 检查值是否为数字
 * @param value 要检查的值
 * @returns 如果是数字，则返回true
 */
const isNumber = (value) => {
    return typeof value === "number" && !isNaN(value);
};
exports.isNumber = isNumber;
/**
 * 检查数字是否在指定范围内
 * @param value 要检查的数字
 * @param min 最小值
 * @param max 最大值
 * @returns 如果数字在指定范围内，则返回true
 */
const isInRange = (value, min, max) => {
    return value >= min && value <= max;
};
exports.isInRange = isInRange;
/**
 * 检查是否为正整数
 * @param value 要检查的数字
 * @returns 如果是正整数，则返回true
 */
const isPositiveInteger = (value) => {
    return Number.isInteger(value) && value > 0;
};
exports.isPositiveInteger = isPositiveInteger;
/**
 * 检查是否为非负整数（包括0）
 * @param value 要检查的数字
 * @returns 如果是非负整数，则返回true
 */
const isNonNegativeInteger = (value) => {
    return Number.isInteger(value) && value >= 0;
};
exports.isNonNegativeInteger = isNonNegativeInteger;
//# sourceMappingURL=number.js.map