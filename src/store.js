import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  list: [],
  time:[]
};
const mutations={
	add_mutation (state,a){
		state.list.push(a)
	},
	add_mutation_time(state,b){
		state.time.push(b)
	}
}
const actions={
	add_action ({commit},a){
		commit('add_mutation',a)
	},
	add_action_time ({commit},b){
		commit('add_mutation_time',b)
	}
}



export default new Vuex.Store({
  state,
  mutations,
  actions
})
