<script>
import { store } from '../../store';

export default {
    name: 'MainGeneralInfo',

    data() {
        return {
            store,
            imgsPath: 'h5-img-',
            imgsExtension: '.jpg',
            userStoriesNumber: 168,
            eventsNumber: 347,
        }
    }
}
</script>

<template>
    <section id="general-info" class="p-5">
        <div class="my_container container-fluid py-5">
            <h1 class="my_font-serif my_title fw-bold w-50">The Trusted Name for In-Home Tutoring.</h1>

            <p class="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti corporis provident architecto
                ducimus quibusdam dignissimos obcaecati reiciendis atque impedit, ipsum unde voluptatem adipisci
                voluptatum, optio quaerat omnis!
            </p>

            <a href="#" class="text-decoration-none text-uppercase fw-bold">Learn More</a>

            <div class="my_img-container pt-5">
                <img :src="store.getImgPath(imgsPath + '1' + imgsExtension)" alt="" class="w-100">
            </div>
        </div>
        <div class="my_container container-fluid m-5">
            <div class="row">
                <div class="col-6">
                    <img :src="store.getImgPath(imgsPath + '2' + imgsExtension)" alt="" class="w-100">
                </div>
                <div class="col-6">
                    <h1 class="my_font-serif">
                        Empowering Children to Reach Their Potential.
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dolores tempora vitae aliquid
                        maxime dicta voluptatem reiciendis, fugit enim alias velit dignissimos ea, commodi esse,
                        doloremque exercitationem adipisci!
                    </p>

                    <ul class="list-unstyled d-flex fw-bold">
                        <li class="my_font-serif">
                            <div>{{ userStoriesNumber }}</div>
                            <div>User Stories</div>
                        </li>

                        <li class="my_font-serif">
                            <div>{{ eventsNumber }}</div>
                            <div>Events</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#general-info .my_container {
    &:first-of-type {
        border-bottom: 2px solid $border-color-6;
    }

    p {
        color: $text-color-19;
    }

    a,
    ul li {
        color: $text-color-6;
    }

    .my_title {
        font-size: 4rem;
    }
}
</style>