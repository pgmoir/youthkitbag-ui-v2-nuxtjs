import type { Plugin } from 'vue';
import type { ToastFunc, ToastifyContainer } from 'vue3-toastify';

declare const Vue3Toastify: Plugin;
export default Vue3Toastify;

declare global {
  interface Window {
    // toast for CDN compatibility
    Vue3Toastify?: typeof Vue3Toastify;
  }
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $toast: ToastFunc;
  }

  export interface GlobalComponents {
    ToastifyContainer: typeof ToastifyContainer;
  }
}
