let currentActivity: {
	projectName: string
	fileName: string
	timeStamp: Date | null
} = {
	projectName: "",
	fileName: "",
	timeStamp: null,
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
	const headers = new Headers({
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "POST",
	})
	const contentLength = req.headers.get("content-length")
	if (!contentLength || parseInt(contentLength) === 0) {
		currentActivity = {
			projectName: "",
			fileName: "",
			timeStamp: null,
		}
		return new Response(JSON.stringify({ success: true }), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 200,
		})
	}
	const data = await req.json()

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
		timeStamp: currentActivity.timeStamp || new Date(),
	}

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			"Content-Type": "application/json",
		},
		status: 200,
	})
}
