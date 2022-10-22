<template lang="html">
    <div>
      <NavbarComp />
      <slot></slot>
      <FooterComp />
    </div>
  </template>
  <script>
  import NavbarComp from "../components/NavbarComp.vue";
  import FooterComp from "../components/FooterComp.vue";
  export default {
    components: {
      NavbarComp,
      FooterComp,
    },
  };
  </script>
  