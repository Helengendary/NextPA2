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
        ]
    }
};

export default nextConfig;
