/*
 * @Github: https://github.com/ChasLui
 * @Author: ChasLui
 * @Email: chaslui@outlook.com
 */
import Stack from '../../src/structures/stack';

describe('stack测试', () => {
    it('初识栈为空', () => {
        const stack = new Stack();
        expect(stack.isEmptry()).toBe(true)
    });
    it('栈顶添加元素', () => {
        const stack = new Stack();
        stack.push(3);
        stack.push(5);
        expect(stack.peek()).toBe(5);
    });
    it('获取栈大小', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(3);
        stack.push(3);
        expect(stack.size()).toBe(3);
    });
    it('清空栈', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(213);
        stack.push(23);
        expect(stack.isEmptry()).toBe(false);
        stack.clear();
        expect(stack.isEmptry()).toBe(true)
    });
    it('验证空栈toString方法', () => {
        const stack = new Stack();
        expect(stack.toString()).toBe('');
    });
    it('验证toString方法', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push({a: 2});
        stack.push([3,4]);
        expect(stack.toString()).toBe('1,[object Object],3,4');
    });
    it('用栈解决十进制转二进制问题', () => {
        const decimalToBinary = (decNumber: number): string => {
            const stack = new Stack();
            let binaryString = ''
            let rem;
            let number = decNumber;
            // 除以2取余数
            while(number > 0) {
                rem = Math.floor(number % 2);
                stack.push(rem);
                number  = Math.floor(number / 2);
            }
            // 栈顶取值
            while(!stack.isEmptry()){
                binaryString += stack.pop().toString();
            }

            return binaryString;
        }
        expect(decimalToBinary(233)).toBe('11101001');
    });
    
});