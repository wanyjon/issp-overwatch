import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signIn from '@/module/sign/signIn'
import loanAndreim from '@/module/loanAndReim/loanAndreim'
import home from '@/module/loanAndReim/loanAndreim-home'
import data from '@/module/loanAndReim/loanAndreim-data'
import test from '@/components/test'
import signUp from '@/module/sign/signUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: home
    },
    {
    	path: '/loan',
    	name: 'loanAndreim',
    	component: loanAndreim
    },
    {
    	path: '/test',
    	name: 'test',
    	component: test
    },
    {
    	path: '/signIn',
    	name: 'signIn',
    	component: signIn,
    },
    {
    	path: '/signUp',
    	name: 'signUp',
    	component: signUp,
    },
    {
    	path: '/data',
    	component: data
    }
  ]
})
