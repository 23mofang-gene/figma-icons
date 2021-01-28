
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <g filter="url(#filter0_i)"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32z" fill="#FFB700"></path></g><path d="M16 22a2 2 0 012-2h28a2 2 0 012 2v25a2 2 0 01-2 2H18a2 2 0 01-2-2V22z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 22c0-5.523 4.477-10 10-10s10 4.477 10 10v3c0 5.523-4.477 10-10 10s-10-4.477-10-10v-3zm10-7a7 7 0 00-7 7v3a7 7 0 1014 0v-3a7 7 0 00-7-7z" fill="#fff"></path><defs><filter id="filter0_i" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feMorphology radius="1" in="SourceAlpha" result="effect1_innerShadow"></feMorphology><feOffset></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow"></feBlend></filter></defs>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon32BuyColor",
      props: {
        size: {
          type: Number,
          default: 64
        },
        color: {
          type: String,
          default: "currentColor"
        }
      }
    };
  </script>
