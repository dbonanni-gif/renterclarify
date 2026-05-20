/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/alabama-tenant-rights",      destination: "/states/alabama",       permanent: true },
      { source: "/alaska-tenant-rights",       destination: "/states/alaska",        permanent: true },
      { source: "/arizona-tenant-rights",      destination: "/states/arizona",       permanent: true },
      { source: "/arkansas-tenant-rights",     destination: "/states/arkansas",      permanent: true },
      { source: "/california-tenant-rights",   destination: "/states/california",    permanent: true },
      { source: "/colorado-tenant-rights",     destination: "/states/colorado",      permanent: true },
      { source: "/connecticut-tenant-rights",  destination: "/states/connecticut",   permanent: true },
      { source: "/delaware-tenant-rights",     destination: "/states/delaware",      permanent: true },
      { source: "/florida-tenant-rights",      destination: "/states/florida",       permanent: true },
      { source: "/georgia-tenant-rights",      destination: "/states/georgia",       permanent: true },
      { source: "/hawaii-tenant-rights",       destination: "/states/hawaii",        permanent: true },
      { source: "/idaho-tenant-rights",        destination: "/states/idaho",         permanent: true },
      { source: "/illinois-tenant-rights",     destination: "/states/illinois",      permanent: true },
      { source: "/indiana-tenant-rights",      destination: "/states/indiana",       permanent: true },
      { source: "/iowa-tenant-rights",         destination: "/states/iowa",          permanent: true },
      { source: "/kansas-tenant-rights",       destination: "/states/kansas",        permanent: true },
      { source: "/kentucky-tenant-rights",     destination: "/states/kentucky",      permanent: true },
      { source: "/louisiana-tenant-rights",    destination: "/states/louisiana",     permanent: true },
      { source: "/maine-tenant-rights",        destination: "/states/maine",         permanent: true },
      { source: "/maryland-tenant-rights",     destination: "/states/maryland",      permanent: true },
      { source: "/massachusetts-tenant-rights",destination: "/states/massachusetts", permanent: true },
      { source: "/michigan-tenant-rights",     destination: "/states/michigan",      permanent: true },
      { source: "/minnesota-tenant-rights",    destination: "/states/minnesota",     permanent: true },
      { source: "/mississippi-tenant-rights",  destination: "/states/mississippi",   permanent: true },
      { source: "/missouri-tenant-rights",     destination: "/states/missouri",      permanent: true },
      { source: "/montana-tenant-rights",      destination: "/states/montana",       permanent: true },
      { source: "/nebraska-tenant-rights",     destination: "/states/nebraska",      permanent: true },
      { source: "/nevada-tenant-rights",       destination: "/states/nevada",        permanent: true },
      { source: "/new-hampshire-tenant-rights",destination: "/states/new-hampshire", permanent: true },
      { source: "/new-jersey-tenant-rights",   destination: "/states/new-jersey",    permanent: true },
      { source: "/new-mexico-tenant-rights",   destination: "/states/new-mexico",    permanent: true },
      { source: "/new-york-tenant-rights",     destination: "/states/new-york",      permanent: true },
      { source: "/north-carolina-tenant-rights",destination: "/states/north-carolina",permanent: true },
      { source: "/north-dakota-tenant-rights", destination: "/states/north-dakota",  permanent: true },
      { source: "/ohio-tenant-rights",         destination: "/states/ohio",          permanent: true },
      { source: "/oklahoma-tenant-rights",     destination: "/states/oklahoma",      permanent: true },
      { source: "/oregon-tenant-rights",       destination: "/states/oregon",        permanent: true },
      { source: "/pennsylvania-tenant-rights", destination: "/states/pennsylvania",  permanent: true },
      { source: "/rhode-island-tenant-rights", destination: "/states/rhode-island",  permanent: true },
      { source: "/south-carolina-tenant-rights",destination: "/states/south-carolina",permanent: true },
      { source: "/south-dakota-tenant-rights", destination: "/states/south-dakota",  permanent: true },
      { source: "/tennessee-tenant-rights",    destination: "/states/tennessee",     permanent: true },
      { source: "/texas-tenant-rights",        destination: "/states/texas",         permanent: true },
      { source: "/utah-tenant-rights",         destination: "/states/utah",          permanent: true },
      { source: "/vermont-tenant-rights",      destination: "/states/vermont",       permanent: true },
      { source: "/virginia-tenant-rights",     destination: "/states/virginia",      permanent: true },
      { source: "/washington-tenant-rights",   destination: "/states/washington",    permanent: true },
      { source: "/west-virginia-tenant-rights",destination: "/states/west-virginia", permanent: true },
      { source: "/wisconsin-tenant-rights",    destination: "/states/wisconsin",     permanent: true },
      { source: "/wyoming-tenant-rights",      destination: "/states/wyoming",       permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://us-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
