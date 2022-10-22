<template lang="html">
    <div class="container-fluid bg-color py-5">
      <div class="container_block container-xxl footer_comp">
        <div class="row">
          <div class="col-lg mb-6 mb-lg-0">
            <div class="footer_logo">
              <a href="" class="navbar-brand">
                <img src="../static/images/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-lg mb-6 mb-lg-0">
            <ul class="list-unstyled mb-0">
              <li class="py-0">
                <a href="#" class="lh-225 font-weight-500">Contact</a>
              </li>
              <li class="py-0">
                <a href="#" class="lh-225 font-weight-500">Returns</a>
              </li>
              <li class="py-0">
                <a href="#" class="lh-225 font-weight-500">Submit a Returns</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-lg mb-6 mb-lg-0">
            <ul class="list-unstyled mb-0">
              <li class="py-0">
                <a href="#" class="lh-225 font-weight-500">Careers</a>
              </li>
              <li class="py-0">
                <a href="#" class="lh-225 font-weight-500">Privacy Policy</a>
              </li>
              <li class="py-0">
                <a href="#" class="lh-225 font-weight-500"
                  >Term &amp; Conditions</a
                >
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-lg mb-6 mb-lg-0">
            <ul class="list-unstyled mb-0">
              <li class="py-0">
                <a href="#" class="lh-225 font-weight-500">Gift Voucher</a>
              </li>
              <li class="py-0">
                <a href="#" class="lh-225 font-weight-500">Discount</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-lg mb-6 mb-lg-0">
            <div class="brands_block d-flex">
              <a href="#">
                <!-- <font-awesome-icon
                  style="font-size: 20px"
                  icon="fa-brands footer_icon fa-facebook-f"
                /> -->
                <font-awesome-icon  style="font-size: 20px" :icon="['fab', 'fa-facebook-f']"  />
              </a>
              <a href="#">
                <font-awesome-icon
                  style="font-size: 20px"
                  icon="fa-brands footer_icon fa-pinterest-p"
                />
              </a>
              <a href="#">
                <font-awesome-icon
                  style="font-size: 20px"
                  icon="fa-brands footer_icon fa-instagram"
                />
              </a>
              <a href="#">
                <font-awesome-icon
                  style="font-size: 20px"
                  icon="fa-brands footer_icon fa-twitter"
                />
              </a>
            </div>
            <p class="mb-0 text-gray text-lg-right font-weight-500">
              © 2020 Furnitor.<br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "footer-comp"
  };
  </script>
  <style lang="css">
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&family=Philosopher:wght@700&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,800;1,100&family=Roboto&display=swap");
  .bg-color {
    background-color: #f6f6f6 !important;
  }
  .brands_block {
    justify-content: start;
  }
  .footer_logo {
    max-width: 164px;
  }
  .mb-6,
  .my-6 {
    margin-bottom: 1.875rem !important;
  }
  .footer_logo img {
    width: 100%;
  }
  .list-unstyled a {
    font-weight: 500 !important;
    font-family: "Poppins", sans-serif;
    line-height: 2.25 !important;
    color: #000 !important;
  }
  .brands_block a {
    margin-right: 1.5rem;
    line-height: 40px !important;
    color: #000 !important;
  }
  .footer_icon {
    font-size: 40px !important;
  }
  .text-gray {
    color: #7c7c7c !important;
  }
  .font-weight-500 {
    font-weight: 500 !important;
  }
  
  @media (min-width: 992px) {
    .brands_block {
      justify-content: end;
    }
    .text-lg-right {
      text-align: right;
    }
  }
  </style>
  