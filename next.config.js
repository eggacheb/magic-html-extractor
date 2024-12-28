/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        'chrome-aws-lambda': 'chrome-aws-lambda',
      });
    }
    return config;
  },
  // Enable static optimization
  output: 'standalone',
  // Ensure CSS/SASS modules are enabled
  sassOptions: {
    includePaths: ['./styles'],
  },
  // Configure PostCSS
  postcss: true,
}

module.exports = nextConfig 