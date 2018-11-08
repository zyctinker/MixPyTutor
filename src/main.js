// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
//根节点Vue组件
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//通信总线：this.$bus
let bus = new Vue({
  data:()=>{
    return{
      projectName: '',
      projectDescription: '',
      inputSet: '',
      outputSet: '',
      feedback: '',
      checkedBlocks:[],
    }
  },
  methods:{
    renew: (data)=>{
      bus.$on('renew',(data)=>{
        for (var each in data){
          this[each] = data[each];
        }
        console.log(this._data);
      })
    },
  }
});
Vue.prototype.$bus = bus;
