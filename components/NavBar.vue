<template>
  <b-navbar
    fixed-top="true"
    shadow="true"
    spaced="true"
    wrapper-class="container"
    close-on-click="true"
  >
    <template slot="brand">
      <b-navbar-item tag="a" v-scroll-to="'#nav_home'">
        <h1 class="has-text-primary">Philip Klostermann</h1>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item class="has-text-menuItem" tag="a" v-scroll-to="'#nav_profile'">Profile</b-navbar-item>
      <b-navbar-item class="has-text-menuItem" tag="a" v-scroll-to="'#nav_work'">Work</b-navbar-item>
      <b-navbar-item class="has-text-menuItem" tag="a" v-scroll-to="'#nav_education'">Education</b-navbar-item>
      <b-navbar-item class="has-text-menuItem" tag="a" v-scroll-to="'#nav_skills'">Skills</b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped>
h1 {
  font-size: 16pt;
  font-weight: 500;
}
</style>

