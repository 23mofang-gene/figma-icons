
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M48.552 11.034H15.448v41.931h25.38a7.724 7.724 0 007.724-7.724V11.035zm-36.414-3.31v48.552h28.69c6.094 0 11.034-4.94 11.034-11.035V7.724H12.138z" fill="#28282A"></path><path d="M20.965 17.655h22.07v3.31h-22.07v-3.31z" fill="#28282A"></path><path d="M20.965 24.276h13.242v3.31H20.965v-3.31z" fill="#28282A"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29Document",
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
