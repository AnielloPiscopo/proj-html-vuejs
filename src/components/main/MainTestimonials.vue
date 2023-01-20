<script>
import { store } from '../../store';

export default {
    name: 'MainTestimonials',

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section id='testimonials' class="p-5">
        <div class="container-fluid d-flex flex-column p-5 my-5 text-center">
            <div class="row justify-content-center">
                <div class="col-2">
                    <img :src="store.getImgPath('testimonials-standard-2.png')" alt="" class="align-self-center w-75">
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-9 py-5">
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas repellendus voluptatibus nemo
                        vero nisi
                        cum, nostrum dolorem corrupti. Dignissimos iusto quos repellendus consectetur ducimus totam
                        beatae? Nam
                        enim nihil voluptas recusandae impedit neque fuga magnam animi! Nesciunt, nam!"
                    </p>
                </div>
            </div>
            <h2 class="my_font-serif ">Joan Collins</h2>
            <span class="text-uppercase fs-6 ">Student</span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#testimonials {
    background-image: url('../../assets/img/h5-parallax-img-1.png');
    background-position: top center;
    color: $text-color-3;
}
</style>