<template lang="html">
  <div class="container container-xxl py-5">
    <div class="row pb-4">
      <div class="col-md-6 mb-8 mb-md-0">
        <a href="" v-for="(img, index) in product.product_images" :key="index">
          <img class="my-2 product_info_img" :src="img.lg_img" alt="" />
        </a>
      </div>
      <div class="pt-3 mr-40 col-md-5 pl-md-6 pl-lg-0">
        <div class="content-right primary-summary summary-sticky">
          <p
            class="body_type text-muted fs-12 font-weight-500 letter-spacing-05"
          >
            STOOL
          </p>
          <h2 class="body_title fs-30 fs-lg-40 mb-2">{{ product.title.ru }}</h2>

          <p class="mt-3 mb-6 body_card_info" v-html="info"></p>

          <el-form
            :model="dynamicValidateForm"
            ref="dynamicValidateForm"
            class="demo-dynamic"
            :rules="rules"
          >
            <label class="ml-1 placing-title">Количество:</label>
            <el-form-item prop="massage">
              <div class="couter-box">
                <a class="count-btn" @click="countFunc(false)"
                  ><font-awesome-icon :icon="['fas', 'fa-minus']"
                /></a>

                <span>{{ dynamicValidateForm.message }}</span
                ><a class="count-btn" @click="countFunc(true)"
                  ><font-awesome-icon :icon="['fas', 'fa-plus']"
                /></a>
              </div>
            </el-form-item>
            <label for="client_name">Имя* </label>
            <el-form-item prop="name">
              <el-input
                class="tel-number-input"
                placeholder="Ввдите Имя"
                v-model="dynamicValidateForm.name"
              ></el-input>
            </el-form-item>
            <label for="client_phone_number">Номер телефона* </label>
            <el-form-item prop="phone_number">
              <the-mask
                v-model="dynamicValidateForm.phone_number"
                class="tel-number-inputs"
                value="+998"
                placeholder="+998 __ ___-__-__"
                :mask="['+998 ## ### ## ##', '+998 ## ### ## ##']"
              />
            </el-form-item>
            <div class="send-info-btn">
              <el-form-item>
                <el-button
                  v-ripple="'rgba(255, 255, 255, 0.35)'"
                  :ripple="false"
                  type="primary"
                  class="send_btn"
                  @click="submitForm('dynamicValidateForm')"
                >
                  Отправить</el-button
                >
              </el-form-item>
              <recaptcha class="form-recaptcha" />
            </div>
          </el-form>
          <p class="border-bottom pb-4 mb-4 d-flex">
            <span class="d-inline-block mr-2 fs-14">
              <font-awesome-icon :icon="['fas', 'fa-truck-fast']" />
            </span>

            <span class="fs-15 px-3"
              >Get it between Aug 11, 2020 - Aug 18, 2020</span
            >
          </p>

          <div class="d-flex align-items-center flex-wrap mt-6">
            <a
              href="#"
              class="text-uppercase font-weight-bold letter-spacing-05 fs-14 mr-6"
            >
              <span class="ml-1 compare">Compare</span>
            </a>
          </div>
          <ul class="list-unstyled mt-5">
            <li class="row mb-2">
              <span class="d-block col-3 font-weight-500 fs-15"
                >Call Back:
              </span>
              <span class="d-block col-9 fs-15 color-gray"
                ><p class="mx-3 nav-phone">
                  <font-awesome-icon :icon="['fas', 'fa-phone']" />
                  {{ siteInfo.phone_number }}
                </p></span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <InformationTab />
    </div>
  </div>
</template>

<script
  src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit"
  async
  defer
