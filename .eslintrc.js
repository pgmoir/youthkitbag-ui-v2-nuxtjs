// .eslintrc.js
export default {
  extends: ['plugin:vue/vue3-recommended'],
  plugins: ['vue'],
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any', // <- allow both <br> and <br />
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
