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
    <div class="my_icons-container d-flex justify-content-between p-5 flex-wrap">
        <div class="my_icon-container p-5 d-flex flex-column align-items-center" v-for="icon, index in numberOfIcons"
            :key="index">
            <div class="my_img-container">
                <img :src="store.getImgPath(iconsImgPath + (index + 1) + iconsImgExtension)" alt="" class="w-100">
            </div>

            <h4 class="my_font-serif align-self-end fw-bold">{{ argumentsList[index] }}</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>