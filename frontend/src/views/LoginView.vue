<script setup lang="ts">
  import { ref } from "vue";

  const form = ref({
     email: "",
     password: "",
  });

  function submit()
  {
     alert( JSON.stringify(form.value));
  };
</script>
  <template>
    <v-container>
      <v-card class="pa-4 mx-auto" max-width="300">
         <v-card-title>Login</v-card-title>
         <v-card-item>

              <v-form validate-on="submit lazy" @submit.prevent="submit">
                <v-text-field
                  prepend-inner-icon="mdi-email"
                  v-model="form.email"
                  label="Email"
                ></v-text-field>

                <v-text-field
                  prepend-inner-icon="mdi-key"
                  v-model="form.password"
                  label="Password"
                ></v-text-field>

                <v-btn
                  color="red-darken-2"
                  type="submit"
                  block
                  class="mt-2"
                  text="Submit"
                  size="large"
                ></v-btn>
              </v-form>

          </v-card-item>

        </v-card>
    </v-container>
</template>