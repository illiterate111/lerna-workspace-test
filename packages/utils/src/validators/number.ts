/**
 * 数字校验工具
 */

/**
 * 检查值是否为数字
 * @param value 要检查的值
 * @returns 如果是数字，则返回true
 */
export const isNumber = (value: any): boolean => {
  return typeof value === "number" && !isNaN(value);
};

/**
 * 检查数字是否在指定范围内
 * @param value 要检查的数字
 * @param min 最小值
 * @param max 最大值
 * @returns 如果数字在指定范围内，则返回true
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * 检查是否为正整数
 * @param value 要检查的数字
 * @returns 如果是正整数，则返回true
 */
export const isPositiveInteger = (value: number): boolean => {
  return Number.isInteger(value) && value > 0;
};

/**
 * 检查是否为非负整数（包括0）
 * @param value 要检查的数字
 * @returns 如果是非负整数，则返回true
 */
export const isNonNegativeInteger = (value: number): boolean => {
  return Number.isInteger(value) && value >= 0;
};
