<template lang="html">
  <div class="container container-xl py-5">
    <div class="row pb-6">
      <div class="col-md-3">
        <div class="shop-sticky">
          <div class="filter-card">
            <div class="filter-card-title">
              <h3>Категории продуктов</h3>
            </div>
            <div class="filter-card-body">
              <ul class="f-card-list" style="padding-left: none">
                <li
                  style="cursor: pointer"
                  class="mb-1 hover-effect"
                  v-for="(category, index) in categories.slice().reverse()"
                  :key="category.id"
                >
                  <span
                    class="list-inline-item"
                    :class="{ active: category.id == id }"
                    @click="
                      $router.push(`/categories/${category.id}/products?page=1`)
                    "
                  >
                    {{
                      category.title[getLang]
                        ? category.title[getLang]
                        : category.title.ru
                    }}
                  </span>
                </li>
              </ul>
            </div>

            <div class="filter-card-title">
              <h3>
                <nuxt-link
                  class="d-flex align-items-center to-brands-link"
                  to="/brands/1/products?page=1"
                  >Просмотреть бренды &nbsp;<font-awesome-icon
                    size="1x"
                    :icon="['fas', 'fa-arrow-right']"
                /></nuxt-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="shop-page-banner">
          <div class="category-banner">
            <img :src="categoryImg.lg_img" alt="" />
          </div>

          <div class="shop-page-img-overlay pt-xl-10">
            <p class="fs-18 font-weight-bold text-center text-white mb-2">
              {{ year }} Trending
            </p>

            <h2
              v-if="categoryImg.title"
              class="text-white text-center fs-30 fs-sm-40"
            >
              {{
                categoryImg.title[getLang]
                  ? categoryImg.title[getLang]
                  : categoryImg.title.ru
              }}
            </h2>
          </div>
        </div>
        <div class="d-flex mb-6 justify-content-between flex-wrap">
          <div class="d-flex col-md-6 align-items-center number-pages">
            <div class="position-relative">
              <input
                type="text"
                v-model="params.search"
                class="search-input"
                placeholder="Search"
              />
              <font-awesome-icon
                style="cursor: pointer"
                @click="searchProduct"
                class="serach-btn"
                icon="fa-solid fa-magnifying-glass"
              />
            </div>
          </div>
          <div
            class="ml-auto d-none col-md-6 d-md-flex align-items-center justify-content-end"
          ></div>
          <div
            class="ml-auto col-12 mt-4 d-md-none d-flex align-items-center justify-content-start"
          ></div>
        </div>
        <div class="shop-card-controller">
          <ProductCard
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="900"
            img="./images/product-10.jpg"
            v-for="(item, index) in productsByCategory"
            :key="index"
            :hide="false"
            :product="item"
          />
        </div>
        <div class="shop-pagination d-flex justify-content-center pt-5">
          <vs-pagination
            :total-pages="currentPage"
            :current-page="1"
            :page-padding="2"
            @change="changePage($event)"
          ></vs-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "../../smallComponents/ProductCard.vue";
import VsPagination from "@vuesimple/vs-pagination";
export default {
  data() {
    return {
      productsByCategory: [],
      categoryById: {},
      categoryImg: {},
      id: 1,
      categories: [],
      currentPage: 1,
      params: {
        page: 1,
        paginate: 12,
        search: "",
      },
      page: {
        page: 1,
      },
      year: null,
    };
  },
  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
  components: {
    ProductCard,
    VsPagination,
  },
  mounted() {
    this.fetchSomething();
  },

  methods: {
    async fetchSomething() {
      let id = await this.$route.params.id;
      this.id = await id;
      this.params.page = await 1;
      const products = await this.$store.dispatch(
        `products/fetchProductByParams`,
        this.$route.fullPath
      );
      const categoryImg = await this.$store.dispatch(
        `categories/fetchCategoryById`,
        this.id
      );

      const categories = await this.$store.dispatch(
        `categories/fetchCategories`
      );
      const event = new Date(categoryImg.created_at);
      this.year = event.getFullYear();
      this.categories = categories;
      this.categoryImg = categoryImg;
      this.productsByCategory = products.data;
      this.currentPage = products.last_page;
    },

    async searchProduct() {
      this.text = true;
      const searchProducts = await this.$store.dispatch(
        `categories/fetchCategorySearch`,
        {
          id: this.id,
          params: this.params,
        }
      );
      const categoryById = await this.$store.dispatch(
        `categories/fetchCategoryById`,
        this.id
      );
      this.categoryById = categoryById;
      this.productsByCategory = searchProducts.data;
      this.currentPage = searchProducts.last_page;
    },

    async changePage(val) {
      this.params.page = val;
      this.page.page = val;

      await this.$router.replace({
        path: `/categories/${this.id}/products`,
        query: this.page,
      });

      const pro = await this.$axios.$get(`categories/${this.id}/products`, {
        params: this.params,
      });
      this.productsByCategory = await pro.data.data;
      this.currentPage = await pro.data.last_page;
    },
  },
};
</script>
<style lang="css">
.category-banner {
  width: 100%;

  background-position: center;
  background-size: cover;
  overflow: hidden;
}
.f-card-list {
  list-style: none;
  padding-left: 0 !important;
  padding-top: 20px;
}
.f-card-list li span {
  color: #777;
  line-height: 1.2 !important;
  transition: all 0.2s;
  font-weight: 400 !important;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid transparent;
}

