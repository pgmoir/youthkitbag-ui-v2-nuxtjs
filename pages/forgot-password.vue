<template>
    <section id="login" class="hero min-h-180">
      <div class="hero-content">
        <div class="card bg-base-300 shrink-0 shadow-2xl max-w-lg">
          <div class="card-body">
            <h2 class="text-3xl font-semibold text-center">
              Forgotten your password?
            </h2>
            <div class="text-center">
              <span>
                If you have forgotten your password, then enter your email here
                and you will be sent a link to create a new password. Please be
                aware that this link is time limited, and will expire in an hour
                after sending. If actually you know your password, 
              </span>
              <a href="/login" class="link">
                log in direct to your kitbag.
              </a>
            </div>
            <fieldset class="fieldset">
              <label class="label">Email</label>
              <input
                type="email"
                class="input w-full"
                placeholder="Enter your email"
              >
              <button class="btn btn-xl btn-primary mt-4 text-base-300 mb-3">
                Reset Password
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </section>
</template>
