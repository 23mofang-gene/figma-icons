
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M48.552 34.532c0 4.701 2.008 9.181 5.517 12.31A63.874 63.874 0 0132 50.752a63.874 63.874 0 01-22.069-3.908 16.498 16.498 0 005.517-12.31V23.164C15.448 14.337 23.172 6.62 32 6.62s16.552 7.717 16.552 16.545v11.367zm-16.553 22.84c-2.75 0-5.012-2.02-5.429-4.654 1.792.145 3.6.24 5.43.24 1.83 0 3.638-.095 5.43-.24-.417 2.634-2.679 4.654-5.43 4.654z" fill="#28282A"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29NotificationsSolid",
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
