

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


export type BoycottList = {
	success: boolean
	data?: {
		id: number
		brandName: string
		brandImage: string
		proofLink: string
		ownedBy?: string
	}
}

const example_boycott: BoycottList = {
	success: true,
	data: {
		id: 13,
		brandName: "Garnier",
		brandImage: "garnier.jpg",
		proofLink: "https://bdsmovement.net/news/l’oreal-makeup-israeli-apartheid",
		ownedBy: "L'Oréal"
	}
}

export function get_example_data() {
	return example_boycott
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function fetchData(apiUrl: string): Promise<any> {
	try {
		const response = await fetch(apiUrl);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data: BoycottList = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}