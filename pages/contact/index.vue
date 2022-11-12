<template lang="html">
  <div>
    <BreadCrumbComp
      :category="
        contactLang.contact[getLang]
          ? contactLang.contact[getLang]
          : contactLang.contact.ru
      "
    />
    <div class="container container-xxl mt-3 py-5 pb-14">
      <div class="row pb-5">
        <div class="col-12 contact-title">
          <h1>{{ contactLang.contactUs[getLang]
          ? contactLang.contactUs[getLang]
          : contactLang.contactUs.ru}}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 map-control">
          <!-- <yandex-map
              :coords="[41.311158, 69.279737]"
              zoom="16"
              style="width: 100%; aspect-ratio: 1/0.5"
              :cluster-options="{
                1: { clusterDisableClickZoom: true },
              }"
              :behaviors="['drag']"
              :controls="['zoomControl']"
              :marker="placemarks"
              map-type="hybrid"
              @map-was-initialized="initHandler"
            >
              <ymap-marker
                marker-id="1"
                marker-type="placemark"
                :coords="[41.311158, 69.279737]"
                hint-content="Hint content 1"
                :balloon="{
                  header: 'Space Mos',
                  body: 'body',
                  footer: 'footer',
                }"
                :icon="{ color: 'red', glyph: 'cinema' }"
                cluster-name="1"
              ></ymap-marker>
            </yandex-map> -->
          <iframe
            :src="site_info.map"
            width="100%"
            style="border: 0; aspect-ratio: 1/0.5"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8 mb-8 mb-md-0 mt-4">
          <h2 class="fs-24 mb-2 form-title">
            {{ contactLang.formTitle[getLang]
          ? contactLang.formTitle[getLang]
          : contactLang.formTitle.ru}}
          </h2>
          <p class="mb-7 form-text">
            {{ contactLang.formText[getLang]
          ? contactLang.formText[getLang]
          : contactLang.formText.ru}}
          </p>
          <form action="">
            <div class="row mb-6">
              <div class="col-sm-6 mt-4">
                <input
                  type="text"
                  class="form-control"
                  :placeholder="contactLang.yourName[getLang]
          ? contactLang.yourName[getLang]
          : contactLang.yourName.ru"
                  required
                  oninvalid="this.setCustomValidity('Введите имя пользователя')"
                  oninput="this.setCustomValidity('')"
                  v-model="dynamicValidateForm.name"
                />
              </div>
              <div class="col-sm-6 mt-4">
                <the-mask
                  v-model="dynamicValidateForm.phone_number"
                  class="form-control"
                  value="+998 "
                  required
                  placeholder="+998 __ ___-__-__"
                  :mask="['+998 ## ### ## ##', '+998 ## ### ## ##']"
                />
              </div>
            </div>
            <div class="form-group mb-4">
              <textarea
                class="form-control"
                rows="6"
                required
                v-model="dynamicValidateForm.message"
              >
