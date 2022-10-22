<template lang="html">
    <div class="journal-card mt-5">
      <nuxt-link to="/post" class="j-card-img">
        <img :src="img" alt="" />
      </nuxt-link>
      <div class="j-card-body pt-5">
  
          <div class="j-card-date">
            <span> April 24, 2019 </span>
          </div>
          <div class="j-card-title mb-3">
            <h3><a href=""> Under the sun in Cape Town </a></h3>
          </div>
          <div class="j-card-text">
            <p>
              These are beautiful, well made &amp; ortable! I bought them to wear to
              work &amp; casually.
            </p>
          </div>
          <BorderBlackBtn name="Read more"/>
      </div>
    </div>
  </template>
  <script>
  import BorderBlackBtn from "../smallComponents/BorderBlackBtn.vue"
  export default {
    props: ["img"],
    components: {
      BorderBlackBtn
    }
  };
  </script>
  <style lang="css">
  .j-card-img {
      flex-shrink: 0;
      width: 100%;
      position: relative;
      overflow: hidden;
      display: block;
      z-index: 100;
  }
  .j-card-img img::before {
      position: absolute;
      top: 0;
      left: -100%;
      z-index: 2;
      display: block;
      content: '';
      width: 50%;
      height: 100%;
      background: linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 100%);
      -webkit-transform: skewX(-25deg);
      transform: skewX(-25deg);
  }
  .j-card-img img {
      max-width: 100%;
  }
  .j-card-date {
      font-weight: 500!important;
      letter-spacing: .5px!important;
      line-height: 1.2!important; 
      color: #999!important;
      text-transform: uppercase!important;
      margin-bottom: 0.625rem!important;  
      font-family: "Poppins",sans-serif;
  }
  .j-card-title h3{
      font-size: 20px!important;
      font-family: "Poppins",sans-serif;
      font-weight: 700 !important;
  
  }
  .j-card-text{
      font-weight: 500!important;
      margin-bottom: 1.25rem!important;
      font-size: 1rem;
      font-family: "Poppins",sans-serif;
      line-height: 1.63;
      color: #777;
  } 
  .journal-card {
    cursor: pointer;
  }
  </style>
  