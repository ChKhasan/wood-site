<template lang="">
  <div
    class="shopping_card gr-start-lg-2 grid-item px-sm-5 px-3 py-sm-4 py-3"
    :class="gridClass"
    :style="{ 'background-image': `url(${category.lg_img})` }"
  >
    <div class="sh_control_box d-flex flex-column justify-content-between">
      <div class="sh_title">
        <h1>
          {{ category.title.ru }} <br />
          category
        </h1>
      </div>
      <div>
        <router-link
          :to="`/categories/${category.id}/products?page=1`"
          class="btn btn-outline-primary text-uppercase shop_now_btn"
          >{{ shopNow[getLang] ? shopNow[getLang] : shopNow.ru }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["gridClass", "category"],
  data() {
    return {
      shopNow: {
        ru: "Купить сейчас",
        uz: "Hozir xarid qilish",
      },
    };
  },
  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
};
</script>
<style lang="css">
.shopping_card {
  background-position: center;
  background-size: cover;
  display: grid;
  height: 100%;
  cursor: pointer;
  padding-top: 40px !important;
  font-family: "Montserrat", sans-serif !important;
  transition: transform 0.5s !important;
}
.shopping_card:hover {
  transform: translateY(-10px) !important;
}
.sh_title {
  max-width: 300px;
}
@media (min-width: 992px) {
  .sh_title h1 {
    font-size: 40px !important;
  }
  .sh_title h1 {
    font-size: 43px !important;
    font-weight: 700;
    line-height: 1.25;
  }
}
@media (min-width: 992px) {
  .shopping_card-grid1 {
    grid-row-start: 4 !important;
    grid-column-start: 3 !important;
    grid-column-end: 5 !important;
  }
  .shopping_card-grid3 {
    grid-row-start: 6 !important;
    grid-column-start: 1 !important;
    grid-column-end: 3 !important;
  }
  .shopping_card-grid2 {
    grid-row-start: 2 !important;
    grid-column-start: 1 !important;
    grid-column-end: 3 !important;
  }
}

@media (min-width: 576px) and (max-width: 992px) {
  .shopping_card-grid1 {
    grid-row-start: 4 !important;
    grid-column-start: 1 !important;
    grid-column-end: 3 !important;
    aspect-ratio: 1/0.5;
  }
  .shopping_card-grid3 {
    grid-row-start: 6 !important;
    grid-column-start: 1 !important;
    grid-column-end: 3 !important;
    aspect-ratio: 1/0.5;
  }
  .shopping_card-grid2 {
    grid-row-start: 8 !important;
    grid-column-start: 1 !important;
    grid-column-end: 3 !important;
    aspect-ratio: 1/0.5;
  }
}

@media (max-width: 576px) {
  .shopping_card-grid1 {
    grid-row-start: 4 !important;
    aspect-ratio: 1/1;
  }
  .shopping_card-grid3 {
    grid-row-start: 6 !important;
    aspect-ratio: 1/1;
  }
  .shopping_card-grid2 {
    grid-row-start: 8 !important;
    aspect-ratio: 1/1;
  }
}

.sh_title h1 {
  font-size: 24px !important;
  font-weight: 700;
  line-height: 1.25;
}

.grid-item {
  display: grid;
  width: 100%;
}
</style>
