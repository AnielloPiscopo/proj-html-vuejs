<script>
export default {
    name: 'HeaderCarousel',
}
</script>


<template>
    <div id="header-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active text-center">
                <h1 class="my_font-serif fw-bold">Contemporary Ideas</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia error quam deleniti. Minima, modi
                    repellat! Aut neque molestias nesciunt rem voluptas nisi vero fugit dolor, assumenda atque quia
                    maxime dolorum.
                </p>
                <a href="#" class="btn btn-primary text-uppercase">Register now</a>
            </div>
            <div class="carousel-item">
            </div>
            <div class="carousel-item">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
img {
    height: 100px;
}
</style>