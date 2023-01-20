<script>
export default {
    name: 'HeaderCarousel',
}
</script>


<template>
    <section id="header-carousel" class="p-5">
        <div class="my_container text-center container-fluid px-5">
            <h1 class="my_font-serif fw-bold">Contemporary Ideas</h1>
            <p class="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia error quam deleniti. Minima, modi
                repellat! Aut neque molestias nesciunt rem voluptas nisi vero fugit dolor, assumenda atque quia
                maxime dolorum.
            </p>
            <a href="#" class="my_btn btn btn-primary text-uppercase rounded rounded-0 mt-3 py-3 px-5 fw-bold">Register
                now</a>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#header-carousel .my_container {
    padding-top: 13rem;
    padding-bottom: 13rem;

    h1 {
        font-size: 6rem;
    }

    img {
        height: 100px;
    }

    a.my_btn {
        background-color: $bg-color-11;
        border-color: transparent;
    }
}
</style>