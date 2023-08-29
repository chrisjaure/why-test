const { remarkCodeHike } = require("@code-hike/mdx")

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme: 'material-default' }]],
  },
})

const basePath = process.env.NODE_ENV === 'development' ? '' : '/why-test'

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  eslint: { ignoreDuringBuilds: true },
  basePath,
  images: {
    unoptimized: true
  }
})
