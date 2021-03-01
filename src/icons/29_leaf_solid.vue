
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M53.182 5.112l-.598-2.361-1.975 1.423c-4.436 3.198-9.291 4.692-14.431 6.272-7.537 2.32-15.33 4.716-21.248 12.855-6.841 9.406-5.184 21.796-3.648 28.204 1.56-2.26 3.447-4.848 5.597-7.627C23.226 35.68 29.53 30.624 29.53 30.624l1.511 1.734c-.287.245-6.382 5.504-11.537 12.436C12.51 54.2 9.413 60.68 9.282 60.951l2.993 1.417c.018-.033 1.01-2.108 3.098-5.548 13.116-.089 26.44-1.689 34.817-15.84 8.214-13.874 3.55-33.659 2.992-35.868z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Icon29LeafSolid",
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
