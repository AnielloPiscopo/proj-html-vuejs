<script>
export default {
    name: 'FooterUpperPart',
}
</script>

<template>
    <div class="container-fluid">
        <div class="row justify-content-between">
            <div class="col-8">
                <div class="row">
                    <div class="col-4" v-for="shish in 3">
                        <ul class="list-unstyled">
                            <li>shish</li>
                            <li>shish</li>
                            <li>shish</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-4">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>