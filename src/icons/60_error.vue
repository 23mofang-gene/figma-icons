
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 59.733C16.708 59.733 4.267 47.292 4.267 32S16.708 4.267 32 4.267 59.733 16.708 59.733 32 47.292 59.733 32 59.733zM32 3.2C16.094 3.2 3.2 16.094 3.2 32S16.094 60.8 32 60.8 60.8 47.906 60.8 32 47.906 3.2 32 3.2z" fill="#ADADB6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M40.657 42.543l-19.2-19.2 1.886-1.886 19.2 19.2-1.886 1.886z" fill="#ADADB6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.343 42.543l19.2-19.2-1.886-1.886-19.2 19.2 1.886 1.886z" fill="#ADADB6"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon60Error",
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
