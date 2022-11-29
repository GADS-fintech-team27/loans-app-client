import { accessorType } from '~/store'

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    $store: typeof accessorType
    Cypress: any
  }
}
