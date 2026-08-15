//router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Statistics from '@/components/Statistics';
import QA from '@/components/QA';
import Appointment from '@/components/Appointment';

Vue.use(Router) //啟用Router

export default new Router({
 mode: 'hash',
 routes: [
  {
   path: '/', //自訂路徑
   name: 'Index', //設定名稱
   component: Index //選擇要對應的元件
  },
  {
   path: '/QA',
   name: 'QA',
   component: QA
  },
  {
   path: '/Statistics',
   name: 'Statistics',
   component: Statistics
  },
  {
   path: '/Appointment',
   name: 'Appointment',
   component: Appointment
  }
 ]
})
