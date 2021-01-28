
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 9.931C19.812 9.931 9.931 19.811 9.931 32h-3.31C6.62 17.983 17.983 6.62 32 6.62a25.308 25.308 0 0118.182 7.673l-2.371 2.31A21.998 21.998 0 0032 9.931zm0 44.138c12.188 0 22.069-9.88 22.069-22.069h3.31c0 14.017-11.362 25.38-25.379 25.38a25.301 25.301 0 01-17.707-7.198l2.31-2.371A21.991 21.991 0 0032 54.069z" fill="#28282A"></path><path d="M29.241 29.241l12.69-7.172-7.172 12.69-12.69 7.172 7.172-12.69z" fill="#28282A"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29Discover",
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
