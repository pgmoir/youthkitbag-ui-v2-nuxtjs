# youthkitbag-ui-v2-nuxtjs

I am running three consecutive projects to rebuild my youthkitbag front end from scratch again latest tech techstacks, React, NextJS and Nuxt (Vue based). I want to compare the patterns recommended for building with these tools, and compare how they perform, and how easy it is to build, test and deploy. I want to deploy to free services, and connect to the existing API. I also want the general look and feel to remain consistent with the original, but I want style to be simplified. I have opted to go with tailwindcss (as this seems to be the recommended approach that they all use), and daisyui (for free tailwindcss based components that can be used by all three projects). I don't want to get bogged down with style, but I want a nice clean fresh feel that doesn't get in the way of the structure. I will be building the three projects in parallel, feature by feature, step by step. I've also chosen npm as a consistent approach.

This is a [Nuxt](https://nuxt.com) project bootstrapped with [`npm create nuxt`](https://nuxt.com/docs/getting-started/installation).

## Recommended Way to Start latest Nuxt

```bash
npm create nuxt my-app
```

This will guide you through prompts such as:

- Package manager - select npm (as tried pnpm several times and in kept crashing)
- Git already initialised so skippd
- Installed all official modules

## Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3001`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt 3 App Structure (Vue-based)

With Nuxt's file-based routing, pages are placed in the /pages directory. You'll use layouts, middleware, and composables to control access.

```bash
/pages/
│
├── index.vue              # Marketing landing page ("/")
├── login.vue              # Log-in page ("/login")
├── signup.vue             # Sign-up page ("/signup")
├── help.vue               # Public help page ("/help")
├── prices.vue             # Public prices page ("/prices")
│
├── dashboard/             # Logged-in user space ("/dashboard")
│   ├── index.vue          # Default logged-in home ("/dashboard")
│   ├── profile.vue        # Example future page ("/dashboard/profile")
│   └── settings.vue       # Example future page
│
/layouts/
├── default.vue            # Used for most public pages
├── auth.vue               # Used for signed-in user pages (e.g., dashboard)
│
/middleware/
├── auth.ts                # Redirect if not authenticated
│
/components/
├── Navbar.vue
├── Footer.vue
├── AuthForm.vue
```

> Use definePageMeta({ layout: 'auth', middleware: 'auth' }) in dashboard/index.vue, etc.

## Set up default port

```ts
export default defineNuxtConfig({
  devServer: {
    port: 3001,
  },
});
```

## Implement DaisyUI (with TailwindCSS)

I wanted to keep the actual html structure very consistent across the projects, so to facilitate component development I chose DaisyUI which seems to be the only free component library based on tailwindcss that can be used across the board.

I had a number of issues plugging it into Nuxt, that had my head scratching, until I realise a simple mistake of copy/paste of structure from React projects where they use `className` instead of `class`. Typo fixed and now visual identity matches exactly.
