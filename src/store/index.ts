import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import sampleData from "../assets/resume-template.json";
export interface State {
  resumeContent: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    resumeContent: JSON.stringify(sampleData, null, "\t")
  }
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}