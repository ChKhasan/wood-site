<template lang="html">
  <div class="">
    <BreadCrumbComp category="Пост" />
    <div class="container container-xxl pt-10 mb-5 post-transition">
      <div v-if="usePN" class="row">
        <div class="col-12 d-flex justify-content-center flex-column">
          <p class="post-date">{{ `${monthNames[month]} ${date}, ${year}` }}</p>
          <h1 class="post-title mb-5">{{ thePost.title[getLang] }}</h1>
          <div class="mb-5 d-flex justify-content-center mt-5">
            <img
              class="post-banner"
              style="width: 100%"
              :src="thePost.post_images[0].lg_img"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="row" v-else>
        <div class="col-12 d-flex justify-content-center flex-column">
          <p class="post-date">APRIL 24, 2019</p>
          <h1 class="post-title mb-5">{{ thisPost.title[getLang] }}</h1>
          <div class="mb-5 d-flex justify-content-center mt-5">
            <img
              class="post-banner"
              style="width: 100%"
              :src="thisPost.post_images[0].lg_img"
              alt=""
            />
          </div>
        </div>
      </div>

      <div v-if="usePN" class="row justify-content-center">
        <div class="col-lg-9">
          <p class="post-subtitle">{{ thePost.subtitle[getLang] }}</p>
        </div>
        <div class="col-lg-9">
          <p class="post-description" v-html="thePost.desc[getLang]"></p>
          <PostMessenger />
        </div>
      </div>

      <div v-else class="row justify-content-center">
        <div class="col-lg-9">
          <p class="post-subtitle">{{ thePost.subtitle[getLang] }}</p>
        </div>
        <div class="col-lg-9">
          <p class="post-description" v-html="thisPost.desc[getLang]"></p>
          <PostMessenger />
        </div>
      </div>
    </div>
    <div
      class="container-fluid"
      style="border-bottom: 1px solid #e4e4e4 !important"
    ></div>
    <div class="container container mt-15 mb-5">
      <div class="row justify-content-center">
        <div
          v-if="usePN"
          class="col-lg-9 d-flex flex-wrap justify-content-between"
        >
          <div class="col-lg-6 mt-4">
            <div
              v-if="thePrevPost"
              @click="prevPost(thePrevPost.slug)"
              class="previous-card d-flex align-items-center"
            >
              <div class="pre-btn">
                <font-awesome-icon :icon="['fas', 'fa-arrow-left']" />
              </div>
              <div class="pre-img mx-3">
                <div
                  class="prev-next-img"
                  :style="{
                    'background-image': `url(${thePrevPost.post_images[0].lg_img})`,
                  }"
                ></div>
              </div>
              <div class="pre-title">
                <p>PREVIOUS</p>
                <a href="">{{ thePrevPost.title[getLang] }}</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-4">
            <div
              v-if="theNextPost"
              @click="nextPost(theNextPost.slug)"
              class="next-card d-flex align-items-center justify-content-end"
            >
              <div class="next-title">
                <p>NEXT</p>
                <a href="">{{ theNextPost.title[getLang] }}</a>
              </div>
              <div class="next-img mx-3">
                <!-- <img
                    style="width: 70px"
                    :src="theNextPost.post_images[0].lg_img"
                    alt=""
                  /> -->
                <div
                  class="prev-next-img"
                  :style="{
                    'background-image': `url(${theNextPost.post_images[0].lg_img})`,
                  }"
                ></div>
              </div>
              <div class="next-btn">
                <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
              </div>
            </div>
          </div>
        </div>

        <div v-else class="col-lg-9 d-flex justify-content-between">
          <div class="col-lg-6 mt-4">
            <div
              v-if="thisPrevPost"
              @click="prevPost(thisPrevPost.slug)"
              class="previous-card d-flex align-items-center"
            >
              <div class="pre-btn">
                <font-awesome-icon :icon="['fas', 'fa-arrow-left']" />
              </div>
              <div class="pre-img mx-3">
                <!-- <img
                    style="width: 70px"
                    :src="thisPrevPost.post_images[0].lg_img"
                    alt=""
                  /> -->
                <div
                  class="prev-next-img"
                  :style="{
                    'background-image': `url(${thisPrevPost.post_images[0].lg_img})`,
                  }"
                ></div>
              </div>
              <div class="pre-title">
                <p>PREVIOUS</p>
                <a href="">{{ thisPrevPost.title.ru }}</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-4">
            <div
              v-if="thisNextPost"
              @click="nextPost(thisNextPost.slug)"
              class="next-card d-flex align-items-center justify-content-end"
            >
              <div class="next-title">
                <p>NEXT</p>
                <a href="">{{ thisNextPost.title.ru }}</a>
              </div>
              <div class="next-img mx-3">
                <!-- <img
                    style="width: 70px"
                    :src="thisNextPost.post_images[0].lg_img"
                    alt=""
                  /> -->
                <div
                  class="prev-next-img"
                  :style="{
                    'background-image': `url(${thisNextPost.post_images[0].lg_img})`,
                  }"
                ></div>
              </div>
              <div class="next-btn">
                <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 mb-5">
        <div class="col-12">
          <TitleComp title="Недавние Посты" />
          <JournalComp :posts="this.posts" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleComp from "~/components/TitleComp.vue";
