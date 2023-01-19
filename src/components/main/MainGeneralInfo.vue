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
    <section id="general-info">
        <div class="container-fluid">
            <h1 class="my_font-serif">The Trusted Name for In-Home Tutoring</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti corporis provident architecto
                ducimus quibusdam dignissimos obcaecati reiciendis atque impedit, ipsum unde voluptatem adipisci
                voluptatum, optio quaerat omnis!
            </p>

            <a href="#" class="text-decoration-none text-uppercase">Learn More</a>

            <div class="my_img-container">
                <img :src="store.getImgPath(imgsPath + '1' + imgsExtension)" alt="" class="w-100">
            </div>
        </div>
        <div class="container-fluid">
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

                    <ul class="list-unstyled d-flex">
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

<style lang="scss">

</style>