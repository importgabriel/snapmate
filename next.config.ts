import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ------------------------------------------------------------------ */
  /*  Image optimisation                                                  */
  /* ------------------------------------------------------------------ */
  images: {
    /**
     * remotePatterns lets Next.js proxy and optimise images stored in
     * Supabase Storage.  The wildcard subdomain covers both the project
     * URL format (<ref>.supabase.co) and custom domains.
     *
     * Pattern:  https://<project-ref>.supabase.co/storage/v1/object/public/**
     */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      // Allow signed / private URLs as well
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/sign/**",
      },
    ],

    // Keep the default device sizes; we add a common mobile breakpoint
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],

    // Prefer modern formats for smaller payloads
    formats: ["image/avif", "image/webp"],
  },

  /* ------------------------------------------------------------------ */
  /*  Environment variables surfaced to the browser                       */
  /* ------------------------------------------------------------------ */
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env["NEXT_PUBLIC_SUPABASE_URL"] ?? "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"] ?? "",
  },

  /* ------------------------------------------------------------------ */
  /*  Transpilation                                                       */
  /* ------------------------------------------------------------------ */
  transpilePackages: [
    // react-webcam ships only ESM; Next.js needs to transpile it for SSR
    "react-webcam",
  ],

  /* ------------------------------------------------------------------ */
  /*  Experimental                                                        */
  /* ------------------------------------------------------------------ */
  experimental: {
    // Enable React compiler optimisations (Next.js 14 canary+)
    // serverComponentsExternalPackages keeps heavy AWS SDK out of the
    // browser bundle — Rekognition is server-only.
    serverComponentsExternalPackages: ["@aws-sdk/client-rekognition"],
  },

  /* ------------------------------------------------------------------ */
  /*  Headers — basic security                                            */
  /* ------------------------------------------------------------------ */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            // Camera is required for the face-enrolment flow
            value: "camera=(self), microphone=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
