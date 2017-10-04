export default [
  {
    path: '/',
    name: 'main-index',
    component: resolve => require(['./index-page.vue'], resolve),
  },
  {
    path: '/survey/:id',
    name: 'survey-form',
    component: resolve => require(['./survey-form.vue'], resolve),
  },
  {
    path: '/survey-thank',
    name: 'survey-thank',
    component: resolve => require(['./survey-thank.vue'], resolve),
  },
]
