describe('nav-bar', () => {
  before(() => {
    cy.visit('/')
  })

  const NavBar: string = '[data-qa="nav-bar"]'
  const Logo: string = '[data-qa="nav-logo"]'
  const OpenNavBarBtn = '[data-qa="open-nav-bar-btn"]'
  const CloseNavBarBtn = '[data-qa="close-nav-bar-btn"]'
  const NavItem: string = '[data-qa="nav-item-1"]'
  const NavItems: Array<{ name: string; path: string }> = [
    {
      name: 'HOME',
      path: '/',
    },
    {
      name: 'ABOUT',
      path: '/',
    },
    {
      name: 'SERVICES',
      path: '/',
    },
    {
      name: 'FAQs',
      path: '/',
    },
    {
      name: 'CONTACT US',
      path: '/',
    },
  ]

  describe(
    'Desktop navigation bar',
    {
      viewportWidth: 1500,
    },
    () => {
      it('should display navigation bar', () => {
        cy.get(NavBar).should('exist')
      })

      it('should display logo', () => {
        cy.get(Logo).should('exist').and('be.visible')
      })

      it('should display navigation links', () => {
        NavItems.forEach((link, index) => {
          cy.get(`[data-qa="nav-item-${index}"]`)
            .should('exist')
            .and('have.text', link.name)
        })
        cy.get(NavItem).should('exist')
      })
    }
  )

  describe('Mobile-navigation-bar', { viewportWidth: 500 }, () => {
    it('should display menu navigation button on mobile devices', () => {
      cy.get(OpenNavBarBtn).should('exist').and('be.visible').click()
    })

    it('should close the navigation menu on mobile devices', () => {
      cy.get(CloseNavBarBtn).should('exist').and('be.visible').click()
    })
  })
})
