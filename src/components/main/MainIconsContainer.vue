<script>
import { store } from '../../store';

export default {
    name: 'MainIconsContainer',

    data() {
        return {
            store,
            iconsImgExtension: '.png',
            iconsImgPath: 'h5-custom-icon-',
            numberOfIcons: 6,
            argumentsList: [
                'Languages',
                'Software',
                'Business',
                'Chemistry',
                'Science',
                `DIY&Craft`,
            ]
        }
    }
}
</script>

<template>
    <div class="my_icons-container p-5">
        <div class="container-fluid d-flex justify-content-between py-5 flex-wrap">
            <a href="#" class="my_icon-container p-5 d-flex flex-column align-items-center text-decoration-none"
                v-for="icon, index in numberOfIcons" :key="index">
                <div class="my_img-container pb-2">
                    <img :src="store.getImgPath(iconsImgPath + (index + 1) + iconsImgExtension)" alt="" class="w-100">
                </div>

                <h4 class="my_font-serif align-self-end fw-bold pt-4">{{ argumentsList[index] }}</h4>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


.my_icons-container a {
    color: $text-color-23;
    background-color: $bg-color-8;
    border: 1px solid $border-color-4;
}
</style>