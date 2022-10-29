<template lang="html">
  <div>
    <BreadCrumbComp category="Услугы" />
    <div class="container container-xxl mt-3 py-5">
      <div class="row pb-5">
        <div class="col-12 d-flex justify-content-center service-title">
          <h1>Что мы делаем</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="">
            <ServiceCard
              v-for="service in services"
              :key="service.id"
              :services="service"
            />
          </div>
          <Vaccordion>
            <template v-slot:title>
              <span style="color: white"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                feugiat velit feugiat quis. In.</span
              >
            </template>
            <template v-slot:content>
              <span style="color: white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit consequuntur quasi sapiente vero? Possimus similique
                nesciunt nostrum temporibus quia vitae corrupti recusandae magni
                corporis hic modi rem doloribus ea id, ad distinctio qui quis
                accusamus accusantium animi veniam.
              </span>
            </template>
          </Vaccordion>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbComp from "~/components/BreadCrumbComp.vue";
import TitleComp from "~/components/TitleComp.vue";
import ServiceCard from "~/smallComponents/ServiceCard.vue";
import Vaccordion from "vue-nuxt-accordion";
export default {
  data() {
    return {
      services: [],
      activeNames: ["1"],
    };
  },
  components: {
    Vaccordion,
    BreadCrumbComp,
    TitleComp,
    ServiceCard,
  },
  mounted() {
    this.getService();
  },
  methods: {
    async getService() {
      const service = await this.$axios.$get("/services");
      const categories = await this.$axios.$get(`/categories`);
      this.services = service.data.data;
    },
    handleChange(val) {
    },
  },
};
</script>
<style lang="css">
.service-title h1 {
  font-weight: 600;
}
</style>
