/*
 * @Github: https://github.com/ChasLui
 * @Author: ChasLui
 * @Email: chaslui@outlook.com
 */
import { Stack } from "../src/typeds"

/**
 * test
 */
describe("typeds 测试", () => {
  it("如果真实是真实的，则有效", () => {
    expect(true).toBeTruthy()
  })
  it('Stack is function', () => {
    expect(typeof Stack).toBe('function')
  })
})