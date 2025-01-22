import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images:{
  remotePatterns:[
     {
        protocol: "https",
        hostname: "img.clerk.com", // Changed from 'host' to 'hostname'
        port: "", // Optional, can be empty string
        pathname: "/**", // This allows all paths under img.clerk.com
      },
     {
        protocol: "https",
        hostname: "ucarecdn.com", // Changed from 'host' to 'hostname'
        port: "", // Optional, can be empty string
        pathname: "/**", // This allows all paths under img.clerk.com
      },
  ]
}
};

export default nextConfig;
