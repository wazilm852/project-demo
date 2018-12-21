import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      bankInf: {"name":"我是vuex的第一个数据","id":100,"bankName":"中国银行"},
      count:0,
    },
    mutations: {
        newBankName(state,msg) {
          state.bankInf.bankName = msg;
        }
      },
  })
  export default store