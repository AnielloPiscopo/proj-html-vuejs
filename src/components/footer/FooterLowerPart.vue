<script>
export default {
    name: 'FooterLowerPart',

    data() {
        return {
            phoneContactResource: '+44 300 303 0266'
        }
    }
}
</script>

<template>
    <div class="my_container container-fluid pt-5">
        <div class="row justify-content-between align-items-end">
            <div class="col-4">
                <a href="#" class="text-decoration-none">Copyright 2017&#169;Mikado Themes</a>
            </div>

            <div class="col-6">
                <ul class="list-unstyled text-uppercase d-flex justify-content-end">
                    <li class="ps-4">Call {{ phoneContactResource }}</li>
                    <li class="ps-4">Follow Us</li>
                    <li class="ps-4">
                        <a href="#" class="text-decoration-none">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </a>
                    </li>
                    <li class="ps-4">
                        <a href="#" class="text-decoration-none">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </a>
                    </li>
                    <li class="ps-4">
                        <a href="#" class="text-decoration-none">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.my_container,
a {
    color: $text-color-11;
}
</style>