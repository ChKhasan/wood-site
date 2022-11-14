<template lang="html">
  <div>
    <div class="banner_company d-flex flex-column justify-content-center">
      <div class="d-flex flex-column justify-content-center">
        <div class="container container-xl">
          <div class="row align-items-center banner_company-title flex-column">
            <span
              class="title_banner-text"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-offset="100"
              data-aos-duration="900"
              >{{ title.title[getLang] ?? title.title.ru }}</span
            >
            <h1
              class="mb-4 mb-md-8 fs-60 fs-xxl-120 heading-home-01 lh-113"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-offset="400"
              data-aos-duration="900"
            >
              <strong
                class="d-block title_banner fadeInUp animated"
                data-animate="fadeInUp"
              >
                {{
                  translate[getLang]?.company.title ??
                  translate.ru.company.title
                }}</strong
              >
            </h1>
          </div>
        </div>
      </div>
      <div class="mt-auto">
        <div class="container_block container-xl">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerComp",
  props: ["title"],
  data() {
    return {
      translate: {
        ru: require("@/locales/ru.json"),
        uz: require("@/locales/uz.json"),
      },
    };
  },
  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
  components: {},
};
</script>
<style lang="css">
.banner_company {
  background-image: url("../../static/images/image 50702 (1).png");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 1200px;
  margin-bottom: 124px;
}
.banner_company-title {
  margin-top: 76px;
  padding-top: 8%;
}
.newIn {
  font-weight: 100 !important;
  font-size: 24px;
  line-height: 1.63;
  font-family: "Montserrat", sans-serif !important;
  color: #000;
  margin-top: 30px;
}
.title_banner-text {
  font-size: 28px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
}
.title_banner {
  font-family: "Montserrat";
  font-size: 48px;
  font-weight: 700 !important;
  line-height: 59px;
  letter-spacing: 0em;
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
  margin-top: 14px;
  color: #000;
}
@media (max-width: 576px) {
  .title_banner {
    font-size: 38px;
    line-height: 48px;
  }
}
.shop_now_btn {
  border: 1px solid #000 !important;
  border-radius: 0 !important;
  color: #000;
  font-weight: 700 !important;
  padding: 0.625rem 1.875rem !important;
  margin-top: 20px;
}
.shop_now_btn:hover {
  border: 1px solid #000 !important;
  background-color: black !important;
  color: #fff !important;
}
.design-by-span {
  font-weight: 600 !important;
}
.design-by-p {
  margin-bottom: 3.125rem !important;
}
@media (max-width: 991.98px) {
  .custom-height-sm {
    height: 600px !important;
  }
}
</style>
