<template lang="">
    <div
      class="shopping_card gr-start-lg-2 grid-item px-sm-5 px-2 py-sm-4 py-2"
      style="background-image: url(images/c_18.jpg)" 
    >
      <div class="sh_control_box d-flex flex-column justify-content-between">
        <div class="sh_title">
          <h1>Dining <br />Table</h1>
        </div>
        <div>
          <router-link to="/shop-page" class="btn btn-outline-primary text-uppercase shop_now_btn"
            >Shop Now</router-link
          >
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {};
  </script>
  <style lang="css">
  .shopping_card {
    background-position: center;
    background-size: cover;
    display: grid;
    height: 100%;
    cursor: pointer;
  }
  .sh_title {
    max-width: 300px;
  }
  @media (min-width: 992px) {
    .sh_title h1 {
      font-size: 40px !important;
    }
  }
  @media (min-width: 576px) {
    .shopping_card {
      grid-column: span 2 !important;
    }
  }
  
  .sh_title h1 {
    font-size: 48px !important;
    font-weight: 700;
    line-height: 1.25;
  }
  
  
  .grid-item {
    display: grid;
    width: 100%;
  }
  </style>
  