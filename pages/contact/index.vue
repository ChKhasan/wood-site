<template lang="html">
  <div>
    <BreadCrumbComp category="Контакт" />
    <div class="container container-xxl mt-3 py-5 pb-14">
      <div class="row pb-5">
        <div class="col-12 contact-title">
          <h1>Свяжитесь с нами</h1>
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
            Мы были бы рады получить известия от вас.
          </h2>
          <p class="mb-7 form-text">
            Если у вас есть отличные продукты, которые вы делаете или хотите
            работать с нами, напишите нам.
          </p>
          <form action="">
            <div class="row mb-6">
              <div class="col-sm-6 mt-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ваше Имя*"
                  required=""
                />
              </div>
              <div class="col-sm-6 mt-4">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Ваше Эл. адрес*"
                  required=""
                />
              </div>
            </div>
            <div class="form-group mb-4">
              <textarea class="form-control" rows="6">Комментарий</textarea>
            </div>
            <div class="custom-control custom-checkbox mb-6">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label fs-15" for="customCheck1">
                Сохраните мое имя, адрес электронной почты и веб-сайт в этом
                браузере для следующего комментария.</label
              >
            </div>
            <button
              type="submit"
              class="btn form-btn text-uppercase letter-spacing-05"
            >
              отправить сейчас
            </button>
          </form>
        </div>

        <div class="col-md-4 pl-xl-13 pl-md-6 mt-4">
          <p class="font-weight-bold adress-title mb-3">Адрес</p>
          <address class="mb-6 form-text">
            {{ site_info.address.ru }}
          </address>
          <p class="font-weight-bold info-title mb-2 form-text">Информация</p>
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
export default {
  data() {
    return {
      placemarks: [
        {
          // coords: [41.311158, 69.279737],
          coords: [41.3, 69.2],
          properties: {}, // define properties here
          options: {}, // define options here
          clusterName: "1",
          balloonTemplate: '<div>"Your custom template"</div>',
          callbacks: { click: function () {} },
        },
      ],
    };
  },
  mounted() {
    this.$i18n.setLocale(localStorage.getItem("Lang"))
  },
  components: { yandexMap, ymapMarker, BreadCrumbComp },
  async asyncData({ $axios }) {
    const siteInfo = await $axios.$get("/site-info");
    let site_info = siteInfo.data;
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
  font-family: "Poppins", sans-serif;
}
.form-title {
  font-size: 24px !important;
  font-weight: 700;
  line-height: 1.25;
  color: #000;
  font-family: "Poppins", sans-serif;
}
.form-text {
  font-family: "Poppins", sans-serif;
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
  font-family: "Poppins", sans-serif;
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
  font-family: "Poppins", sans-serif;
}
.adress-title,
.info-title {
  color: #000 !important;
  font-weight: 700 !important;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.63;
}
.pb-14 {
  padding-bottom: 6.875rem !important;
}
.map-control {
  padding-bottom: 70px;
}
.form-control:focus {
  outline: none !important;
  border: none !important;
  /* -webkit-box-shadow: 0px 0px 5px rgba(56, 169, 240, 0.75);
        -moz-box-shadow: 0px 0px 5px rgba(56, 169, 240, 0.75); */
  box-shadow: 0px 0px 5px rgba(75, 77, 78, 0.75),
    0px 0px 3px rgba(75, 77, 78, 0.75);
}
</style>
