const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/dspinkman/intro-site/.cache/dev-404-page.js"))),
  "component---node-modules-dspinkman-gatsby-theme-intro-src-pages-404-js": hot(preferDefault(require("/home/dspinkman/intro-site/node_modules/@dspinkman/gatsby-theme-intro/src/pages/404.js"))),
  "component---node-modules-dspinkman-gatsby-theme-intro-src-templates-index-js": hot(preferDefault(require("/home/dspinkman/intro-site/node_modules/@dspinkman/gatsby-theme-intro/src/templates/index.js")))
}

