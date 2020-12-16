
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M48.552 50.759a2.21 2.21 0 01-2.207 2.206H19.862v-41.93h26.483a2.21 2.21 0 012.207 2.206V50.76zm-33.104 2.206h2.207v-41.93h-2.207v41.93zm30.897-45.24h-32a2.21 2.21 0 00-2.207 2.206v44.138a2.21 2.21 0 002.207 2.207h32a5.524 5.524 0 005.517-5.517V13.24a5.524 5.524 0 00-5.517-5.517z" fill="#28282A"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29Reports",
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
