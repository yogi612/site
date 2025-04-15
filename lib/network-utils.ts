/**
 * Utility functions for handling network requests and errors
 */

/**
 * Attempts to execute a function with retries on failure
 * @param fn The async function to execute
 * @param retries Number of retries
 * @param delay Delay between retries in ms
 * @returns Result of the function
 */
export async function withRetry<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    if (retries <= 0) throw error

    console.log(`Retrying operation, ${retries} attempts left`)
    await new Promise((resolve) => setTimeout(resolve, delay))
    return withRetry(fn, retries - 1, delay)
  }
}

/**
 * Checks if the error is a network-related error
 * @param error The error to check
 * @returns True if it's a network error
 */
export function isNetworkError(error: any): boolean {
  return (
    error instanceof TypeError &&
    (error.message === "Failed to fetch" ||
      error.message.includes("NetworkError") ||
      error.message.includes("Network request failed"))
  )
}

/**
 * Creates an AbortController with a timeout
 * @param timeoutMs Timeout in milliseconds
 * @returns AbortController
 */
export function createTimeoutController(timeoutMs = 10000): AbortController {
  const controller = new AbortController()
  setTimeout(() => controller.abort(), timeoutMs)
  return controller
}
