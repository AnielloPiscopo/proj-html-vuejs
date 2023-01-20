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
@use '../../styles/partials/variables' as *;

header {
    color: $text-color-3;
    background-image: url('../../assets/img/h5-slide-3-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>