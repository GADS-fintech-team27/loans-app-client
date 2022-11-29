/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import Vuetify from 'vuetify'
import { accessorType } from '~/store'

declare module 'vue/types/vue' {
  export interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  export interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}

declare global {
  namespace NodeJS {
    interface Global {
      vuetify: typeof Vuetify
    }
  }
}
