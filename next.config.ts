import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
}

const headers = async () => {
	return [
		{
			source: "/(.*)",
			headers: [
				{
					key: "X-Content-Type-Options",
					value: "",
				},
			],
		},
	]
}

export default nextConfig
export { headers }
