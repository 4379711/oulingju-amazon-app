<route>
{
meta: {
title: 'home'
}
}
</route>
<script setup lang="ts">


import PicText from "@/components/pic-text/index.vue";
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__inner">
      <h1>Data-Driven Analytics &amp; Operations for Amazon Selling Partners</h1>
      <p>
        Oulingju is a software platform that helps Amazon sellers turn their own store data into
        actionable insight. We bring together brand, traffic and advertising analytics with
        financial, supply-chain and day-to-day operations management — all within Amazon's policies —
        so sellers can grow their business with confidence from a single, data-driven workspace.
      </p>
    </div>
  </section>

  <pic-text
      index=1
      url="advertising-management.png"
      title="Advertising Manager">
    Offers a one-stop solution for advertising operations and covers all advertising types such as SP,SB,SD and SBV. It will be more quicker and more simpler to manage the ads campaign efficiently, and the seller would provided a high-level oversight, insight…Automatically executes advertising preset tasks, and maximizes the effectiveness of advertising.
  </pic-text>
  <pic-text
      index=2
      url="brand-analysis.png"
      title="Brand analysis">
    Based on the big data analysis system and AI intelligent analysis, it provides multi-perspective visual brand analysis. Such as search word frequency analysis, search click conversion share analysis, competitive product comparison, and discover more cross-selling and bundling sales opportunities.
  </pic-text>
  <pic-text
      index=3
      url="fbm.png"
      title="FBM">
    Multiple stores automatically export and summarize orders synchronously, connecting inventory data for arrangement of shipments. Connects with Yuntu, Yanwen, 4PX, SF International, and other well-known logistics service provider systems, offering one-click logistics order placement.
  </pic-text>
  <pic-text
      index=4
      url="financial-management.png"
      title="Financial management">
    Profit reports integrate precise analysis of more than 10 original reports, providing more than 50 analysis dimensions, and calculating global batch profits. Our ERP supports variance allocation, profit data provided is sealed on a monthly basis to facilitate financial accounting.
  </pic-text>
  <pic-text
      index=5
      url="listing.png"
      title="Listing Management">
    The system automatically updates the latest commodity information and data, and realizes multi-site one-stop price and inventory change in ERP to improve operational efficiency. Support automatic price adjustment operation, such as automatic selling and regular price adjustment. According to the MSKU match operations lead, view the operator responsible for commodity performance data.
  </pic-text>
  <pic-text
      index=6
      url="custom-service-mgt.png"
      title="Customer Service Analytics">
    Consolidates buyer inquiries received through Amazon's Buyer-Seller Messaging into a single workspace, helping sellers reply promptly to order and after-sales questions in full compliance with Amazon policies. Provides service analytics such as response time, resolution rate and satisfaction trends across multiple stores, and proactively alerts sellers to store performance anomalies. Buyer-Seller Messaging is used only for legitimate order fulfillment and customer service — never for marketing, and never to solicit or influence reviews, feedback or ratings.
  </pic-text>

</template>

<style scoped>
.home-hero {
  background: linear-gradient(180deg, rgb(240, 244, 255) 0%, rgb(248, 249, 255) 100%);
}

.home-hero__inner {
  max-width: 60em;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: center;
}

.home-hero__inner h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  color: #111827;
}

.home-hero__inner p {
  font-size: 1.0625rem;
  line-height: 1.85rem;
  color: #4b5563;
}
</style>