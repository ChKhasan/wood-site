<template lang="html">
    <div class="j-card-btn">
      <a href="">{{name}}</a>
    </div>
</template>
<script>
export default {
props: ["name"]
}
</script>
<style lang="css">
.j-card-btn a{
border-color: rgba(0,0,0,.11)!important;
font-size: 14px!important;
border-bottom: 1px solid #e4e4e4!important;

font-weight: 600 !important;
text-transform: uppercase!important;
font-family: "Poppins",sans-serif;
transition: .4s;
}
.j-card-btn a:hover {
border-bottom: 1px solid #000!important;
}
</style>