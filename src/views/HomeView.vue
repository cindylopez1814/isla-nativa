<template>
  <div class="home">
    <TheNavBar />
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <BenefitsSection />
      <TestimonialSection />
      <CTASection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavBar          from '@/components/base/TheNavBar.vue'
import TheFooter          from '@/components/base/TheFooter.vue'
import HeroSection        from '@/components/sections/HeroSection.vue'
import CategoriesSection  from '@/components/sections/CategoriesSection.vue'
import FeaturedSection    from '@/components/sections/FeaturedSection.vue'
import BenefitsSection    from '@/components/sections/BenefitsSection.vue'
import TestimonialSection from '@/components/sections/TestimonialSection.vue'
import CTASection         from '@/components/sections/CTASection.vue'
</script>

<style scoped>
.home { display: flex; flex-direction: column; min-height: 100vh; }
main  { flex: 1; }
</style>
