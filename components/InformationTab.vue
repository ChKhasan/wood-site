<template lang="html">
  <div class="mt-5">
    <div class="d-none d-md-block">
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->
      <div class="info-title d-flex justify-content-center">
        <h1>Description</h1>
      </div>

      <!-- <el-tab-pane label="Description" name="first"> -->
      <DescriptionComp />
      <!-- </el-tab-pane> -->
      <!-- <el-tab-pane
            label="
    Infomation"
            name="second"
            ><InformationComp
          /></el-tab-pane>
          <el-tab-pane
            label="
    Reviews (3)"
            name="third"
            ><CommentsComp
          /></el-tab-pane> -->
      <!-- </el-tabs> -->
    </div>
    <div class="d-md-none">
      <vsa-list>
        <vsa-item>
          <vsa-heading>Description</vsa-heading>

          <vsa-content>
            <DescriptionComp />
          </vsa-content>
        </vsa-item>
        <!-- <vsa-item>
          <vsa-heading> Infomation </vsa-heading>

          <vsa-content>
            <InformationComp />
          </vsa-content>
        </vsa-item>
        <vsa-item>
          <vsa-heading> Reviews (3) </vsa-heading>

          <vsa-content>
            <CommentsComp />
          </vsa-content>
        </vsa-item> -->
      </vsa-list>
    </div>
  </div>
</template>
<script>
import DescriptionComp from "./DescriptionComp.vue";
// import InformationComp from "../components/InformationComp.vue";
// import CommentsComp from "../components/CommentsComp.vue";
import { VsaList, VsaItem, VsaHeading, VsaContent } from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    DescriptionComp,
    // InformationComp,
    // CommentsComp,
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="css">
.el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
}
.el-tabs__nav-wrap::after {
  background: transparent !important;
}
.el-tabs__item.is-active {
  color: #000 !important;
}
.el-tabs__active-bar {
  background: transparent !important;
}
.el-tabs__item {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 24px !important;
  font-weight: 500 !important;
  color: #bebebe !important;
  position: relative;
  transition: all 0.2s !important;
  font-family: "Poppins", sans-serif;
}
@media (min-width: 992px) {
  .el-tabs__item {
    font-size: 32px !important;
  }
}
.vsa-item__trigger__icon {
  display: none !important;
}
.vsa-item__trigger:hover {
  outline: none;
  background-color: white !important;
  color: #000 !important;
}

.vsa-item__heading {
  border: 1px solid #e4e4e4 !important;
}
.vsa-item__content {
  border: 1px solid #e4e4e4 !important;
  margin-top: 20px;
}
.vsa-list {
  border: none !important;
  --vsa-border: none !important;
}
</style>
