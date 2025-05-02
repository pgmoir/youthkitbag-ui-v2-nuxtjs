<template>
  <section id="signup" class="hero bg-primary min-h-180">
    <div class="hero-content">
      <div class="card bg-base-100 shrink-0 shadow-2xl min-w-lg">
        <div class="card-body">
          <h2 class="text-3xl font-semibold text-center">
            Let&apos;s get started!
          </h2>
          <fieldset class="fieldset">
            <label class="label">First Name</label>
            <input
              type="firstName"
              class="input w-full"
              placeholder="Enter you first name"
            >
            <label class="label">Last Name</label>
            <input
              type="lastName"
              class="input w-full"
              placeholder="Enter you last name"
            >
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
            <label class="label">Confirm Password</label>
            <input
              type="password"
              class="input w-full"
              placeholder="Confirm your password"
            >
            <button class="btn btn-xl btn-primary mt-4 text-base-300 mb-3">
              Sign Up
            </button>
            <div class="text-center">
              <span>If you already have a kitbag, </span>
              <a href="/login" class="link">
                then log in for access
              </a>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </section>
</template>
