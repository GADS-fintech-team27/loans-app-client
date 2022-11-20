<template>
  <div data-qa="nav-bar">
    <div class="wrapper pt-12 px-6">
      <v-row justify-space-between>
        <v-col cols="12" md="6" class="d-flex justify-center justify-md-start">
          <div class="logo-contianer">
            <h2 class="text-center text-sm-left">CHECKER</h2>
            <P class="font-italic"
              >the solution you need for financial liberation</P
            >
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center justify-md-end">
          <div class="search-bar d-flex align-center">
            <div class="search-icon px-3">
              <v-icon>mdi-magnify</v-icon>
            </div>
            <input type="text" placeholder="search" class="search-input" />
          </div>
        </v-col>
      </v-row>

      <div
        class="d-flex justify-center justify-md-space-between align-center py-4"
      >
        <div>
          <div class="account-button">
            <v-btn outlined rounded class="text-lowercase">
              <v-icon>mdi-account</v-icon>
              signUp</v-btn
            >
          </div>

          <div class="toggle-menu-buttons d-flex justify-center">
            <v-btn
              icon
              data-qa="open-nav-bar-btn"
              class="header-toggle"
              @click="toggleMenu"
            >
              <v-icon color="black">mdi-menu</v-icon>
            </v-btn>
            <!-- <v-btn
              icon
              data-qa="close-nav-bar-btn"
              class="header-close"
              @click="toggleMenu"
            >
              <v-icon color="black">mdi-close</v-icon>
            </v-btn> -->
          </div>
        </div>
        <div class="d-flex justify-center justify-md-end align-center pt-4">
          <nav class="nav" :class="{ show: isMenuOpen }">
            <ul class="nav-list">
              <li
                v-for="(item, index) in navItems"
                :key="index"
                :data-qa="`nav-item-${index}`"
                class="nav-item"
              >
                <a :to="item.path" class="nav-link">{{ item.name }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'NavBar',
})
export default class NavBar extends Vue {
  isMenuOpen: boolean = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  navItems: Array<{ name: string; path: string }> = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Us',
      path: '/',
    },
    {
      name: 'Contact',
      path: '/',
    },
    {
      name: 'FAQs',
      path: '/',
    },
    {
      name: 'Investor Corner',
      path: '/',
    },
    {
      name: 'Business Conrner',
      path: '/',
    },
  ]
}
</script>

<style lang="css" scoped>
.wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.btn-color {
  background-color: #06283d;
}

.nav-list {
  display: flex;
  align-items: center;
}

.nav-item {
  margin: 0 8px;
}

.nav-link {
  padding: 10px;
  color: rgba(10, 10, 10, 0.933);
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #1363df;
}

.header-toggle,
.header-close {
  display: none;
}

.search-bar {
  border: 1px solid black;
  width: 70%;
  min-width: 300px;
  height: 50px;
}

.search-input {
  width: 90%;
  border: none;
  outline: none;
}

@media screen and (max-width: 768px) {
  header {
    height: 48px;
    justify-content: space-between;
    padding: 0 28px;
  }
  .header-toggle {
    display: inline;
    color: #eeee;
    font-size: 24px;
    cursor: pointer;
  }
  .header-close {
    position: absolute;
    right: 24px;
    display: block;
    font-size: 24px;
    border-radius: 50px;
    cursor: pointer;
  }
  .header-close:hover {
    background-color: #372948;
  }
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    background: #47b5ff;

    color: #eeee;
    width: 60%;
    height: 100vh;
    padding: 24px 0;
    z-index: 100;
    transition: 0.5s;
    border-radius: 0 0 0 50%;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    font-weight: 600;
  }
  .nav-item {
    margin: 2rem 0;
  }
  .show {
    right: 0;
  }
}
</style>
