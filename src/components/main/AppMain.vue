<script>
import MainIconsContainer from './MainIconsContainer.vue';
import MainGeneralInfo from './MainGeneralInfo.vue';
import MainTestimonials from './MainTestimonials.vue';
import MainProgrammDetails from './MainProgrammDetails.vue';
import MainCourses from './MainCourses.vue';
import MainPricingPlans from './MainPricingPlans.vue';
import MainClientsLogoContainer from './MainClientsLogoContainer.vue';

export default {
    name: 'AppMain',
    components: {
        MainIconsContainer,
        MainGeneralInfo,
        MainTestimonials,
        MainProgrammDetails,
        MainCourses,
        MainPricingPlans,
        MainClientsLogoContainer,
    }
}
</script>


<template>
    <main>
        <MainIconsContainer />
        <MainGeneralInfo />,
        <MainTestimonials />
        <MainProgrammDetails />
        <MainCourses />
        <MainPricingPlans />
        <MainClientsLogoContainer />
    </main>
</template>


<style lang="scss" scoped>

</style>