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
            <img :src="store.getImgPath('testimonials-standard-2.png')" alt="" class="align-self-center">
            <div class="row justify-content-center">
                <div class="col-10">
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas repellendus voluptatibus nemo
                        vero nisi
                        cum, nostrum dolorem corrupti. Dignissimos iusto quos repellendus consectetur ducimus totam
                        beatae? Nam
                        enim nihil voluptas recusandae impedit neque fuga magnam animi! Nesciunt, nam!"
                    </p>
                </div>
            </div>
            <h3 class="my_font-serif ">Joan Collins</h3>
            <span class="text-uppercase ">Student</span>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>