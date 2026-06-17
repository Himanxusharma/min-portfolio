/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/ideas',
                destination: '/work',
                permanent: true,
            },
            {
                source: '/ideas/:id',
                destination: '/work/:id',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
