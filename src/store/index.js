import { createStore } from 'vuex';

const store = createStore({
  state(){
    return {
      clients: [],
      totalClientsCreated: 0,
      barber: null,
      waitQueue: [null, null, null]
    }
  },
  getters: {
    freeClients(state){
      return state.clients.filter(item => item.state === 0)
    }
  },
  mutations: {
    createClient(state){
      const client = {
        id: state.totalClientsCreated + 1,
        state: 0,
      }
      state.clients.push(client)
      state.totalClientsCreated++
    },
    deleteClient(state, id){
      const index = state.clients.findIndex(item => item.id === id)
      state.clients.splice(index, 1)
    },
    useBarber(state, id){
      let client = state.clients.find(item => item.id === id)
      if(!state.barber) {
        state.barber = id
        client.state = 1
      }else if (state.waitQueue.length < 3){
        const index = state.waitQueue.indexOf(null)
        state.waitQueue[index] = id
        client.state = 2
      }
      client.state = 0
    },
    freeBarber(state){
      if(!state.barber){
        const client = state.clients.find(item => item.id === state.barber)
        state.barber = null
        client.state = 0
        if(state.waitQueue.length){
          const id = state.waitQueue.shift()
          const waiting = state.clients.find(item => item.id === id)
          state.barber = id
          waiting.state = 1
        }
      }
    },
    freeChair(state, chair){
      const client = state.clients.find(item => item.id === state.waitQueue[chair])
      state.waitQueue[chair] = null
      client.state = 0
    }
  }
})

export default store
