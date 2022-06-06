const { join } = require('path');
const rehypePrettyCode = require('rehype-pretty-code');
const fs = require('fs');

const getTheme = (path) => JSON.parse(fs.readFileSync(require.resolve(path), 'utf-8'));

const rehypePrettyCodeOptions = {
  theme: {
    dark: getTheme('./assets/themes/OneDark-Pro.json'),
    light: getTheme('./assets/themes/OneLight.json'),
  },
  tokensMap: {
    type: 'support.type.primitive',
    prop: 'punctuation.definition.string.begin.markdown',
    operator: 'support.type.property-name',
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
  images: { loader: 'custom' },
  pageExtensions: ['tsx', 'mdx'],
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/docs', destination: '/docs/installation', permanent: true }];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { typescript: true } }],
    });

    return config;
  },
});
