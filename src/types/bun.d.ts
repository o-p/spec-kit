declare module 'bun:test' {
  export function test(name: string, fn: () => void | Promise<void>): void
  export function describe(name: string, fn: () => void): void
  export function beforeAll(fn: () => void | Promise<void>): void
  export function beforeEach(fn: () => void | Promise<void>): void
  export function afterAll(fn: () => void | Promise<void>): void
  export function afterEach(fn: () => void | Promise<void>): void
  export function expect(actual: any): {
    toBe(expected: any): void
    toEqual(expected: any): void
    toBeTruthy(): void
    toBeFalsy(): void
    toBeNull(): void
    toBeUndefined(): void
    toBeDefined(): void
    toContain(expected: any): void
    toThrow(expected?: any): void
    toHaveLength(expected: number): void
    toBeGreaterThan(expected: number): void
    toBeLessThan(expected: number): void
    toMatch(expected: string | RegExp): void
    toHaveProperty(property: string, value?: any): void
    not: {
      toBe(expected: any): void
      toEqual(expected: any): void
      toBeTruthy(): void
      toBeFalsy(): void
      toBeNull(): void
      toBeUndefined(): void
      toBeDefined(): void
      toContain(expected: any): void
      toThrow(expected?: any): void
      toHaveLength(expected: number): void
      toBeGreaterThan(expected: number): void
      toBeLessThan(expected: number): void
      toMatch(expected: string | RegExp): void
      toHaveProperty(property: string, value?: any): void
    }
  }
}
