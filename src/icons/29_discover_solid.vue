
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 12.138c-10.97 0-19.862 8.893-19.862 19.862H6.62C6.62 17.983 17.983 6.62 32 6.62a25.312 25.312 0 0118.182 7.673l-3.952 3.85A19.795 19.795 0 0032 12.138zm0 39.724c10.97 0 19.862-8.893 19.862-19.862h5.517c0 14.017-11.362 25.38-25.379 25.38a25.306 25.306 0 01-17.707-7.198l3.85-3.952A19.788 19.788 0 0032 51.862z" fill="#28282A"></path><path d="M28.69 28.69l14.345-7.725L35.31 35.31l-14.345 7.724L28.69 28.69z" fill="#28282A"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29DiscoverSolid",
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
