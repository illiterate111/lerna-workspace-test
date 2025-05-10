/**
 * 对象校验工具
 */
/**
 * 检查对象是否为空（没有自己的可枚举属性）
 * @param obj 要检查的对象
 * @returns 如果对象为空，则返回true
 */
export declare const isEmptyObject: (obj: Record<string, any>) => boolean;
/**
 * 检查对象是否包含指定的所有属性
 * @param obj 要检查的对象
 * @param props 需要检查的属性数组
 * @returns 如果对象包含所有指定的属性，则返回true
 */
export declare const hasAllProperties: (obj: Record<string, any>, props: string[]) => boolean;
/**
 * 检查对象是否至少包含指定属性中的一个
 * @param obj 要检查的对象
 * @param props 需要检查的属性数组
 * @returns 如果对象至少包含一个指定的属性，则返回true
 */
export declare const hasAnyProperty: (obj: Record<string, any>, props: string[]) => boolean;
//# sourceMappingURL=object.d.ts.map