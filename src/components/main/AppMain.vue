<script>
import MainIconsContainer from './MainIconsContainer.vue';
import MainTestimonials from './MainTestimonials.vue';
import MainCourses from './MainCourses.vue';
import MainPricingPlans from './MainPricingPlans.vue';

export default {
    name: 'AppMain',
    components: {
        MainIconsContainer,
        MainTestimonials,
        MainCourses,
        MainPricingPlans,
    }
}
</script>


<template>
    <main>
        <MainIconsContainer />
        <MainTestimonials />
        <MainCourses />
        <MainPricingPlans />
    </main>
</template>


<style lang="scss" scoped>

</style>