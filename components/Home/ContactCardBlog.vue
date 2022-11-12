<template lang="html">
  <div>
    <div class="container container-xl">
      <div class="row">
        <div class="col-xl-6 my-4">
          <ContactCard
            name="Подробнее"
            v-if="siteInfo.instagram"
            :link="siteInfo.instagram"
            :title="
              contactTitle.instagram[getLang]
                ? contactTitle.instagram[getLang]
                : contactTitle.instagram.ru
            "
            img="./images/instagram.png"
            bgcolor="#D7D3FF"
          />
        </div>
        <div class="col-xl-6 my-4">
          <ContactCard
            name="Подробнее"
            v-if="siteInfo.youtube"
            :link="siteInfo.youtube"
            :title="
              contactTitle.youtube[getLang]
                ? contactTitle.youtube[getLang]
                : contactTitle.youtube.ru
            "
            img="./images/youtube.png"
            bgcolor="#FFC0C0"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 my-4">
          <ContactCard
            name="Подробнее"
            v-if="siteInfo.facebook"
            :link="siteInfo.facebook"
            :title="
              contactTitle.facebook[getLang]
                ? contactTitle.facebook[getLang]
                : contactTitle.facebook.ru
            "
            img="./images/facebook.png"
            bgcolor="#D3E5FF"
          />
        </div>
        <div class="col-xl-6 my-4">
          <ContactCard
            name="Подробнее"
            v-if="siteInfo.telegram"
            :link="siteInfo.telegram"
            :title="
              contactTitle.telegram[getLang]
                ? contactTitle.telegram[getLang]
                : contactTitle.telegram.ru
            "
            img="./images/telegram.png"
            bgcolor="#D3F4FF"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactCard from "../../smallComponents/ContactCard.vue";
export default {
  props: ["siteInfo"],
  data() {
    return {
      contactTitle: {
        telegram: {
          ru: "Следите за нашим магазином в Telegram",
          uz: "Bizning do'konimizni Telegramda kuzatib boring",
        },
        instagram: {
          ru: "Следите за нашим магазином в Instagram",
          uz: "Bizning do'konimizni Instagramda kuzatib boring",
        },
        youtube: {
          ru: "Следите за нашим магазином в You Tube",
          uz: "Bizning do'konimizni You Tubeda kuzatib boring",
        },
        facebook: {
          ru: "Следите за нашим магазином в Facebook",
          uz: "Bizning do'konimizni Facebookda kuzatib boring",
        },
      },
    };
  },
  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
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
