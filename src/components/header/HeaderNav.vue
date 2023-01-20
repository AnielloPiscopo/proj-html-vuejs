<script>
import { store } from '../../store';

export default {
    name: 'HeaderNav',

    data() {
        return {
            store,
            navLinksList: [
                'Home',
                'Courses',
                'Instructor',
                'Events',
                'Pages',
                'Elements',
            ],
        }
    }
}
</script>


<template>
    <nav class="container-fluid">
        <div class="row align-items-center justify-content-between">
            <div class="col-2">
                <a class="my_logo-container">
                    <img :src="store.getImgPath('logo-light.png')" alt="Logo" class="w-100">
                </a>
            </div>

            <div class="col-8">
                <ul class="list-unstyled d-flex m-0 justify-content-between">
                    <li v-for="navLink in navLinksList"><a href="#" class="text-uppercase text-decoration-none">{{
                        navLink
                    }}</a>
                    </li>
                </ul>
            </div>

            <div class="col-1">
                <ul class="my_icons-container d-flex justify-content-between list-unstyled m-0">
                    <li>
                        <a href="#" class="text-decoration-none">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-decoration-none">
                            <font-awesome-icon icon="fa-regular fa-clipboard" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-decoration-none">
                            <font-awesome-icon icon="fa-solid fa-bars" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

li a {
    color: $text-color-3;
}
</style>