
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M34.207 51.854A2.21 2.21 0 0132 54.061a2.21 2.21 0 01-2.207-2.207c0-.428.155-.805.366-1.145.614.018 1.225.042 1.841.042.616 0 1.227-.024 1.84-.042.212.34.367.717.367 1.145zM18.759 34.53V23.165c0-7.05 6.188-13.235 13.241-13.235s13.241 6.186 13.241 13.235V34.53c0 3.818 1.106 7.521 3.128 10.677A60.674 60.674 0 0132 47.44c-5.577 0-11.063-.75-16.369-2.233A19.804 19.804 0 0018.76 34.53zm35.31 12.313a16.5 16.5 0 01-5.517-12.313V23.165C48.552 14.337 40.828 6.62 32 6.62s-16.552 7.717-16.552 16.545V34.53a16.5 16.5 0 01-5.517 12.313 63.672 63.672 0 0016.737 3.68 5.41 5.41 0 00-.185 1.331A5.516 5.516 0 0032 57.372a5.516 5.516 0 005.517-5.518 5.41 5.41 0 00-.185-1.33 63.672 63.672 0 0016.737-3.681z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29Notifications",
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
