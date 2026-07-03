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

  <section class="compliance">
    <div class="compliance__inner">
      <h2>Compliance with Amazon Policies</h2>
      <p>
        Oulingju is an independent software provider for Amazon Selling Partners. Our products and
        services are analytics and operational tools only, and they fully comply with the Amazon
        Services Business Solutions Agreement, the Selling Partner API Acceptable Use Policy
        (including sections 4.4 and 4.5) and the Data Protection Policy.
      </p>
      <ul>
        <li>
          We never solicit, incentivize, or attempt to influence or inflate buyer reviews, feedback
          or ratings.
        </li>
        <li>
          We never contact buyers outside of Amazon's approved Buyer-Seller Messaging service, and
          only for legitimate order fulfillment and customer service — never for marketing.
        </li>
        <li>
          Amazon information is used solely to provide these services to the authorizing seller, and
          is never sold or shared with unauthorized third parties.
        </li>
        <li>
          We do not offer, describe, or promote any method of circumventing Amazon policies.
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.compliance {
  background: rgb(248, 249, 255);
  border-top: 1px solid var(--el-border-color, #e5e7eb);
}

.compliance__inner {
  max-width: 60em;
  margin: 0 auto;
  padding: 3rem 1.5rem 3.5rem;
}

.compliance__inner h2 {
  font-size: 1.75rem;
  line-height: 2.25rem;
  margin-bottom: 1rem;
}

.compliance__inner p {
  font-size: 1rem;
  line-height: 1.75rem;
  color: #4b5563;
  margin-bottom: 1.25rem;
}

.compliance__inner ul {
  margin: 0;
  padding-left: 1.25rem;
}

.compliance__inner li {
  font-size: 0.9375rem;
  line-height: 1.65rem;
  color: #4b5563;
  margin-bottom: 0.625rem;
}
</style>