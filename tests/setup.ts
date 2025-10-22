import { beforeAll } from 'bun:test'

// Setup test environment
beforeAll(() => {
  // Mock environment variables for testing
  process.env.NEXT_PUBLIC_APP_ENV = 'test'
  process.env.NEXT_PUBLIC_API_BASE_URL = 'http://localhost:3000/api/v1'

  // Mock console methods to reduce noise during tests
  global.console = {
    ...console,
    warn: () => {},
    error: () => {}
  }
})
