
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32z" fill="#FFB700"></path><path d="M16 22a2 2 0 012-2h28a2 2 0 012 2v25a2 2 0 01-2 2H18a2 2 0 01-2-2V22z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 22c0-5.523 4.477-10 10-10s10 4.477 10 10v3c0 5.523-4.477 10-10 10s-10-4.477-10-10v-3zm10-7a7 7 0 00-7 7v3a7 7 0 1014 0v-3a7 7 0 00-7-7z" fill="#fff"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "IconColor32BuyColor",
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
