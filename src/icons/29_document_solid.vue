
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.138 7.724h39.724v43.552a5 5 0 01-5 5H12.138V7.724zm8.827 9.931h22.07v3.31h-22.07v-3.31zm13.242 6.62H20.965v3.311h13.242v-3.31z" fill="#28282A"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29DocumentSolid",
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
