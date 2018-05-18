import { ChuckService } from '../services/ChuckService'

export const ChuckModule = {
    state: {
        randomJoke: null
    },
    getters: {
        getRandomJoke(state) {
            return state.randomJoke
        }
    },
    mutations: {
        setRandomJoke(state, joke) {
            state.randomJoke = joke
        }
    },
    actions: {
        fetchRandomJoke(store) {
            ChuckService.getRandomJoke().then((joke) => {
                store.commit('setRandomJoke', joke)
            })
        }
    }
}