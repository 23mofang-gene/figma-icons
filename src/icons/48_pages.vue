
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M47.333 11.333H16.667v41.334h22A8.667 8.667 0 0047.333 44V11.333zm-32.666-2v45.334h24c5.89 0 10.666-4.776 10.666-10.667V9.333H14.667z"></path><path d="M21.333 18h21.334v2H21.333v-2z"></path><path d="M21.333 24h13.334v2H21.333v-2z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon48Pages",
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
