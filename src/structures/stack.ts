/*
 * @Github: https://github.com/ChasLui
 * @Author: ChasLui
 * @Email: chaslui@outlook.com
 */
/**
 * 栈
 */
export default class Stack<T> {
    private _items: any;
    private _count: number;

    constructor() {
        this._items = [];
        this._count = 0;
    }
    /**
     * 添加一个(或多个)新元素到栈顶
     * @param {Item} element 要添加的元素
     */
    push(element: T) {
        this._items[this._count] = element;
        this._count++;
    }
    /**
     * 移除栈顶的元素
     * 同时返回被移除的元素
     * @returns {Item} 移除的栈顶元素
     */
    pop() {
        if( this.isEmptry() ){
            return undefined;
        }
        this._count--;
        const result = this._items[this._count];
        delete this._items[this._count];
        return result;
    }
    /**
     * 返回栈顶的元素
     * 不对栈顶做任何修改
     * 该方法不会移除栈顶元素,仅仅返回它而已
     * @returns {Item} 栈顶元素
     */
    peek() {
        return this._items[this._count - 1];
    }
    /**
     * 如果栈里没有任何元素就返回 true,否则返回 flse
     */
    isEmptry() {
        return this._count === 0;
    }
    /**
     * 移除栈里所有的元素
     */
    clear() {
        while(!this.isEmptry()) {
            this.pop();
        }
    }
    /**
     * 返回栈里的元素个数
     * 该方法和数组的 length 属性很类似
     */
    size() {
        return this._count;
    }
    /**
     * 模拟数组将这个栈的元素转为字符串
     */
    toString() {
        if(this.isEmptry()){
            return '';
        }
        let objString = `${this._items[0]}`;
        for(let i = 1; i < this._count; i ++) {
            objString = `${objString},${this._items[i]}`;
        }
        return objString;
    }
}