
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.448 7.724h-1.103a2.206 2.206 0 00-2.207 2.207v44.138c0 1.22.989 2.207 2.207 2.207h1.103V7.724zm30.897 0h-28.69v48.552h28.69a5.517 5.517 0 005.517-5.517V13.24a5.517 5.517 0 00-5.517-5.517z" fill="#28282A"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29ReportsSolid",
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
