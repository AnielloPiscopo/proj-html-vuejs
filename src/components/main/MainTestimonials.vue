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
    <div class="container-fluid d-flex flex-column">
        <div class="my_img-container rounded rounded-pill align-self-center"></div>
        <p class="text-center">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas repellendus voluptatibus nemo vero nisi
            cum, nostrum dolorem corrupti. Dignissimos iusto quos repellendus consectetur ducimus totam beatae? Nam
            enim nihil voluptas recusandae impedit neque fuga magnam animi! Nesciunt, nam!"
        </p>
    </div>
</template>

<style lang="scss" scoped>
.my_img-container {
    background-image: url('../../assets/img/instructor-img-6-150x150.jpg');
    height: 100px;
    width: 100px;
    background-position: top;
    background-position: 60% 25%;
}
</style>