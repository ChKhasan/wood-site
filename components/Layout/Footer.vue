<template lang="html">
  <div class="container-fluid bg-color py-5">
    <div class="container container-xl footer_comp">
      <div class="row">
        <div class="col-lg mb-6 mb-lg-0">
          <div class="footer_logo">
            <nuxt-link to="" class="navbar-brand">
              <img :src="siteInfo.lg_logo_path" alt="" />
            </nuxt-link>
          </div>
        </div>
        <div class="col-sm-6 col-lg mb-6 mb-lg-0">
          <ul class="list-unstyled mb-0 mt-2">
            <li>
              <h3
                class="fs-14 mb-3 text-uppercase footer-link-title letter-spacing-05"
              >
                {{
                  footerLang.menu[getLang]
                    ? footerLang.menu[getLang]
                    : footerLang.menu.ru
                }}
              </h3>
            </li>

            <li class="py-0">
              <nuxt-link to="/" class="lh-225 footer-links">{{
                footerLang.home[getLang]
                  ? footerLang.home[getLang]
                  : footerLang.home.ru
              }}</nuxt-link>
            </li>
            <li class="py-0">
              <nuxt-link to="/products?page=1" class="lh-225 footer-links"
                >{{
                  footerLang.category[getLang]
                    ? footerLang.category[getLang]
                    : footerLang.category.ru
                }}
              </nuxt-link>
            </li>
            <li class="py-0">
              <nuxt-link to="/contact" class="lh-225 footer-links">{{
                footerLang.contact[getLang]
                  ? footerLang.contact[getLang]
                  : footerLang.contact.ru
              }}</nuxt-link>
            </li>
            <li class="py-0">
              <nuxt-link
                to="/post-categories/1/posts?page=1"
                class="lh-225 footer-links"
                >{{
                  footerLang.posts[getLang]
                    ? footerLang.posts[getLang]
                    : footerLang.posts.ru
                }}</nuxt-link
              >
            </li>

            <li class="py-0">
              <nuxt-link to="/company" class="lh-225 footer-links">{{
                footerLang.company[getLang]
                  ? footerLang.company[getLang]
                  : footerLang.company.ru
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg mb-6 mb-lg-0">
          <ul class="list-unstyled mb-0 mt-2">
            <li>
              <h3
                class="fs-14 mb-3 text-uppercase footer-link-title letter-spacing-05"
              >
                {{
                  footerLang.categories[getLang]
                    ? footerLang.categories[getLang]
                    : footerLang.categories.ru
                }}
              </h3>
            </li>

            <li class="py-0" v-for="item in categories">
              <nuxt-link
                :key="item.id"
                :to="`/categories/${item.id}/products?page=1`"
                class="lh-225 footer-links"
                >{{
                  item.title[getLang] ? item.title[getLang] : item.title.ru
                }}</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg mb-6 mb-lg-0"></div>
        <div class="col-sm-6 col-lg mb-6 mb-lg-0">
          <div class="brands_block d-flex">
            <a :href="siteInfo.facebook">
              <font-awesome-icon
                style="font-size: 20px"
                :icon="['fab', 'fa-facebook-f']"
              />
            </a>
            <a :href="siteInfo.telegram">
              <font-awesome-icon
                style="font-size: 20px"
                icon="fa-brands footer_icon fa-telegram"
              />
            </a>
            <a :href="siteInfo.instagram">
              <font-awesome-icon
                style="font-size: 20px"
                icon="fa-brands footer_icon fa-instagram"
              />
            </a>
            <a :href="siteInfo.youtube">
              <font-awesome-icon
                style="font-size: 20px"
                icon="fa-brands footer_icon fa-youtube"
              />
            </a>
          </div>

          <p
            class="mb-0 text-gray text-lg-right footer-links"
            v-if="siteInfo && siteInfo.title"
          >
            © {{ year }}
            {{
              siteInfo.title[getLang]
                ? siteInfo.title[getLang]
                : siteInfo.title.ru
            }}
            .<br />
            {{
              footerLang.security[getLang]
                ? footerLang.security[getLang]
                : footerLang.security.ru
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer-comp",
  props: ["siteInfo", "categories"],
  data() {
    return {
      year: new Date().getFullYear(),
      footerLang: {
        menu: {
          ru: "МЕНЮ",
          uz: "MENYU",
        },
        home: {
          ru: "Главный",
          uz: "Asosiy",
        },
        category: {
          ru: "Каталог",
          uz: "Katalog",
        },
        company: {
          ru: "О компании",
          uz: "Kompaniya haqida",
        },
        contact: {
          ru: "Контакт",
          uz: "Aloqa",
        },
        posts: {
          ru: "Посты",
          uz: "Xabarlar",
        },
        categories: {
          ru: "КАТЕГОРИИ",
          uz: "KATEGORIYALAR",
        },
        security: {
          ru: "Все права защищены.",
          uz: "Barcha huquqlar himoyalangan.",
        },
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
.bg-color {
  background-color: #f6f6f6 !important;
}
.brands_block {
  justify-content: start;
}
.footer_logo {
  max-width: 164px;
}
.mb-6,
.my-6 {
  margin-bottom: 1.875rem !important;
}
.footer_logo img {
  width: 100%;
}

.brands_block a {
  margin-right: 1.5rem;
  line-height: 40px !important;
  color: #000 !important;
}
.footer_icon {
  font-size: 40px !important;
}
.text-gray {
  color: #7c7c7c !important;
}
.footer-links {
  font-weight: 500 !important;
}

@media (min-width: 992px) {
  .brands_block {
    justify-content: end;
  }
  .text-lg-right {
    text-align: right;
  }
}
.footer-links {
  font-weight: 500 !important;
  font-family: "Montserrat", sans-serif !important;
  line-height: 2 !important;
  color: #7c7c7c !important;
  transition: all 0.2s;
  font-size: 1rem;
}
.footer-links:hover {
  color: #000 !important;
}
.en-link {
  font-weight: 500 !important;
}
.footer-link-title {
  letter-spacing: 0.5px !important;
  font-size: 14px !important;
  text-transform: uppercase !important;
  font-family: "Montserrat", sans-serif !important;

  font-weight: 700 !important;
  line-height: 1.25;
  color: #000;
}
</style>
