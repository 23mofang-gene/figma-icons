
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.393 13.147C3.31 15.27 3.31 18.052 3.31 23.614v16.772c0 5.562 0 8.343 1.083 10.467a9.93 9.93 0 004.34 4.34c2.124 1.083 4.905 1.083 10.467 1.083h25.6c5.562 0 8.343 0 10.467-1.083a9.93 9.93 0 004.34-4.34c1.083-2.124 1.083-4.905 1.083-10.467V23.614c0-5.562 0-8.343-1.083-10.467a9.93 9.93 0 00-4.34-4.34C53.143 7.724 50.362 7.724 44.8 7.724H19.2c-5.562 0-8.343 0-10.467 1.083a9.93 9.93 0 00-4.34 4.34zm29.814 5.612h-3.31v11.034H19.862v3.31h11.035v11.035h3.31V33.103H45.24v-3.31H34.207V18.76z"></path>
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
          default: ""
        }
      }
    };
  </script>