Комментарий</textarea
              >
            </div>
            <div class="custom-control custom-checkbox mb-6">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label fs-15" for="customCheck1">
               {{contactLang.save[getLang]
          ? contactLang.save[getLang]
          : contactLang.save.ru}}</label
              >
            </div>
            <button
              v-ripple="'rgba(255, 255, 255, 0.35)'"
              :ripple="false"
              class="btn form-btn text-uppercase letter-spacing-05"
              @click="postData"
            >
              {{contactLang.sendNow[getLang]
          ? contactLang.sendNow[getLang]
          : contactLang.sendNow.ru}}
            </button>
          </form>
        </div>

        <div class="col-md-4 pl-xl-13 pl-md-6 mt-4">
          <p class="font-weight-bold adress-title mb-3">{{contactLang.address[getLang]
          ? contactLang.address[getLang]
          : contactLang.address.ru}}</p>
          <address class="mb-6 form-text">
            {{
              site_info.address[getLang]
                ? site_info.address[getLang]
                : site_info.address.ru
            }}
          </address>
          <p class="font-weight-bold info-title mb-2 form-text">{{contactLang.info[getLang]
          ? contactLang.info[getLang]
          : contactLang.info.ru}}</p>
          <p class="mb-0 form-text">{{ site_info.phone_number }}</p>
          <a :href="`mailto:${site_info.email}`" class="mb-7 form-text">{{
            site_info.email
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbComp from "~/components/BreadCrumbComp.vue";
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { TheMask } from "vue-the-mask";
export default {
  data() {
    return {
      dynamicValidateForm: {
        name: "",
        phone_number: "",
        message: "",
        page: "https://plaza.choopon.uz",
      },
      placemarks: [
        {
          coords: [41.3, 69.2],
          properties: {}, // define properties here
          options: {}, // define options here
          clusterName: "1",
          balloonTemplate: '<div>"Your custom template"</div>',
          callbacks: { click: function () {} },
        },
      ],
      contactLang: {
        contact: {
          ru: " Контакт",
          uz: "Aloqa",
        },
        contactUs: {
          ru: "Свяжитесь с нами",
          uz: "Biz bilan bog'lanish",
        },
        formTitle: {
          ru: "Мы были бы рады получить известия от вас.",
          uz: "Sizdan xabar olsak xursand bo'lardik.",
        },
        formText: {
          ru: "Если у вас есть отличные продукты, которые вы делаете или хотите работать с нами, напишите нам.",
          uz: "Agar sizda ishlab chiqaradigan ajoyib mahsulotlaringiz bo'lsa yoki biz bilan ishlashni xohlasangiz, biz bilan bog'laning.",
        },
        yourName: {
          ru: "Ваше Имя*",
          uz: "Sizning ismingiz*",
        },
        save: {
          ru: "Сохраните мое имя, номер телефона и веб-сайт в этом браузере для вашего следующего обзора.",
          uz: "Keyingi sharhingiz uchun ismim, telefon nomerim va veb-saytimni ushbu brauzerda saqlang.",
        },
        sendNow: {
          ru: "отправить сейчас",
          uz: "hozir yuboring",
        },
        address: {
          ru: "Адрес",
          uz: "Manzil",
        },
        info: {
          ru: "Информация",
          uz: "Ma `lumot",
        },
      },
    };
  },
  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },

  methods: {
    async postData() {
      if (
        this.dynamicValidateForm.name !== "" &&
        this.dynamicValidateForm.phone_number !== "" &&
        this.dynamicValidateForm.message !== ""
      ) {
        try {
          await this.$axios.post("/feedback", this.dynamicValidateForm);
          (this.dynamicValidateForm = {
            name: "",
            phone_number: "",
            message: "",
            page: "https://plaza.choopon.uz",
          }),
            await this.$toast.open({
              message: "Successfully",
              type: "success",
              duration: 2000,
              dismissible: true,
              position: "top-right",
            });
        } catch (error) {
          console.log("Error in order:", error);
        }
      }
    },
  },
  components: { yandexMap, ymapMarker, BreadCrumbComp, TheMask },
  async asyncData({ store }) {
    const site_info = await store.dispatch("site-info/fetchSiteInfo");
    return {
      site_info,
    };
  },
};
</script>
<style lang="css">
.contact-title h1 {
  font-size: 40px !important;
  text-align: center !important;
  font-weight: 700;
  line-height: 1.25;
  color: #000;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif !important;
}
.form-title {
  font-size: 24px !important;
  font-weight: 700;
  line-height: 1.25;
  color: #000;
  font-family: "Montserrat", sans-serif !important;
}
.form-text {
  font-family: "Montserrat", sans-serif !important;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.63;
  color: #777;
  text-align: left;
}
.form-btn {
  color: #fff;
  border-radius: 0;
  background-color: #000;
  border-color: #000;
  box-shadow: none;
  letter-spacing: 0.5px !important;
  display: inline-block;
  font-weight: 700 !important;
  text-align: center;
  vertical-align: middle;
  font-family: "Montserrat", sans-serif !important;
  font-size: 0.875rem !important;
}
.form-btn:hover {
  color: #fff;
  border-radius: 0;
  background-color: #000;
  border-color: #000;
  box-shadow: none;
  letter-spacing: 0.5px !important;
  display: inline-block;
  font-weight: 700 !important;
  text-align: center;
  vertical-align: middle;
  font-family: "Montserrat", sans-serif !important;
}
.adress-title,
.info-title {
  color: #000 !important;
  font-weight: 700 !important;
  font-family: "Montserrat", sans-serif !important;
  font-size: 1rem;
  line-height: 1.63;
}
.pb-14 {
  padding-bottom: 6.875rem !important;
}
.map-control {
  padding-bottom: 70px;
}
.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(0 0 0 / 1%);
}
.form-control:focus {
  /* outline: none !important;
  border: none !important;
*/
  border-color: rgba(75, 77, 78, 0.01);
  box-shadow: 0px 0px 5px rgba(75, 77, 78, 0.4),
    0px 0px 3px rgba(75, 77, 78, 0.4);
}
</style>
