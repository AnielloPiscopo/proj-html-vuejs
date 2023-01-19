<script>
import MainIconsContainer from './MainIconsContainer.vue';
import MainTestimonials from './MainTestimonials.vue';
import MainCourses from './MainCourses.vue';

export default {
    name: 'AppMain',
    components: {
        MainIconsContainer,
        MainTestimonials,
        MainCourses,
    }
}
</script>


<template>
    <main>
        <MainIconsContainer />
        <MainTestimonials />
        <MainCourses />
    </main>
</template>


<style lang="scss" scoped>

</style>