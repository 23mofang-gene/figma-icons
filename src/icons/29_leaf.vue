
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M47.34 39.295c-7.096 11.988-18.046 13.94-29.864 14.188a133.15 133.15 0 014.687-6.713c4.94-6.643 10.98-11.85 11.04-11.904l-2.155-2.514c-.258.221-6.376 5.493-11.542 12.443a138.515 138.515 0 00-4.773 6.828c-1.417-5.544-3.45-17.68 2.873-26.372C22.878 18 29.81 15.869 37.15 13.609c4.45-1.368 9.03-2.776 13.332-5.385 1.143 5.79 3.143 20.454-3.142 31.071zM53.18 5.113l-.596-2.364-1.975 1.426c-4.438 3.198-9.293 4.692-14.433 6.272-7.537 2.32-15.327 4.714-21.248 12.855-8.819 12.127-3.513 29.259-2.553 32.066-2.04 3.381-3.022 5.431-3.092 5.584l2.99 1.416c.018-.035 1.013-2.107 3.099-5.55 13.115-.088 26.438-1.686 34.816-15.837 8.214-13.874 3.553-33.66 2.992-35.868z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29Leaf",
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
