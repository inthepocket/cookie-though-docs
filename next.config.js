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
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx'],
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
