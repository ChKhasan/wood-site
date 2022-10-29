<template lang="html">
  <div class="container container-xxl py-5">
    <div class="row pb-6">
      <div class="col-md-6 mb-8 mb-md-0" >
        <a href="" v-for="(img,index) in product.product_images" :key="index">
          <img
            class="my-2 product_info_img"
            :src="img.lg_img"
            alt=""
          />
        </a>
        <!-- <a href="">
          <img
            class="my-2 product_info_img"
            src="../static/images/product-13_3.jpg"
            alt=""
          />
        </a>
        <a href="">
          <img
            class="my-2 product_info_img"
            src="../static/images/product-13_3.jpg"
            alt=""
          />
        </a>
        <a href="">
          <img
            class="my-2 product_info_img"
            src="../static/images/product-13_3.jpg"
            alt=""
          />
        </a>
        <a href="">
          <img
            class="my-2 product_info_img"
            src="../static/images/product-13_3.jpg"
            alt=""
          />
        </a>
        <a href="">
          <img
            class="my-2 product_info_img"
            src="../static/images/product-13_3.jpg"
            alt=""
          />
        </a> -->
      </div>
      <div class="pt-3 mr-40 col-md-5 pl-md-6 pl-lg-0">
        <div class="content-right primary-summary summary-sticky">
          <p
            class="body_type text-muted fs-12 font-weight-500 letter-spacing-05"
          >
            STOOL
          </p>
          <h2 class="body_title fs-30 fs-lg-40 mb-2">{{product.title.ru}}</h2>
          <!-- <p class="fs-20 mb-4 body_price">$790.00</p> -->
          <!-- <div class="d-flex align-items-center flex-wrap">
              <div class="reting_star_box">
                <font-awesome-icon class="reyt_star" icon="fa-solid fa-star" />
                <font-awesome-icon class="reyt_star" icon="fa-solid fa-star" />
                <font-awesome-icon class="reyt_star" icon="fa-solid fa-star" />
                <font-awesome-icon class="reyt_star" icon="fa-solid fa-star" />
                <font-awesome-icon class="reyt_star" icon="fa-solid fa-star" />
              </div>
              <p class="mb-0 fs-15 lh-1 overflow-hidden pl-4 see_reviews px-2">
                <span class="pr-1 mr-1 border-right">5.0</span
                ><a href="#">See 3 Reviews</a>
              </p>
            </div> -->
          <p class="mt-3 mb-6 body_card_info" v-html="info">
          </p>
          <img
            class="img_catchap"
            src="../static/images/product-page-09.jpg"
            alt=""
          />
          <form>
            <div class="form-group shop-swatch mb-6">
              <!-- <label class="mb-3 color_title"
                  ><span class="fs-16 font-weight-bold">Color:</span>
                  <span class="var text-capitalize">Green</span></label
                >
                <ul class="list-inline d-flex justify-content-start mb-0">
                  <li class="list-inline-item mr-1 selected" @click="takeColor">
                    <a
                      class="d-block swatches-item"
                      data-var="black"
                      style="background-color: #000000"
                    >
                    </a>
                  </li>
                  <li class="list-inline-item" @click="takeColor">
                    <a
                      class="d-block swatches-item"
                      data-var="brown"
                      style="background-color: #68412d"
                    ></a>
                  </li>
                  <li class="list-inline-item" @click="takeColor">
                    <a
                      class="d-block swatches-item"
                      data-var="green"
                      style="background-color: #9ec8bb"
                    >
                    </a>
                  </li>
                </ul> -->
              <select
                name="swatches"
                class="form-select swatches-select d-none"
                aria-label="Default select example"
              >
                <option selected="" value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div class="row align-items-end no-gutters mx-n2">
              <div class="form-group px-2 mb-6">
                <label
                  class="fs-16 font-weight-bold mb-3 quality_title"
                  for="number"
                  >Quantity:
                </label>
                <div class="d-flex quality_resp w-100">
                  <div
                    class="col-sm-3 control_quality d-flex justify-content-between"
                  >
                    <a href="#" class="pl-2 z-index-2">
                      <font-awesome-icon :icon="['fas', 'fa-minus']" />
                    </a>
                    {{ quality }}
                    <a href="#" class="up pr-2 z-index-2">
                      <font-awesome-icon :icon="['fas', 'fa-plus']" />
                    </a>
                  </div>
                  <div class="col-sm-9 ml-2">
                    <button type="submit" class="btn btn-block">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p class="border-bottom pb-4 mb-4 d-flex">
              <span class="d-inline-block mr-2 fs-14">
                <font-awesome-icon :icon="['fas', 'fa-truck-fast']" />
              </span>
              <span class="fs-15 px-3"
                >Get it between Aug 11, 2020 - Aug 18, 2020</span
              >
            </p>
          </form>
          <div class="d-flex align-items-center flex-wrap mt-6">
            <a
              href="#"
              class="text-uppercase font-weight-bold letter-spacing-05 fs-14 mr-6"
            >
              <!-- <font-awesome-icon
                class="mr-3 card_icons"
                icon="fa-solid fa-shuffle"
              /> -->
              <span class="ml-1 compare">Compare</span>
            </a>
            <!-- <a
                href="#"
                class="text-uppercase font-weight-bold letter-spacing-05 fs-14"
              >
                <font-awesome-icon
                  class="mx-3 card_icons"
                  icon="fa-regular fa-heart"
                />
                <span class="ml-1 compare">Add to wishlist</span>
              </a> -->
          </div>
          <ul class="list-unstyled mt-5">
            <li class="row mb-2">
              <span class="d-block col-3 font-weight-500 fs-15"
                >Call Back:
              </span>
              <span class="d-block col-9 fs-15 color-gray"
                ><p class="mx-3 nav-phone">
                  <font-awesome-icon :icon="['fas', 'fa-phone']" />
                  +998 99 730 14 99
                </p></span
              >
            </li>
            <!-- <li class="row mb-2">
                <span class="d-block col-3 font-weight-500 fs-15"
                  >Categories:</span
                >
                <span class="d-block col-9 fs-15 color-gray"
                  >Sweaters, Clothing</span
                >
              </li> -->
            <!-- <li class="row mb-2 flex-row">
                <span class="d-block col-3 font-weight-500 fs-15">Share:</span>
                <div class="d-flex col-9">
                  <a href="#" class="mr-4">
                    <font-awesome-icon
                      style="font-size: 20px"
                      class="i_body_icon"
                      icon="fa-brands  fa-facebook-f mx-2"
                    />
                  </a>
                  <a href="#" class="mr-4">
                    <font-awesome-icon
                      style="font-size: 20px"
                      class="i_body_icon"
                      icon="fa-brands  fa-pinterest-p mx-2"
                    />
                  </a>
                  <a href="#" class="mr-4">
                    <font-awesome-icon
                      style="font-size: 20px"
                      class="i_body_icon"
                      icon="fa-brands fa-instagram"
                    />
                  </a>
                  <a href="#" class="mr-4">
                    <font-awesome-icon
                      style="font-size: 20px"
                      class="i_body_icon"
                      icon="fa-brands  fa-twitter"
                    />
                  </a>
                </div>
              </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <InformationTab />
    </div>
  </div>
