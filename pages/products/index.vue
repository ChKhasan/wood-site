<template lang="html">
  <div>
    <BreadCrumbComp category="Все продукты" />
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
                  <li style="cursor: pointer" class="mb-1 hover-effect">
                    <span
                      class="list-inline-item active"
                      @click="$router.push(`/products?page=1`)"
                    >
                      Все продукты
                    </span>
                  </li>
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
                        $router.push(
                          `/categories/${category.id}/products?page=1`
                        )
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
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="d-flex mb-6 justify-content-between flex-wrap">
            <div class="d-flex col-md-6 align-items-center number-pages">
              <div class="position-relative d-flex search-blog">
                <input
                  type="text"
                  v-model="params.search"
                  class="search-input"
                  placeholder="Search"
                />
                <el-button
                  icon="el-icon-search"
                  :class="{ 'btn-primary': params.search !== '' }"
                  :disabled="params.search == '' ? true : false"
                  @click="searchProduct"
                ></el-button>
                <!-- <el-button
                class="btn"
                :class="{ 'btn-primary': params.search !== '' }"
                :disabled="params.search == '' ? true : false"
                @click="searchProduct"
              >
                <font-awesome-icon
                  style="cursor: pointer"
                  icon="fa-solid fa-magnifying-glass"
                />
              </el-button> -->
              </div>
            </div>

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
  </div>
</template>
<script>
import ProductCard from "@/smallComponents/ProductCard.vue";
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

  async asyncData({ store, route }) {
    let id = await route.params.id;

    const categories = await store.dispatch(`categories/fetchCategories`);
    const products = await store.dispatch(
      `products/fetchProductByParams`,
      route.fullPath
    );
    return {
      categories,
      productsByCategory: products.data,
      currentPage: products.last_page,
      id,
    };
  },
  methods: {
    async searchProduct() {
      this.text = true;
      try {
        const searchProducts = await this.$store.dispatch(
          `products/fetchProductSearch`,
          {
            id: this.id,
            params: this.params,
          }
        );

        this.productsByCategory =
          searchProducts.data == [] ? [] : searchProducts.data;
        console.log(searchProducts.data);
        this.currentPage = searchProducts.last_page;
      } catch (err) {
        console.log(err);
      }
    },

    async changePage(val) {
      this.params.page = val;
      this.page.page = val;

      await this.$router.replace({
        path: `/products`,
        query: this.page,
      });

      const pro = await this.$axios.$get(`products`, {
        params: this.params,
      });
      this.productsByCategory = await pro.data.data;
      this.currentPage = await pro.data.last_page;
    },
  },
};
</script>
