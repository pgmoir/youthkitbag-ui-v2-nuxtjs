<template>
  <section id="login" class="hero min-h-180">
    <div class="hero-content">
      <div class="card bg-base-300 shrink-0 shadow-2xl min-w-lg">
        <div class="card-body">
          <h2 class="text-3xl font-semibold text-center">
            Access your kitbags!
          </h2>
          <form @submit.prevent="handleSubmit">
            <fieldset class="fieldset">
              <div class="mb-2">
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
                class="btn btn-xl btn-primary mt-4 text-base-300 mb-3"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Logging in...</span>
                <span v-else>Log In</span>
              </button>
              <p v-if="serverError" class="text-red-600 mt-4 text-sm">
                {{ serverError }}
              </p>
            </fieldset>
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
import { z } from 'zod';

const { $toast } = useNuxtApp();

const isSubmitting = ref(false);

const form = ref({
  email: '',
  password: '',
});

const errors = ref<Record<string, string>>({});
const serverError = ref('');

// Zod schema for validation
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

async function handleSubmit() {
  if (isSubmitting.value) return;

  try {
    isSubmitting.value = true;

    errors.value = {};
    serverError.value = '';

    const result = loginSchema.safeParse(form.value);
    if (!result.success) {
      for (const issue of result.error.issues) {
        errors.value[issue.path[0]] = issue.message;
      }
      return;
    }

    // use old API instead of /api/login
    const res = await $fetch('https://youthkitbag-core-api.onrender.com/auth/login', {
      method: 'POST',
      body: form.value,
    });

    await navigateTo('/');
    $toast.success(`Login successful: ${JSON.stringify(res)}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const errMessage = err?.data?.message || 'Login failed. Please try again.'
    serverError.value = errMessage;
    $toast.error(errMessage);
  } finally {
    isSubmitting.value = false;
  }
}
</script>
