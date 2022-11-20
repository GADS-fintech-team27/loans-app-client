<template>
  <div data-qa="footer" class="footer">
    <v-row justify="center">
      <v-col
        cols="12"
        md="3"
        data-qa="nav-links"
        class="d-flex justify-center align-center pt-10"
      >
        <div class="d-flex flex-column">
          <div
            v-for="(link, index) in navItems"
            :key="index"
            class="text-capitalize"
            :data-qa="`nav-item-${index}`"
          >
            {{ link.name }}
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="3"
        data-qa="our-services"
        class="d-flex justify-center align-center py-10"
      >
        <div class="d-flex flex-column">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="text-capitalize"
            :data-qa="`service-item-${index}`"
          >
            {{ service }}
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="3"
        data-qa="contact-links"
        class="d-flex justify-center align-center py-10"
      >
        <div class="d-flex flex-column">
          <div
            v-for="(contact, index) in contacts"
            :key="index"
            class="text-capitalize"
            :data-qa="`contact-item-${index}`"
          >
            {{ contact }}
          </div>
        </div></v-col
      >
    </v-row>
    <div class="d-flex justify-center" data-qa="copy-right-section">
      <span>BugiCodes &copy; {{ new Date().getFullYear() }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'footer',
})
export default class Footer extends Vue {
  navItems: Array<{ name: string; path: string }> = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'about',
      path: '/',
    },
    {
      name: 'services',
      path: '/',
    },
    {
      name: 'FAQs',
      path: '/',
    },
    {
      name: 'contact us',
      path: '/',
    },
  ]

  services: Array<string> = [
    'software development',
    'Graphic desing',
    'Research',
    'networking',
    'infrastructure management',
  ]

  contacts: Array<string> = ['facebook', 'twitter', 'linkedin']
}
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid red;
}
.footer {
  background-color: rgb(185, 181, 181);
}
</style>
