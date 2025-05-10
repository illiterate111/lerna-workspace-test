/**
 * 字符串校验工具
 */

/**
 * 检查字符串是否为空
 * @param value 要检查的字符串
 * @returns 如果字符串为空或仅包含空白字符，则返回true
 */
export const isEmpty = (value?: string): boolean => {
  return value === undefined || value === null || value.trim() === "";
};

/**
 * 检查字符串是否为有效的电子邮件格式
 * @param email 要检查的电子邮件字符串
 * @returns 如果是有效的电子邮件格式，则返回true
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 检查字符串是否为有效的中国手机号
 * @param phone 要检查的手机号字符串
 * @returns 如果是有效的中国手机号，则返回true
 */
export const isValidChinesePhone = (phone: string): boolean => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phone);
};

/**
 * 检查字符串长度是否在指定范围内
 * @param value 要检查的字符串
 * @param min 最小长度
 * @param max 最大长度
 * @returns 如果字符串长度在指定范围内，则返回true
 */
export const isLengthBetween = (
  value: string,
  min: number,
  max: number
): boolean => {
  return value.length >= min && value.length <= max;
};
