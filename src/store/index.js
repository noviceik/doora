import { createStore } from 'vuex'

import global from './modules/global.js'
import user from './modules/user.js'

export default createStore({
  ...global,
  modules: {
    user
  }
})
