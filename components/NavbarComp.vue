<template lang="html">
  <div class="sticky-area" id="container">
    <div class="container-fluid" id="bg-white">
      <div class="container_block container-xxl">
        <div class="row d-none d-xl-flex">
          <div class="col-2 d-flex align-items-center">
            <div class="position-relative">
              <a
                href="#search-popup"
                data-gtf-mfp="true"
                class="nav-search d-flex align-items-center"
              >
                <!-- <i style="font-size: 12px" class="el-icon-search"> </i> -->
                <font-awesome-icon :icon="['fas', 'fa-magnifying-glass']" />

                <span class="d-none d-xl-inline-block mx-2 font-weight-500">
                  Search
                </span>
              </a>
            </div>
          </div>
          <div
            class="col-8 d-flex py-xl-3 justify-content-between align-items-center justify-content-center"
          >
            <!-- <nuxt-link ></nuxt-link> -->
            <nuxt-link to="/" class="dropdown_btn">
              <span class="dropdown_hover" id="hover"> Главный </span>
            </nuxt-link>
            <nuxt-link to="/categories" class="dropdown_btn">
              <span class="dropdown_hover" id="hover"> Каталог </span>
            </nuxt-link>

            <nuxt-link to="/" class="navbar-brand">
              <img src="../static/images/logo.png" alt="" />
            </nuxt-link>

            <div class="dropdown_btn">
              <span class="dropdown_hover" id="hover"> Контакт </span>
            </div>
            <div class="dropdown_btn">
              <span class="dropdown_hover" id="hover"> О компании </span>
            </div>
          </div>
          <div class="col-2 d-flex align-items-center justify-content-end">
            <font-awesome-icon :icon="['fas', 'fa-phone']" />

            <!-- <b-button
              class="navbar-toggler border-0 px-0 canvas-toggle"
              v-b-toggle.sidebar-1
            >
           </b-button> -->
            <a href="tel:+998997301499" class="mx-3 nav-phone"
              >+998 99 730 14 99</a
            >
            <!-- <font-awesome-icon class="mx-3" icon="fa-regular fa-user" />
              <div class="badge_box mx-3">
                <span class="badge_abs">0</span>
  
                <font-awesome-icon icon="fa-regular fa-heart" />
              </div>
              <div class="badge_box mx-3">
                <span class="badge_abs">0</span>
                <font-awesome-icon class="" icon="fa-solid fa-basket-shopping" />
              </div> -->
          </div>
        </div>

        <div class="d-flex align-items-center d-xl-none py-3">
          <div class="col-2">
            <button
              class="navbar-toggler border-0 px-0 canvas-toggle"
              v-b-toggle.sidebar-1
            >
              <span class="fs-24 toggle-icon"></span>
            </button>
            <b-sidebar id="sidebar-1" title="" shadow>
              <img
                src="@/static/images/short_logo.png"
                class="sidebar-logo"
                alt=""
              />
              <div class="px-3 py-2 sidebar-body">
                <ul class="">
                  <li class="mt-5">
                    <nuxt-link to="/">Главный</nuxt-link>
                  </li>
                  <li class="mt-5">
                    <nuxt-link to="/categories">Каталог</nuxt-link>
                  </li>
                  <li class="mt-5">
                    <nuxt-link to="/">Контакт</nuxt-link>
                  </li>
                  <li class="mt-5">
                    <nuxt-link to="/">О компании</nuxt-link>
                  </li>
                </ul>
              </div>
            </b-sidebar>
          </div>
          <div class="d-flex justify-content-center col-8">
            <a href="" class="navbar-brand">
              <img src="../static/images/logo.png" alt="" />
            </a>
          </div>
          <div class="col-2 d-flex justify-content-end">
            <a href="#" class="nav-search d-flex align-items-center">
              <font-awesome-icon :icon="['fas', 'fa-magnifying-glass']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "data-center",
  data() {
    return {
      open: true,
      drawer: false,
    };
  },
  components: {},
  methods: {
    toggle() {
      this.open = !this.open;
    },
    func() {
      var container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
      console.log(container.scrollHeight);
    },
  },
  mounted() {
    var header = document.querySelector("#container");
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.style.top = "-128px";
        header.style.background = "transparent";
      } else if (document.documentElement.scrollTop == 0) {
        header.style.boxShadow = "none";
        header.style.background = "transparent";
      } else {
        header.style.top = "0";
        header.style.boxShadow = " 0 0.5rem 1rem rgb(0 0 0 / 15%)";
        header.style.background = "#fff";
      }
      lastScrollTop = scrollTop;
    });
  },
};
</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&family=Philosopher:wght@700&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,800;1,100&family=Roboto&display=swap");

