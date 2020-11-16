// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/godson/Documents/Microverse/Javascript/my-portfolio/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/godson/Documents/Microverse/Javascript/my-portfolio/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/godson/Documents/Microverse/Javascript/my-portfolio/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/godson/Documents/Microverse/Javascript/my-portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/godson/Documents/Microverse/Javascript/my-portfolio/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/godson/Documents/Microverse/Javascript/my-portfolio/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/godson/Documents/Microverse/Javascript/my-portfolio/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/godson/Documents/Microverse/Javascript/my-portfolio/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/godson/Documents/Microverse/Javascript/my-portfolio/.cache/layouts/index.js")
}