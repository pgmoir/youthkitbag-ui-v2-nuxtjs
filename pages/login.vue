<template>
  <section id="login" class="hero min-h-180">
    <div class="hero-content">
      <div class="card bg-base-300 shrink-0 shadow-2xl min-w-lg">
        <div class="card-body">
          <h2 class="text-3xl font-semibold text-center">
            Access your kitbags!
          </h2>
          <form class="mb-2" @submit.prevent="login">
            <fieldset class="fieldset">
              <div>
                <legend class="fieldset-legend">Email</legend>
                <input
                  v-model="form.email"
                  type="email"
                  class="input w-full"
                  placeholder="Enter your email"
                >
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                  {{ errors.email }}
                </p>
              </div>
              <div>
                <legend class="fieldset-legend">Password</legend>
                <input
                  v-model="form.password"
                  type="password"
                  class="input w-full"
                  placeholder="Create your password"
                >
                <p v-if="errors.password" class="text-red-500 text-sm mt-1">
                  {{ errors.password }}
                </p>
              </div>
              <button
                type="submit"
                class="btn btn-xl btn-primary mt-4 text-base-300"
                :disabled="pending"
              >
                <span v-if="pending">Logging in...</span>
                <span v-else>Log In</span>
              </button>
            </fieldset>
            <p v-if="serverError" class="text-red-600 mt-1 text-md text-center">
              {{ serverError }}
            </p>
          </form>
          <div class="text-center">
            <span>If you don&apos;t have an account, </span>
            <a href="/#signup" class="link">
              then sign up for a new account.
            </a>
          </div>
          <div class="text-center">
            <span>Or for the forgetful, </span>
            <a href="/forgot-password" class="link">
              then reset your password.
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { $toast } = useNuxtApp();

const pending = ref(false);
const form = ref({
  email: '',
  password: '',
});
const errors = ref<Record<string, string>>({});
const serverError = ref('');

const login = async () => {
  if (pending.value) return;

  pending.value = true;
  errors.value = {};
  serverError.value = '';

  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: form.value,
    });

    pending.value = false;
    await navigateTo('/');
    $toast.success(`Login successful!`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const { data } = error;
    pending.value = false;
    if (data?.data) {
      errors.value = data.data;
    }
    serverError.value = data.message;
    $toast.error(data.message || 'Errors have been identified');
  }
};
</script>
