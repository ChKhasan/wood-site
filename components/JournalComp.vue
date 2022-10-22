<template lang="html">
    <div>
      <div class="container_block container-xxl">
        <div class="row">
          <div class="col-12 j-card-controller">
            <JournalCard img="../images/blog_01.jpg" />
            <JournalCard img="../images/blog_02.jpg" />
            <JournalCard img="../images/blog_03.jpg" />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import JournalCard from "../smallComponents/JournalCard.vue";
  export default {
    components: {
      JournalCard,
    },
  };
  </script>
  <style lang="css">
  .j-card-controller {
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 30px;
    padding-bottom: 120px;
  }
  @media (min-width: 576px) {
    .j-card-controller {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 30px;
    padding-bottom: 120px;
  }
  }
  @media (min-width: 768px) {
    .j-card-controller {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 30px;
    padding-bottom: 120px;
  }
  }
  @media (min-width: 992px) {
    .container-shop {
      max-width: 960px !important;
      margin: 0 auto !important;
    }
  }
  @media (min-width: 1200px) {
    .container-shop {
      max-width: 1200px !important;
      margin: 0 auto !important;
    }
  }
  </style>
  