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
    <div class="container-fluid py-5">
        <div class="row justify-content-between">
            <div class="col-4">
                <a href="#" class="text-decoration-none">Copyright 2017 @Mikado Themes</a>
            </div>

            <div class="col-6">
                <ul class="list-unstyled text-uppercase d-flex justify-content-end">
                    <li><a href="#" class="text-decoration-none ps-4">Call {{ phoneContactResource }}</a></li>
                    <li><a href="#" class="text-decoration-none ps-4">Follow Us</a></li>
                    <li><a href="#" class="text-decoration-none ps-4">i</a></li>
                    <li><a href="#" class="text-decoration-none ps-4">i</a></li>
                    <li><a href="#" class="text-decoration-none ps-4">i</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>