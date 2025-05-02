<template>
    <section id="login" class="hero min-h-180">
      <div class="hero-content">
        <div class="card bg-base-300 shrink-0 shadow-2xl min-w-lg">
          <div class="card-body">
            <h2 class="text-3xl font-semibold text-center">
              Access your kitbags!
            </h2>
            <fieldset class="fieldset">
              <label class="label">Email</label>
              <input
                type="email"
                class="input w-full"
                placeholder="Enter your email"
              >
              <label class="label">Password</label>
              <input
                type="password"
                class="input w-full"
                placeholder="Create your password"
              >
              <button class="btn btn-xl btn-primary mt-4 text-base-300 mb-3">
                Log In
              </button>
            </fieldset>
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
