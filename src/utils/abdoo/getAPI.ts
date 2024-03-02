

/* This is how notoisrael.net's api looks like:
{
		  "success": true,
		  "data": {
			  "id": "the id",
			  "brandName": "the brand name",
			  "brandImage": "image of brand",
			  "proofLink": "the proof link"
		  }
		}
*/

interface BoycottList {
	success: boolean
	data?: {
		id: number
		brandName: string
		brandImage: string
		proofLink: string
	}
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function fetchData(apiUrl: string): Promise<any> {
	try {
		const response = await fetch(apiUrl);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}