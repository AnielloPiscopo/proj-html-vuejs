<script>
import HeaderNav from './HeaderNav.vue';
import HeaderCarousel from './HeaderCarousel.vue';

export default {
    name: 'AppHeader',

    components: {
        HeaderNav,
        HeaderCarousel,
    }
}
</script>


<template>
    <header class="p-5">
        <HeaderNav />
        <HeaderCarousel />
    </header>
</template>


<style lang="scss" scoped>

</style>