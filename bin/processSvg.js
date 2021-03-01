const Svgo = require('svgo');
const cheerio = require('cheerio')
const framework = process.env.npm_package_config_framework || 'react'

/**
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase())
}

/**
 * @param {string} svg
 * @returns {Promise<string>}
 */
function optimize(svg, name) {
  let plugins = [
    { convertShapeToPath: false },
    { mergePaths: false },
    { removeTitle: true },
  ]
  if (!/^color/i.test(name)) {
    plugins.push({ removeAttrs: { attrs: '(fill|stroke.*)' }})
  }
  const svgo = new Svgo({
    plugins,
  });

  return new Promise(resolve => {
    svgo.optimize(svg).then(({ data }) => resolve(data));
  });
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $('body').children().html();
}

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg, name) {
  const optimized = await optimize(svg, name)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then(svg => svg.replace(/;/g, ''))
    .then(removeSVGElement)
    .then(svg =>
      framework==='react' ?
      svg.replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => `${a}${CamelCase(b)}=`) :
      svg
    )
  return optimized;
}

module.exports = processSvg;
