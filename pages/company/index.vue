<template lang="html">
  <div>
    <BreadCrumbComp category="Услугы" />
    <div class="container container-xxl mt-3 py-5">
      <div class="row pb-5">
        <div class="col-12 d-flex justify-content-center service-title">
          <h1>{{ site_info.title.ru }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <img style="width: 100%" src="@/static/images/banner-01.jpg" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-5 d-flex justify-content-center">
          <p class="info-desc" v-html="site_info.desc.ru"></p>
        </div>
      </div>
    </div>
    <div class="container-fluid hr pb-5 mb-5"></div>
    <TitleComp title="Команда" />
    <div class="container container-xxl">
      <div class="row">
        <div class="col-12 mb-5 team-card-controller">
          <TeamCard v-for="(item, index) in team" :key="index" :team="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbComp from "~/components/BreadCrumbComp.vue";
import TitleComp from "~/components/TitleComp.vue";
import TeamCard from "~/smallComponents/TeamCard.vue";
export default {
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    const siteInfo = await $axios.$get("/site-info");
    const teamData = await $axios.$get("/team");
    console.log(siteInfo.data);
    let site_info = siteInfo.data;
    let team = teamData.data.data;
    console.log("team", team);
    return {
      site_info,
      team,
    };
  },
  components: { TeamCard, TitleComp },
};
</script>
<style lang="css">
.service-title h1 {
  font-weight: 600;
}
.info-desc {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.63;
  color: #777;
  text-align: left;
  max-width: 830px;
}
.hr {
  border-bottom: 1px solid rgb(228, 228, 228) !important;
}
.team-card-controller {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
}
@media (min-width: 576px) {
  .team-card-controller {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
}
}
@media (min-width: 768px) {
  .team-card-controller {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
}
@media (min-width: 992px) {
  .team-card-controller {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}
}
@media (min-width: 1200px) {
  .team-card-controller {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}
}
</style>
