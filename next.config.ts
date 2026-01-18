import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  transpilePackages: ['firebase', '@firebase/app', '@firebase/firestore', '@firebase/auth', '@firebase/util', '@firebase/component', '@firebase/logger'],
};

export default withFlowbiteReact(nextConfig);