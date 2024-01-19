/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.postimg.cc',
				port: ''
			}
		]
	}
}

export default nextConfig
