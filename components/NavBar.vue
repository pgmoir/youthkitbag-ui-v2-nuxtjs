<template>
  <nav class="navbar bg-neutral text-neutral-content">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost text-xl">YouthKitbag</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-base">
        <li>
          <a href="/#kitbags">Kitbags</a>
        </li>
        <li>
          <a href="/#groups">Groups</a>
        </li>
        <li>
          <a href="/#trust">Trust</a>
        </li>
        <li>
          <a href="/#market">Market</a>
        </li>
        <li>
          <a href="/#signup">Sign Up</a>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <a href="/signin" class="btn text-base">Log In</a>
      <div class="dropdown dropdown-end">
        <div tabIndex="{0}" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {' '}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
            {' '}
          </svg>
        </div>
        <ul
          tabIndex="{0}"
          class="menu dropdown-content bg-neutral text-neutral-content rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a href="/#kitbags">Kitbags</a>
          </li>
          <li>
            <a href="/#groups">Groups</a>
          </li>
          <li>
            <a href="/#trust">Trust</a>
          </li>
          <li>
            <a href="/#market">Market</a>
          </li>
          <li>
            <a href="/#signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
