# youthkitbag-ui-v2-nuxtjs

Building the youthkitbag front end from scratch again using modern technologies. This phase will use the existing rest api and database, but may interact with some elements direct. This version is going to be built using NuxtJS.

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
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt 3 App Structure (Vue-based)

With Nuxt's file-based routing, pages are placed in the /pages directory. You'll use layouts, middleware, and composables to control access.

```bash
/pages/
│
├── index.vue              # Marketing landing page ("/")
├── signin.vue             # Sign-in page ("/signin")
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
