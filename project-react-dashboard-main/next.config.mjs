/** @type {import('next').NextConfig} */
const nextConfig = {    
    reactStrictMode: true,
    images: { unoptimized: true },
    optimizeFonts: false,
    env: {
        CHAT_BASE: process.env.CHAT_BASE,
        CHAT_PATH: process.env.CHAT_PATH,
        CHAT_RESPONSE: process.env.CHAT_RESPONSE,
        CHAT_API_BASE: process.env.CHAT_BASE_API_URL,
        CHAT_STOP_STREAM_PATH: process.env.CHAT_STOP_STREAM_PATH,
        CHAT_REFERENCES_PATH : process.env.CHAT_REFERENCES_PATH,
        CHAT_FEEDBACK_PATH : process.env.CHAT_FEEDBACK_PATH,
    }
};

export default nextConfig;
