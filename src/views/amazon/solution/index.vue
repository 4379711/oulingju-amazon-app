<route>
{
meta: {
title: 'solution'
}
}
</route>
<script setup lang="ts">
const solutionGroups = [
  {
    tag: 'Cumbersome operation?',
    title: 'Operation Efficiency',
    items: [
      {
        name: 'Listing Management',
        desc: 'One-stop management across multiple sites — update prices and inventory and keep listing information accurate to make daily operations simple and efficient.',
      },
      {
        name: 'Sales Monitoring',
        desc: 'Real-time monitoring of sales and price changes with historical trends and alerts, helping sellers adjust prices promptly to stay competitive and avoid losses.',
      },
      {
        name: 'Advertising Automation',
        desc: 'Automatically adjusts advertising according to preset business rules and schedules to improve working efficiency and overall campaign performance.',
      },
      {
        name: 'Traffic & Keyword Analysis',
        desc: 'Analyzes product traffic and buyer search terms to find conversion gaps and help sellers optimize keywords and improve listing conversion.',
      },
      {
        name: 'Review & Feedback Analysis',
        desc: 'Analyzes publicly available reviews and feedback to help sellers understand the buyer experience and improve product quality. Read-only analytics only — it never solicits, incentivizes or influences reviews or ratings.',
      },
    ],
  },
  {
    tag: 'Inventory backlog & warehouse complexity?',
    title: 'Inventory & Warehouse',
    items: [
      {
        name: 'Shipping Management',
        desc: 'Pre-logistics synchronization with a variety of picking methods and paperless warehouse operations that reduce real cost and improve efficiency.',
      },
      {
        name: 'Inventory Management',
        desc: 'Multi-warehouse, multi-dimensional inventory views with full adjustment records and flexible, faster stock transfers.',
      },
      {
        name: 'FBA Management',
        desc: 'A full FBA business loop — overseas-warehouse stocking allocation, cost allocation and inventory-dimension statistical reports with precise cost accounting.',
      },
      {
        name: 'Inter-warehouse Transfers',
        desc: 'Coordinate transfers across warehouses in real time with a variety of automatic cost-allocation methods to improve supply-chain accuracy.',
      },
    ],
  },
  {
    tag: 'Procurement not timely & high supply-chain cost?',
    title: 'Procurement & Supply Chain',
    items: [
      {
        name: 'Purchasing Suggestions',
        desc: 'Intelligent purchase-quantity prediction based on historical sales, in-transit stock, safety-stock days and lead time, with sales denoising to further improve accuracy.',
      },
      {
        name: 'Purchase Plan',
        desc: 'See future sales trends in advance to plan purchases, forecast demand and control inventory balance from the source, with configurable approval authority.',
      },
      {
        name: 'Purchase Order',
        desc: 'Supports one-click quick ordering and payment with estimated arrival time and online logistics tracking, improving collaboration between operations and procurement.',
      },
    ],
  },
];
</script>

<template>
  <div class="solution">
    <section class="solution-hero">
      <h1>Solutions for Amazon Selling Partners</h1>
      <p>
        Oulingju brings advertising, brand and traffic analytics together with day-to-day operations,
        finance and supply-chain management — all within Amazon's policies — so sellers can make
        better decisions from a single, data-driven workspace.
      </p>
    </section>

    <section
        v-for="group in solutionGroups"
        :key="group.title"
        class="solution-group">
      <div class="solution-group__head">
        <span class="solution-group__tag">{{ group.tag }}</span>
        <h2>{{ group.title }}</h2>
      </div>
      <div class="solution-grid">
        <article
            v-for="item in group.items"
            :key="item.name"
            class="solution-card">
          <h3>{{ item.name }}</h3>
          <p>{{ item.desc }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.solution {
  max-width: 80em;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
}

.solution-hero {
  text-align: center;
  max-width: 46rem;
  margin: 0 auto 3.5rem;
}

.solution-hero h1 {
  font-size: 2.25rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.solution-hero p {
  font-size: 1rem;
  line-height: 1.75rem;
  color: #4b5563;
}

.solution-group {
  margin-bottom: 3rem;
}

.solution-group__head {
  margin-bottom: 1.5rem;
}

.solution-group__tag {
  display: inline-block;
  background: rgb(240, 244, 255);
  color: #3b6cf6;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.375rem 0.875rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.solution-group__head h2 {
  font-size: 1.75rem;
  line-height: 2.25rem;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1.25rem;
}

.solution-card {
  background: rgb(248, 249, 255);
  border: 1px solid var(--el-border-color, #e5e7eb);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.solution-card:hover {
  box-shadow: 0 10px 30px rgba(59, 108, 246, 0.12);
  transform: translateY(-2px);
}

.solution-card h3 {
  font-size: 1.125rem;
  margin-bottom: 0.625rem;
  color: #111827;
}

.solution-card p {
  font-size: 0.9375rem;
  line-height: 1.6rem;
  color: #4b5563;
}
</style>
