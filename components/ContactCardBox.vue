<template lang="html">
    <div>
      <div class="container_block container-xxl">
        <div class="row">
          <div class="col-xl-6 my-4">
            <ContactCard name="Подробнее" img="./images/banner-02.jpg"/>
          </div>
          <div class="col-xl-6 my-4">
            <ContactCard name="Подробнее" img="./images/banner-01.jpg"/>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-xl-6 my-4">
            <ContactCard name="Подробнее" img="./images/banner-02.jpg"/>
          </div>
          <div class="col-xl-6 my-4">
            <ContactCard name="Подробнее" img="./images/banner-01.jpg"/>
          </div>
        </div> -->
      </div>
    </div>
  </template>
  <script>
  import ContactCard from "../smallComponents/ContactCard.vue";
  export default {
    components: {
      ContactCard,
    },
  };
  </script>
  <style lang="css">
  .contact-card-controller {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;
  }
  </style>
  