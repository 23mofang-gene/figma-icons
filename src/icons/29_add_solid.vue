
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 10.181c-.49.963-.49 2.223-.49 4.743v34.152c0 2.52 0 3.78.49 4.743a4.5 4.5 0 001.967 1.966c.963.49 2.223.49 4.743.49h42.98c2.52 0 3.78 0 4.743-.49a4.5 4.5 0 001.966-1.966c.49-.963.49-2.223.49-4.743V14.924c0-2.52 0-3.78-.49-4.743a4.5 4.5 0 00-1.966-1.966c-.963-.49-2.223-.49-4.743-.49H10.51c-2.52 0-3.78 0-4.743.49a4.5 4.5 0 00-1.966 1.966zm30.407 8.578h-3.31v11.034H19.862v3.31h11.035v11.035h3.31V33.103H45.24v-3.31H34.207V18.76z" fill="#28282A"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29AddSolid",
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
