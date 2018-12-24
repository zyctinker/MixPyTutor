/**
 * @Vuex Store for editor and editProject
 * @author:zyc
 * @date:2018-11-10
 */

export default {
  state:{
    projectName: '',
    projectDescription: '',
    inputSet: '',
    outputSet: '',
    feedback: '',
    checkedBlocks:[],
    checkCode: '',
    blocksInEditor:'',
  },
  getters: {
    projectDescription: (state) => { return state.projectDescription},
    checkedBlocks: (state) => { return state.checkedBlocks},
    checkCode: (state) => { return state.checkCode},
    blocksInEditor: (state) => { return state.blocksInEditor},
  },
  mutations:{
    changeEditorState(state,payload){//这里的state对应着上面这个state
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
