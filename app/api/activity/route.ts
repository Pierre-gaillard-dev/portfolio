let currentActivity: {
	projectName: string
	fileName: string
	timestamp: string
} = {
	projectName: "",
	fileName: "",
	timestamp: "",
}

export async function GET(req: Request) {
	return new Response(JSON.stringify(currentActivity), {
		headers: {
			"Content-Type": "application/json",
		},
		status: 200,
	})
}

export async function POST(req: Request) {
	const data = await req.json()

	if (!data) {
		currentActivity = {
			projectName: "",
			fileName: "",
			timestamp: "",
		}
	}

	const projectName: string = data.projectName ? data.projectName : ""
	const fileName: string = data?.fileName ? data.fileName : ""

	if (!projectName) {
		return new Response(JSON.stringify({ success: false }), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 400,
		})
	}
	console.log("start activity", projectName, fileName)

	currentActivity = {
		projectName,
		fileName,
		timestamp: currentActivity.timestamp || Date().toString(),
	}

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			"Content-Type": "application/json",
		},
		status: 200,
	})
}