.badge_box {
  position: relative;
}
.badge_abs {
  position: absolute;
  top: -12px;
  right: -10px;
  line-height: 26px;
  font-weight: 600;
}
.el-badge__content {
  font-size: 20px !important;
}
.dropdown_btn {
  position: relative;
  transition: 2s;
}
.dropdown_hover {
  cursor: pointer;
  transition: 1s;
}
.dropdown_hover:hover + .dropdown-bottom {
  top: 100%;
  display: flex;
  opacity: 1;
}
.dropdown_item {
  display: flex;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400 !important;
  color: #000;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  font-family: "Poppins", sans-serif;
}
.dropdown-bottom {
  position: absolute;
  background: white;
  /* bottom: -170px; */
  top: 150%;

  z-index: 1000 !important;
  display: none;
  /* top: 100%; */
  transition: 0.2s !important;
  opacity: 0;
  z-index: 1000;

  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #777;

  background-color: #fff;

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 18%);
}
a {
  color: #000 !important;
  text-decoration: none;
  background-color: transparent;
  text-decoration: none !important;
  font-size: 1rem !important;
  font-weight: 600;
}
ul {
  /* display: flex; */
  list-style: none;
  margin-bottom: 0 !important;
  padding-left: 0 !important;
}
.el-dropdown-link,
.dropdown_hover {
  font-weight: 600 !important;
  font-size: 1rem !important;
  line-height: 26px;
  color: #000 !important;
  font-family: "Poppins", sans-serif !important;
}

.navbar-brand {
  max-width: 177px;
  display: block;
  position: relative;
}
.navbar-brand img {
  max-width: 100%;
}
.sticky-area {
  transition: all 0.5s !important;
  height: auto;
  background-color: transparent;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2000 !important;
  /* transition: 1.5s; */
  /* background: transparent !important; */
}

.toggle-icon {
  bottom: 0;
  display: block;
  height: 2px;
  left: 2px;
  right: 0;
  margin: auto;
  position: absolute;
  top: 0;
  transition: all 0.3s;
  background-color: black !important;
}
.navbar-light .navbar-toggler {
  color: #000;
  border-color: rgba(0, 0, 0, 0.1);
}
.toggle-icon::before {
  content: "";
  position: absolute;
  width: 18px;
  left: -6px;
  top: 8px;
}
.toggle-icon::after {
  top: -8px;
  left: -9px;
  width: 15px;
}
.toggle-icon::before,
.toggle-icon::after {
  content: "";
  height: 2px;
  left: 0;
  /* margin: auto; */
  position: absolute;
  right: 0;
  transition: top 0.3s ease-in-out, background 0.3s,
    -webkit-transform 0.3s ease-in-out;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out, background 0.3s;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out, background 0.3s,
    -webkit-transform 0.3s ease-in-out;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  background-color: black !important;
}
.navbar-toggler,
.toggle-bar {
  width: 28px;
  height: 28px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0;
}
.el-badge__content {
  border: none !important;
  font-size: 16px !important;
  font-weight: 700 !important;
}
.nav-phone {
  font-family: "Poppins", sans-serif;
  margin-bottom: 0 !important;
  font-weight: 500 !important;
  font-size: 13px !important;
}
.navbar-toggler:active {
  border: 0 !important;
  outline: 0 !important;
}
.b-sidebar {
  background: #fff !important;
}
.sidebar-logo {
  position: absolute;
  left: 50px;
  top: 24px;
  width: 52px;
}
.sidebar-body {
  padding-left: 50px !important;
  padding-right: 50px !important;
}


.b-sidebar .b-sidebar-header {
  padding: 24px 50px !important;
  margin-top: 50px !important;
}
</style>
