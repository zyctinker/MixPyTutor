/**
 * Created by Administrator on 2018/11/10 0010.
 * vuex store.js
 */
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import edit_store from './edit_store.js';

export default new vuex.Store({
  module:{
    edit: edit_store,
  }
})
