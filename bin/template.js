const getAttrs = (style) => {
  const baseAttrs = {
    'xmlns': 'http://www.w3.org/2000/svg',
    ':width': 'size',
    ':height': 'size',
    'viewBox': '0 0 64 64',
    'aria-hidden': 'true',
    'v-on': '$listeners'
  }
  const fillAttrs = {
    ':fill': 'color'
  }
  const strokeAttrs = {
    ':stroke': 'color',
    'fill': 'none',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  <template>
    <svg
      ${attrs}
    >
      ${svgCode}
    </svg>
  </template>
  <script>
    export default {
      name: "Icon${ComponentName}",
      props: {
        size: {
          type: Number,
          default: 64
        },
        color: {
          type: String,
          default: ""
        }
      }
    };
  </script>
`

module.exports = { getAttrs, getElementCode }