</template>
<script>
  // import InformationTab from "./InformationTab.vue";

  export default {
  props: ["product"],
  data() {
    return {
      quality: 1,
      info: this.product.info.ru,
      value: 3.7,
    };
  },
  components: {
    //   InformationTab,
  },
  methods: {
    takeColor(e) {
      const take = document.querySelectorAll(".list-inline-item");
      take.forEach((item) => {
        item.classList.remove("selected");
      });
      e.target.className === "list-inline-item"
        ? e.target.classList.add("selected")
        : e.target.parentNode.classList.add("selected");
    },
  },
};
</script>
<style lang="css">
.product_info_img {
  width: 100%;
}
.body_type {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px !important;
}
@media (min-width: 992px) {
  .fs-lg-40 {
    font-size: 40px !important;
  }
}
.fs-30 {
  font-size: 30px !important;
}
.body_title {
  font-weight: 600;
  line-height: 1.25;
  color: #000;
  font-family: "Poppins", sans-serif;
}
.letter-spacing-05 {
  letter-spacing: 0.5px !important;
}
.fs-20 {
  font-size: 20px !important;
}
.body_price {
  color: #000 !important;
  font-size: 20px !important;
}
.see_reviews {
  line-height: 1 !important;
  font-size: 15px !important;
  color: #000 !important;
  /* padding-left: 1.25rem !important; */
}
.see_reviews span {
  border-right: 1px solid #e4e4e4 !important;
  padding-right: 5px;
  margin-right: 5px;
}
.see_reviews a {
  color: #000 !important;
}
.reyt_star {
  font-size: 12px !important;
  margin-right: 2px;
}
.body_card_info {
  color: #777 !important;
  font-family: "Poppins", sans-serif;
}
@media (min-width: 768px) {
  .pl-md-6,
  .px-md-6 {
    padding-left: 1.875rem !important;
  }
  .mr-40 {
    margin-left: 60px;
  }
}
.img_catchap {
  border: 1px solid #e4e4e4 !important;
  margin-bottom: 2.5rem !important;
}
.color_title span:first-child,
.quality_title {
  font-weight: 700 !important;
  color: #000 !important;
  font-family: "Poppins", sans-serif;
  font-size: 16px !important;
}
.color_title span:last-child {
  font-weight: 400 !important;
  color: #000 !important;
  font-family: "Poppins", sans-serif;
  font-size: 16px !important;
  margin-left: 4px;
}

