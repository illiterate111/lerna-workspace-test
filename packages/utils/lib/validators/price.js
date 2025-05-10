"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPrice = void 0;
/**
 * 验证价格是否有效
 *
 * @description 检查输入的价格是否为有效的正数值
 * @param price - 要验证的价格，可以是数字或字符串类型
 * @returns 如果价格是有效的正数，则返回true；否则返回false
 * @example
 * isValidPrice(100) // 返回 true
 * isValidPrice("50.5") // 返回 true
 * isValidPrice(0) // 返回 false
 * isValidPrice(-10) // 返回 false
 * isValidPrice("abc") // 返回 false
 */
const isValidPrice = (price) => {
    // 检测价格的输入是否合法
    const inputPriceType = typeof price;
    if (inputPriceType !== "number" && inputPriceType !== "string")
        return false;
    // 检测价格是否为正数
    const priceNumVal = Number(price);
    return !isNaN(priceNumVal) && priceNumVal > 0;
};
exports.isValidPrice = isValidPrice;
//# sourceMappingURL=price.js.map