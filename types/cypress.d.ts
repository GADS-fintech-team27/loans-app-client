/* eslint-disable no-unused-vars, no-undef, @typescript-eslint/no-unused-vars */
import { accessorType } from '~/store'
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      getStore(): Chainable<typeof accessorType>
    }
  }
}
