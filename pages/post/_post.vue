<template lang="html">
  <div class="">
    <LayoutComp>
      <BreadCrumbComp category="Пост" />
      <div class="container container-xxl pt-10 mb-5">
        <div class="row">
          <div class="col-12 d-flex justify-content-center flex-column">
            <p class="post-date">APRIL 24, 2019</p>
            <h1 class="post-title">Green interior design inspiration</h1>
            <span class="owner">By Selena Gomez on Interior Design</span>
            <div class="mb-5">
              <img src="@/static/images/post-01.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <p class="post-subtitle">
                    Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. Fashion never stops. There is always the new project, the new opportunity.
                </p>
            </div>
          <div class="col-lg-9">
            <p class="post-description ">
                A girl should be two things: classy and fabulous. I am convinced that there can be luxury in simplicity. I wanted to dress the woman who lives and works, not the woman in a painting. It’s hard to balance everything. It’s always challenging. My relationships with producers or photographers – these are relationships that took years. I can’t get sucked into that celebrity thing, because I think it’s just crass. My aim is to make the poor look rich and the rich look poor. Vanity is the healthiest thing in life. I believe that my clothes can give people a better image of themselves – that it can increase their feelings of confidence and happiness. You can hide so much behind theatrics, and I don’t need to do that any more. I don’t really know how to do casual clothes.
            </p>
            <PostMessenger />
          </div>
        </div>
      </div>
    </LayoutComp>
  </div>
</template>
<script>
import TitleComp from "~/components/TitleComp.vue";
import LayoutComp from "~/Layouts/LayoutComp.vue";
import BreadCrumbComp from "~/components/BreadCrumbComp.vue";
import PostMessenger from "./postMessenger.vue";
export default {
  components: { TitleComp, LayoutComp, BreadCrumbComp, PostMessenger },
};
</script>
<style lang="css">
.post-date {
  font-weight: 500 !important;
  font-size: 12px !important;
  line-height: 1.2 !important;
  color: #999 !important;
  text-transform: uppercase !important;
  text-align: center !important;
  font-family: "Poppins", sans-serif;
}
.pt-10,
.py-10 {
  padding-top: 4.375rem !important;
}
.post-title {
  font-size: 40px !important;
  text-align: center !important;
  margin-bottom: 0.625rem !important;
  font-weight: 700;
  line-height: 1.25;
  color: #000;
  font-family: "Poppins", sans-serif;
}
.owner {
  text-align: center !important;
  margin-bottom: 4.375rem !important;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.63;
  color: #777;
}
.post-description {
    margin-bottom: 3.125rem!important;
    font-family: "Poppins",sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.63;
    color: #777;
    text-align: left;
}
.post-subtitle {
    font-weight: 500!important;
    font-weight: 500!important;
}
</style>
