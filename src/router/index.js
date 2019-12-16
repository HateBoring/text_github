import Vue from 'vue'
import Router from 'vue-router'
import classList from '@/view/classList'
import detailsA from '@/view/details'
import Settlement from '@/view/settlement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'classList',
      component: classList
    },
		{
		  path: '/details',
		  name: 'details',
		  component: detailsA
		},
		{
			path: '/settlement',
			name: 'settlement',
			component: Settlement
		}
  ]
})