import LayoutComp from "~/layouts/default.vue";
import BreadCrumbComp from "~/components/BreadCrumbComp.vue";
import PostMessenger from "../../components/Posts/postMessenger.vue";
import JournalComp from "../../components/Home/NewPosts.vue";

export default {
  data() {
    return {
      posts: [],
      thisPost: {},
      thisPrevPost: {},
      thisNextPost: {},
      usePN: true,
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      month: null,
      date: null,
      year: null,
    };
  },
  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
  methods: {
    async getDate() {
      let params = this.$route.params.index;
      const thePost = await this.$store.dispatch(
        `posts/fetchPostBySlug`,
        params
      );
      const event = new Date(thePost.created_at);
      this.month = event.getMonth();
      this.date = event.getDate();
      this.year = event.getFullYear();
    },
    async prevPost(slug) {
      const posts = await this.$store.dispatch(`posts/fetchPosts`);
      const thePost = await this.$store.dispatch(`posts/fetchPostBySlug`, slug);
      this.$router.replace({
        path: `/post/${slug}`,
      });
      this.thisPost = thePost;

      let thisPrevPost = posts.filter((item) => item.id == thePost.id + 1)[0];
      let thisNextPost = posts.filter((item) => item.id == thePost.id - 1)[0];

      this.thisPrevPost = thisPrevPost;
      this.thisNextPost = thisNextPost;

      this.usePN = false;
    },

    async nextPost(slug) {
      const thePost = await this.$store.dispatch(`posts/fetchPostBySlug`, slug);
      const posts = await this.$store.dispatch(`posts/fetchPosts`);
      this.$router.replace({
        path: `/post/${slug}`,
      });
      this.thisPost = thePost;

      let thisPrevPost = posts.filter((item) => item.id == thePost.id + 1)[0];
      let thisNextPost = posts.filter((item) => item.id == thePost.id - 1)[0];

      this.thisPrevPost = thisPrevPost;
      this.thisNextPost = thisNextPost;

      this.usePN = false;
    },
  },
  async asyncData({ $axios, params, store }) {
    const thePost = await $axios.$get(`/posts/${params.index}`);
    const posts = await store.dispatch(`posts/fetchPosts`);
    const indexItem = posts.findIndex((item) => item.id == thePost.data.id);
    const thePrevPost = posts.filter(
      (item, index) => index == indexItem - 1
    )[0];
    const theNextPost = posts.filter(
      (item, index) => index == indexItem + 1
    )[0];

    return {
      thePost: thePost.data,
      thePrevPost: thePrevPost,
      theNextPost: theNextPost,
    };
  },
  async mounted() {
    this.getDate();
    const posts = await this.$store.dispatch("posts/fetchPostsPaginate", 3);
    const getThisPost = await this.$store.dispatch(
      "posts/fetchPostBySlug",
      this.$route.params.index
    );

    this.thePost = getThisPost;
    this.posts = posts;
  },

  components: {
    TitleComp,
    LayoutComp,
    BreadCrumbComp,
    PostMessenger,
    JournalComp,
  },
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
  margin-bottom: 3.125rem !important;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.63;
  color: #777;
  text-align: left;
}
.post-subtitle {
  font-weight: 500 !important;
  font-weight: 500 !important;
}
.pre-title p,
.next-title p {
  margin-bottom: 0 !important;
}
.mt-15 {
  padding-top: 10px !important;
}
.next-title p,
.next-title a {
  text-align: right;
}
.next-img img,
.pre-img img {
  cursor: pointer;
}
.next-title a,
.pre-title a {
  font-weight: 700 !important;
  transition: all 0.2s;
  color: #000;
  text-decoration: none;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}
.next-title p,
.pre-title p {
  font-weight: 500 !important;
  letter-spacing: 0.5px !important;
  line-height: 1.2 !important;
  font-size: 12px !important;
  color: #999 !important;
  text-transform: uppercase !important;
  margin-bottom: 0.3125rem !important;
  font-family: "Poppins", sans-serif;
}
.previous-card {
  border-right: 1px;
  cursor: pointer;
}

.next-card {
  cursor: pointer;
}

@media (min-width: 576px) {
  .previous-card {
    border-right: 1px solid #e4e4e4 !important;
  }
}
.prev-next-img {
  width: 70px;
  height: 45px;
  background-origin: inherit;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.post-transition {
  transition: 0.5s;
}
.post-banner {
  /* height: 100%;
  object-fit: cover; */
}
</style>
