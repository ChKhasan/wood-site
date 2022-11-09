<template lang="html">
  <div>
    <div class="container container-xl">
      <div class="row">
        <div class="col-xl-6 my-4">
          <ContactCard
            name="Подробнее"
            v-if="siteInfo.instagram"
            :link="siteInfo.instagram"
            title="Instagram"
            img="./images/instagram.png"
            bgcolor="#D7D3FF"
          />
        </div>
        <div class="col-xl-6 my-4">
          <ContactCard
            name="Подробнее"
            v-if="siteInfo.youtube"
            :link="siteInfo.youtube"
            title="You Tube"
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
            title="Facebook"
            img="./images/facebook.png"
            bgcolor="#D3E5FF"
          />
        </div>
        <div class="col-xl-6 my-4">
          <ContactCard
            name="Подробнее"
            v-if="siteInfo.telegram"
            :link="siteInfo.telegram"
            title="Telegram"
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
