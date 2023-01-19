<script>
export default {
    name: 'HeaderNav',

    data() {
        return {
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
                    <img src="../../assets/img/logo-light.png" alt="Logo" class="w-75">
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
                <div class="my_icons-container d-flex justify-content-between">
                    <span>iii</span>
                    <span>iii</span>
                    <span>iii</span>
                </div>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>

</style>