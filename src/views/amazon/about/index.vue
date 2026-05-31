<route>
{
  meta: {
    title: 'about us'
  }
}
</route>

<script setup lang="ts">
import PicText from "@/components/pic-text/index.vue";

</script>

<template>
  <pic-text
      index=0
      url="about-us.png"
      title="About US">
    Our journey began several years ago with a passion to create high-quality and innovative solutions. We has
    since evolved into a renowned enterprise, serving diverse industries with our exceptional range of products.
    <br/>
    <br/>
    We take great pride in our commitment to quality. From the initial stage of product development to the final product
    distribution, We adheres to rigorous quality control measures. We continually invest in advanced technology
    and research to ensure that our products are of the highest standard.
  </pic-text>
  <pic-text
      index=1
      url="price.png"
      title="&nbsp; &nbsp;Price">
    &nbsp; &nbsp;Choose the Right Plan For You
    <br>
    &nbsp; &nbsp;Give you no-fuss, transparent pricing.
    <br>
    <br>
    &nbsp; &nbsp;Find a plan that best matches the scale you need for you.
  </pic-text>
  <pic-text
      index=2
      url="contact-us.png"
      title="Contact us">
    Tel: 400-800-998 to 1
    <br/>
    Email: tech@oulingju.store
    <br/>
    Email: yalong@oulingju.store
  </pic-text>
</template>

<style scoped>
</style>