<template lang="html">
  <div class="team-card">
    <div class="team-card-img d-flex justify-content-center">
      <div class="t-img">
        <img :src="team.lg_img" alt="" />
      </div>
    </div>
    <div class="team-card-body d-flex justify-content-center flex-column">
      <div class="team-card-name d-flex justify-content-center mt-4">
        <h5>{{ team.name.ru }}</h5>
      </div>
      <div class="team-card-position d-flex justify-content-center mt-4">
        <p>
          {{ team.position.ru }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["team"],
};
</script>
<style lang="css">
.team-card-img {
}
.t-img {
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1/1;
  height: 130px;
  transition: 0.5s;
  flex-shrink: 0;
}
.t-img img {
  width: auto;
  height: 100%;
  object-fit: cover !important;
  max-width: 100%;
  flex-shrink: 0;
}
.team-card-name h5 {
  font-size: 20px;
  font-family: "Poppins", sans-serif;
}
.team-card-position p {
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #777;
}
.team-card {
  cursor: pointer;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
