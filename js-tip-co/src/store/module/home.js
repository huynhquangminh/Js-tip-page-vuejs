const state = {
    list: {},
}

const getters = {
    getList() {
        return state.list
    }
}

const mutations = {
    setList (state, data) {
        state.list = data
    }
}

const actions = {
    changeList ({commit }, data) {
        commit('setList', data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}