></script>
<script>
import InformationTab from "./InformationTab.vue";
import { TheMask } from "vue-the-mask";
export default {
  props: ["product", "siteInfo"],
  components: {
    TheMask,
    InformationTab,
  },
  data() {
    return {
      cursorPos: {},
      count: 1,
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 15,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        phone_number: [
          {
            required: true,
            message: "Please select Activity phone number",
            trigger: "change",
          },
        ],
      },
      dynamicValidateForm: {
        name: "",
        phone_number: "",
        message: "1",
        page: "https://plaza.choopon.uz",
      },
      numberModel: "",

      mask: {
        mask: "{8}000000",
        lazy: false,
      },
      quality: 1,
      info: this.product.info.ru,
      value: "",
    };
  },

  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.log(e);
    }
    this.count = localStorage.getItem("count");
  },
  methods: {
    async submitForm(formName) {
      this.$toast.open({
        message: "Successfully",
        type: "success",
        duration: 2000,
        dismissible: true,
        position: "top-right",
      });
      // try {
      //   const token = await this.$recaptcha.getResponse();
      //   await this.$axios.post("/feedback", this.dynamicValidateForm);
      //   await this.$recaptcha.reset();
      // } catch (error) {
      //   console.log("Error in order:", error);
      // }
    },
    async recaptcha() {
      await this.$recaptchaLoaded();
      const token = await this.$recaptcha("login");
    },
    async sendFeedback() {
      const data = await this.$axios.post("/feedback", {
        name: this.client_name,
        phone_number: this.client_number,
        message: this.client_number,
        page: "https://plaza.choopon.uz",
      });
    },
    countFunc(def) {
      def
        ? this.dynamicValidateForm.message++
        : this.dynamicValidateForm.message--;

      localStorage.setItem("count", this.dynamicValidateForm.message);
      this.count = localStorage.getItem("count");
    },
  },
};
</script>
<style lang="css">
.product_info_img {
  width: 100%;
}
.body_type {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px !important;
}
@media (min-width: 992px) {
  .fs-lg-40 {
    font-size: 40px !important;
  }
}
.fs-30 {
  font-size: 30px !important;
}
.body_title {
  font-weight: 600;
  line-height: 1.25;
  color: #000;
  font-family: "Poppins", sans-serif;
}
.letter-spacing-05 {
  letter-spacing: 0.5px !important;
}
.fs-20 {
  font-size: 20px !important;
}
.body_price {
  color: #000 !important;
  font-size: 20px !important;
}
.see_reviews {
  line-height: 1 !important;
  font-size: 15px !important;
  color: #000 !important;
  /* padding-left: 1.25rem !important; */
}
.see_reviews span {
  border-right: 1px solid #e4e4e4 !important;
  padding-right: 5px;
  margin-right: 5px;
}
.see_reviews a {
  color: #000 !important;
}
.reyt_star {
  font-size: 12px !important;
  margin-right: 2px;
}
.body_card_info {
  color: #777 !important;
  font-family: "Poppins", sans-serif;
}
@media (min-width: 768px) {
  .pl-md-6,
  .px-md-6 {
    padding-left: 1.875rem !important;
  }
  .mr-40 {
    margin-left: 60px;
  }
}
.img_catchap {
  border: 1px solid #e4e4e4 !important;
  margin-bottom: 2.5rem !important;
}
.color_title span:first-child,
.quality_title {
  font-weight: 700 !important;
  color: #000 !important;
  font-family: "Poppins", sans-serif;
  font-size: 16px !important;
}
.color_title span:last-child {
  font-weight: 400 !important;
  color: #000 !important;
  font-family: "Poppins", sans-serif;
  font-size: 16px !important;
  margin-left: 4px;
}

.shop-swatch .list-inline-item.selected,
.shop-swatch .list-inline-item:hover {
  border-color: #000;
}

.shop-swatch .list-inline-item {
  border-radius: 50%;
  border: 1px solid transparent;
  transition: all 0.2s;
  padding: 4px;
  margin-right: 5px;
}
.list-inline-item {
  display: inline-block;
}
.shop-swatch .swatches-item {
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
.control_quality {
  display: flex;
  align-items: center;
  min-width: 100px;
  height: 45px;
  padding: 0.71875rem 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d2d2d2;
  border-radius: 0;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.ml-2 {
  margin-left: 8px !important;
}
@media (max-width: 768px) {
  .control_quality {
    width: 100%;
    margin-bottom: 30px;
  }
  .quality_resp {
    flex-direction: column;
  }
}
.control_quality a {
  color: #000 !important;
}
.btn-block {
  color: #fff !important;
  background-color: #000 !important;
  border-color: #000 !important;
  box-shadow: none;
  border-radius: 0 !important;
  height: 100% !important;
  width: 100% !important;
  letter-spacing: 0.5px !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
}
.compare {
  font-weight: 700 !important;
  font-size: 14px !important;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.5px !important;
  color: #000;
  text-decoration: none !important  ;
}
.mr-3 {
  margin-right: 1rem !important;
}
.i_body_icon {
  color: #666 !important;
  font-weight: 400;
  font-size: 14px !important;
}
.font-weight-500 {
  font-weight: 500 !important;
  font-family: "Poppins", sans-serif;
}

.fs-15 {
  font-size: 15px !important;
}

.mr-4 {
  margin-right: 1.5rem !important;
}
.content-right {
  position: sticky;
  top: 100px;
}
.card_icons {
  color: #000 !important;
}
@media (min-width: 992px) {
  .pb-6 {
    padding-bottom: 5rem !important;
  }
}
.tel-number-input input,
.tel-number-inputs {
  height: 63px !important;
  border: 1px solid #f2f2fa !important;
  border: none;
  border-radius: 0 !important;
  padding: 0 24px !important;
  margin-bottom: 10px !important;
}
.tel-number-inputs {
  width: 100%;
}
.tel-number-input:focus,
.tel-number-inputs:focus {
  outline: none !important;
  border: none !important;
  border-bottom: 2px solid transparent;
  box-shadow: 0px 0px 1px rgba(75, 77, 78, 0.75);
}
.placing-title {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #5d5d5f;
}
.count-btn {
  cursor: pointer;
  padding: 10px;
}
.couter-box {
  border: 1px solid #f2f2fa;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 168px;
}
.input-form label {
  font-size: 16px;
  font-weight: 600 !important;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
.send_btn {
  background: #191d31 !important;
  padding: 0 63px !important;
  border: none !important;
  width: 100%;
  border-radius: 0 !important;
  height: 64px;
  font-size: 16px !important;
  font-weight: 500 !important;
  line-height: 24px !important;
  letter-spacing: 0em !important;
  text-align: left;
  color: #fff !important;
}
.send-info-btn {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 16px;
  /* grid-gap: 24px; */
}
.vsa-item__trigger:focus,
.vsa-item__trigger:hover {
  outline: none;
  background-color: #fff !important;
  color: #000 !important;
}
</style>
