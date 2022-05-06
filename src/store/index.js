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
      const indexOfFreeChair = state.waitQueue.indexOf(null)
      if(!state.barber) {
        state.barber = id
        client.state = 1
      }else if (indexOfFreeChair >= 0){
        state.waitQueue[indexOfFreeChair] = id
        client.state = 2
      }
    },
    freeBarber(state){
      if(state.barber != null){
        const client = state.clients.find(item => item.id === state.barber)
        const indexOfOccupiedChair = state.waitQueue.findIndex(item => item != null)
        console.log(indexOfOccupiedChair)
        state.barber = null
        client.state = 0
        if(indexOfOccupiedChair >= 0){
          const id = state.waitQueue[indexOfOccupiedChair]
          const waiting = state.clients.find(item => item.id === id)
          state.barber = id
          waiting.state = 1
          for(let i = indexOfOccupiedChair + 1; i < state.waitQueue.length; i++){
            state.waitQueue[i-1] = state.waitQueue[i]
          }
          state.waitQueue[state.waitQueue.length-1] = null
        }
      }
    },
    freeChair(state, chair){
      if(state.waitQueue[chair] != null) {
        const client = state.clients.find(item => item.id === state.waitQueue[chair])
        client.state = 0
        for(let i = chair + 1; i < state.waitQueue.length; i++){
          state.waitQueue[i-1] = state.waitQueue[i]
        }
        state.waitQueue[state.waitQueue.length-1] = null
      }
    }
  }
})

export default store
