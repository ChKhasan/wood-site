<template lang="html">
    <div
      class="contact-card"
      :style="{'background-image':`url(${img})`}"
    >
      <div class="c-card-title mb-5">
        <h3>Follow Our Store <br/>On Instagram</h3>
      </div>
      <div class="-card-text"><p>@furnitor.trending</p></div>
      <div class="c-card-btn">
  
          <BorderBlackBtn :name="name"/>
      </div>
    </div>
  </template>
  <script>
  import BorderBlackBtn from "../smallComponents/BorderBlackBtn.vue";
  export default {
      props: ["name","img"],
    components: {
      BorderBlackBtn,
    },
  };
  </script>
  <style lang="css">
  @media (min-width: 576px) {
    .contact-card {
      height: 408px;
      /* width: 200px; */
    }
    .c-card-title h3 {
      font-size: 40px !important;
    }
  }
  
  .contact-card {
    padding: 50px;
    height: 320px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .c-card-title h3 {
    font-size: 30px !important;
    font-weight: 700 !important;
    font-family: "Poppins", sans-serif;
    line-height: 1.25;
    color: #000;
  }
  .c-card-text p {
    color: #777 !important;
    font-weight: 500 !important;
    font-family: "Poppins", sans-serif;
    margin-bottom: 1rem !important  ;
  }
  .c-card-btn {
      margin-top: auto !important;
  }
  </style>
  