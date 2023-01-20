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
    <section id="general-info" class="py-5">
        <div class="container-fluid mt-5">
            <div class="my_container container-fluid px-5">
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
            <hr class="my_hr m-0">
            <div class="my_container container-fluid px-5">
                <div class="row justify-content-around pt-5 mt-5">
                    <div class="col-6 pt-5 mt-5">
                        <img :src="store.getImgPath(imgsPath + '2' + imgsExtension)" alt="" class="w-100">
                    </div>
                    <div class="col-5 pt-5">
                        <h1 class="my_font-serif my_title fw-bold">
                            Empowering Children to Reach Their Potential.
                        </h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dolores tempora vitae aliquid
                            maxime dicta voluptatem reiciendis, fugit enim alias velit dignissimos ea, commodi esse,
                            doloremque exercitationem adipisci!
                        </p>

                        <ul class="list-unstyled d-flex fw-bold justify-content-between w-50">
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
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#general-info {
    .my_container {

        p {
            color: $text-color-19;
        }

        a {
            color: $text-color-6;
        }

        ul li {
            color: $text-color-6;

            div {
                font-size: 2rem;

                &:first-of-type {
                    font-size: 4rem;
                }
            }
        }

        .my_title {
            font-size: 4rem;
        }
    }

    hr {
        border-top: 3px solid $border-color-6;
    }
}
</style>