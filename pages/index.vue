<script setup lang="ts">
import HeroSectionGroups from '~/components/loggedouthome/HeroSectionGroups.vue';
import HeroSectionOrganise from '~/components/loggedouthome/HeroSectionOrganise.vue';
import HeroSectionSignup from '~/components/loggedouthome/HeroSectionSignup.vue';
import HeroSectionTitle from '~/components/loggedouthome/HeroSectionTitle.vue';
import HeroSectionTrade from '~/components/loggedouthome/HeroSectionTrade.vue';
import HeroSectionTrust from '~/components/loggedouthome/HeroSectionTrust.vue';
</script>

<template>
  <div>
    <HeroSectionTitle />
    <HeroSectionOrganise />
    <HeroSectionGroups />
    <HeroSectionTrust />
    <HeroSectionTrade />
    <HeroSectionSignup />
  </div>
</template>
