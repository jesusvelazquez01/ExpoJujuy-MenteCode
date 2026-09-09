import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const requestedBasePath = process.env.PAGES_BASE_PATH ??
  (process.env.GITHUB_PAGES === "true" && repositoryName
    ? `/${repositoryName}`
    : "");
const basePath = requestedBasePath === "/" ? "" : requestedBasePath.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
