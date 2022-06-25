<template>
  <article class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <template v-if="action === 'login'">
            <h1 class="title has-text-centered">Login</h1>
            <!-- Login Form -->
            <form @submit.prevent="doLogin">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    v-model="userData.email"
                    class="input"
                    type="email"
                    placeholder="e.g. alexsmith@gmail.com"
                    required
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    v-model="userData.password"
                    class="input"
                    type="password"
                    required
                  >
                </div>
              </div>

              <div class="field has-text-right">
                <div class="control">
                  <button
                    type="submit"
                    class="button is-primary"
                    :class="{ 'is-loading': isLoading }"
                  >
                    Login
                  </button>
                </div>
              </div>
              <a class="is-block" @click="action = 'register'">Don't have an account? Register</a>
              <a class="is-block" @click="action = 'reset'">Forgot your password?</a>
            </form>
          </template>
          <!-- End Login Form -->

          <!-- Register Form -->
          <template v-if="action === 'register'">
            <h1 class="title has-text-centered">Register</h1>
            <form @submit.prevent="doRegister">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    v-model="userData.name"
                    class="input"
                    type="text"
                    placeholder="e.g. Alex"
                    required
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    v-model="userData.email"
                    class="input"
                    type="email"
                    placeholder="e.g. alexsmith@gmail.com"
                    required
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    v-model="userData.password"
                    class="input"
                    type="password"
                    required
                  >
                </div>
              </div>

              <div class="field has-text-right">
                <div class="control">
                  <button
                    type="submit"
                    class="button is-primary"
                    :class="{ 'is-loading': isLoading }"
                  >
                    Register
                  </button>
                </div>
              </div>
              <a @click="action = 'login'">Already have an account? Login</a>
            </form>
          </template>
          <!-- End Register Form -->

          <!-- Password reset email -->
          <template v-if="action === 'reset'">
            <h1 class="title has-text-centered">Change Password</h1>
            <form @submit.prevent="doReset">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    v-model="userData.email"
                    class="input"
                    type="email"
                    placeholder="e.g. alexsmith@gmail.com"
                    required
                  >
                </div>
              </div>

              <div class="field has-text-right">
                <div class="control">
                  <button
                    type="submit"
                    class="button is-primary"
                    :class="{ 'is-loading': isLoading }"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <a @click="action = 'login'">Already have an account? Login</a>
            </form>
          </template>
          <!-- End of password reset email -->
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      action: 'login',
      isLoading: false,
      userData: {
        name: "",
        email: "",
        password: "",
      }
    }
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    resetData() {
      this.userData.name = this.userData.email = this.userData.password = "";
    },
    async doRegister() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("user/doRegister", {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
        });
        this.$toast.success("Account created");
        this.resetData();
        this.redirect();
      } catch (error) {
        this.$toast.error(error.message);
        console.error(error.message)
      } finally {
        this.isLoading = false;
      }
    },
    async doLogin() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("user/doLogin", {
          email: this.userData.email,
          password: this.userData.password,
        });
        this.$toast.success("Logged in");
        this.resetData();
        this.redirect();
      } catch (error) {
        this.$toast.error(error.message);
        console.error(error.message)
      } finally {
        this.isLoading = false;
      }
    },
    async doReset() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("user/doReset", this.userData.email);
        this.$toast.success(`Please check ${this.userData.email} for further instructions.`);
        this.resetData();
      } catch (error) {
        this.$toast.error(error.message);
        console.error(error.message)
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>