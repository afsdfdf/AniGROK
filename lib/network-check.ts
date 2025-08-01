// Network connectivity check utility
export async function checkNetworkConnectivity(): Promise<boolean> {
  try {
    // Create a timeout promise
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    // Try to fetch a simple endpoint
    const response = await fetch('https://httpbin.org/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    })
    
    clearTimeout(timeoutId)
    return response.ok
  } catch (error) {
    console.warn('Network connectivity check failed:', error)
    return false
  }
}

// Alternative API check
export async function checkGoogleAPIConnectivity(): Promise<boolean> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    // Try to access Google's API without making an actual request
    const response = await fetch('https://generativelanguage.googleapis.com/', {
      method: 'HEAD',
      signal: controller.signal,
    })
    
    clearTimeout(timeoutId)
    return response.status !== 404 // Any response means we can reach Google's servers
  } catch (error) {
    console.warn('Google API connectivity check failed:', error)
    return false
  }
}