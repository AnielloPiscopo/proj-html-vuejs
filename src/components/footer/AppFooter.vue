<script>
import FooterUpperPart from './FooterUpperPart.vue';
import FooterLowerPart from './FooterLowerPart.vue';

export default {
    name: 'AppFooter',

    components: {
        FooterUpperPart,
        FooterLowerPart,
    }
}
</script>


<template>
    <footer class="p-5">
        <FooterUpperPart />
        <hr>
        <FooterLowerPart />
    </footer>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

footer {
    background-color: $bg-color-15;
}
</style>