.filter-card-title h3 {
  font-size: 20px !important;
  font-weight: 700;
  line-height: 1.25;
  color: #000;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0 !important;
}
.filter-card {
  margin-bottom: 40px;
}

.active {
  border-bottom: 1px solid #000 !important;
  color: #000 !important;
}

.color_selection .list-inline-item {
  border-radius: 50%;
  border: 1px solid transparent;
  transition: all 0.2s;
  padding: 4px;
  margin-right: 5px;
}
.list-inline-item {
  display: inline-block;
}

.color_selection .swatches-item {
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
.color_selection {
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
}
.mr-2 {
  margin-right: 0.625rem !important;
}
.shop-page-banner {
  position: relative;
  margin-bottom: 50px;
}
.shop-page-banner img {
  width: 100%;
}

.shop-page-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  border-radius: 0;
}
.shop-page-img-overlay h2 {
  font-size: 30px !important;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.25;
  font-family: "Poppins", sans-serif;
}
.number {
  display: flex;
  align-items: center;
}
.shop-page-img-overlay p {
  font-size: 18px !important;
  font-weight: 700 !important;
  font-family: "Poppins", sans-serif;
}
@media (min-width: 576px) {
  .shop-page-img-overlay h2 {
    font-size: 40px !important;
  }
}

@media (min-width: 1200px) {
  .shop-page-img-overlay {
    padding-top: 4.375rem !important;
  }
}
.number-pages {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.63;
}
.shop-card-controller {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 30px;
}
@media (min-width: 576px) {
  .shop-card-controller {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 768px) {
  .shop-card-controller {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 992px) {
  .shop-card-controller {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (min-width: 1200px) {
  .container_block {
    max-width: 1200px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 1400px) {
  .container_block {
    max-width: 1390px !important;
    margin: 0 auto !important;
  }
}
.shop-sticky {
  position: sticky;
  top: 100px;
}
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 21px;
  margin-left: 0;
  line-height: 1.25;
  color: #a2a2a2;
  background-color: transparent;
  border: 0 solid #dee2e6;
}
.el-pagination {
  display: flex;
  align-items: center;
}
.el-pager {
  display: flex;
  list-style: none;
  margin-bottom: 0 !important;
}
.el-pager li {
  padding-left: 21px !important;
  padding-right: 21px !important;
  background: transparent !important;
  cursor: pointer;
  min-width: 35.5px;
  color: #a2a2a2 !important;
  height: 28px;
  line-height: 1.25 !important;
  box-sizing: border-box;
  border: 0 solid #dee2e6 !important  ;
  font-size: 18px !important;
  font-weight: 500 !important;
  letter-spacing: 4.5px;
  /* font-family: "Poppins",sans-serif !important; */
}
/* .el-pager li:hover {
  color: #000 !important;
} */
.el-pager li.active {
  color: #000 !important;
  cursor: default;
}
@media (min-width: 576px) {
  .search-input {
    padding: 1px 1.25rem;
  }
}
.search-input {
  border: none;
  border-width: 2px !important;
  height: calc(1.25em + 1.4375rem + 2px);

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  color: #000;
  background-color: #fff;
  background-clip: padding-box;
  border-bottom: 1px solid #d2d2d2;
  border-radius: 0;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: "Poppins", sans-serif;
}
.search-input:focus {
  outline: none;
  border-bottom: 1px solid #000;
}
.serach-btn {
  position: absolute;
  top: 30%;
  right: 0;
}
.btn-prev {
  background-image: url("@/static/images/images.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  widows: 20px;
  height: 20px;
  border: none;
}
.btn-next {
  background-image: url("@/static/images/1200px-OOjs_UI_icon_next-ltr.svg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  widows: 20px;
  height: 20px;
  border: none;
}
.to-brands-link {
  transition: 0.4s;
}
.to-brands-link:hover {
  transform: translateX(8px);
}
</style>
