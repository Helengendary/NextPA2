/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/search",
                destination: "/search",
            },
            {
                source: "/server",
                destination: "/server-side",
            },
        ]
    }
};

export default nextConfig;