.shop-swatch .list-inline-item.selected,
.shop-swatch .list-inline-item:hover {
  border-color: #000;
}

.shop-swatch .list-inline-item {
  border-radius: 50%;
  border: 1px solid transparent;
  transition: all 0.2s;
  padding: 4px;
  margin-right: 5px;
}
.list-inline-item {
  display: inline-block;
}
.shop-swatch .swatches-item {
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
.control_quality {
  display: flex;
  align-items: center;
  min-width: 100px;
  height: 45px;
  padding: 0.71875rem 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d2d2d2;
  border-radius: 0;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.ml-2 {
  margin-left: 8px !important;
}
@media (max-width: 768px) {
  .control_quality {
    width: 100%;
    margin-bottom: 30px;
  }
  .quality_resp {
    flex-direction: column;
  }
}
.control_quality a {
  color: #000 !important;
}
.btn-block {
  color: #fff !important;
  background-color: #000 !important;
  border-color: #000 !important;
  box-shadow: none;
  border-radius: 0 !important;
  height: 100% !important;
  width: 100% !important;
  letter-spacing: 0.5px !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
}
.compare {
  font-weight: 700 !important;
  font-size: 14px !important;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.5px !important;
  color: #000;
  text-decoration: none !important  ;
}
.mr-3 {
  margin-right: 1rem !important;
}
.i_body_icon {
  color: #666 !important;
  font-weight: 400;
  font-size: 14px !important;
}
.font-weight-500 {
  font-weight: 500 !important;
  font-family: "Poppins", sans-serif;
}

.fs-15 {
  font-size: 15px !important;
}

.mr-4 {
  margin-right: 1.5rem !important;
}
.content-right {
  position: sticky;
  top: 100px;
}
.card_icons {
  color: #000 !important;
}
@media (min-width: 992px) {
  .pb-6 {
    padding-bottom: 6.875rem !important;
  }
}
</style>
