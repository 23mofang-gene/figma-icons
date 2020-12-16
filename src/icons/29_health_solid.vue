
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path d="M20.62 7.723c3.085 0 6.093 1.238 8.986 3.63-7.786 8.574-13.164 24.274-15.318 31.398-4.87-5.928-8.772-13.091-8.772-20.006 0-8.14 6.916-15.022 15.104-15.022z" fill="#28282A"></path><path d="M16.878 45.702C18.4 40.39 23.95 22.541 32.014 13.627c3.275-3.53 7.066-5.903 11.363-5.903 8.188 0 15.104 6.879 15.104 15.022 0 16.069-21.04 33.53-26.483 33.53-2.699 0-9.223-4.295-15.121-10.574z" fill="#28282A"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29HealthSolid",
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
