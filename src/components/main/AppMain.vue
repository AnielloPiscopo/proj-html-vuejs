<script>
import MainIconsContainer from './MainIconsContainer.vue';
import MainTestimonials from './MainTestimonials.vue';
import MainProgrammDetails from './MainProgrammDetails.vue';
import MainCourses from './MainCourses.vue';
import MainPricingPlans from './MainPricingPlans.vue';

export default {
    name: 'AppMain',
    components: {
        MainIconsContainer,
        MainTestimonials,
        MainProgrammDetails,
        MainCourses,
        MainPricingPlans,
    }
}
</script>


<template>
    <main>
        <MainIconsContainer />
        <MainTestimonials />
        <MainProgrammDetails />
        <MainCourses />
        <MainPricingPlans />
    </main>
</template>


<style lang="scss" scoped>

</style>