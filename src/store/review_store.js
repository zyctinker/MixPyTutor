/**
 * @Vuex Store for review
 * @author:zyc
 * @date:2018-12-23
 */

export default {
  state:{
    selectTags:[]
  },
  getters: {
    selectTags: (state) => { return state.selectTags},
  },
  mutations:{
    changeReviewState(state,payload){//这里的state对应着上面这个state
      console.log(payload);
      for (var each in payload){
        if(Array.isArray(payload[each])){
          state[each] = payload[each].slice(0);
        }
        else if(payload[each] instanceof Object){
          state[each] = Object.assign(payload[each]);
        }
        else{
          state[each] = payload[each];
        }
      }
    },
  }
}
