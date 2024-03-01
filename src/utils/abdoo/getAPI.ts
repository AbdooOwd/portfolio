/*interface ApiResponse {
  // Define the structure of the API response if known
  // For example, you can create interfaces for different API responses
  userId: number
  id: number
  title: string
  body: string
  // Add more properties as needed
}*/

export default async function fetchData(apiUrl: string) {
  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data/*: ApiResponse*/ = await response.json()
    return data
  } catch (error) {
    // Handle errors or rethrow for the calling code to handle
    console.error('Error fetching data:', error)
    throw error
  }
}
