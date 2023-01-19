<script>
import { store } from '../../store';

export default {
    name: 'MainClientsLogoContainer',

    data() {
        return {
            store,
            clientsLogoImgPath: 'h5-client-',
            clientsLogoImgExtension: '.png'
        }
    }
}
</script>

<template>
    <div id="clients" class="p-5">
        <div class="container-fluid py-5">
            <div class="row">
                <div class="col-3">
                    <img :src="store.getImgPath(clientsLogoImgPath + '5' + clientsLogoImgExtension)" alt=""
                        class="w-100">
                </div>
                <div class="col-3">
                    <img :src="store.getImgPath(clientsLogoImgPath + '1' + clientsLogoImgExtension)" alt=""
                        class="w-100">
                </div>
                <div class="col-3">
                    <img :src="store.getImgPath(clientsLogoImgPath + '2' + clientsLogoImgExtension)" alt=""
                        class="w-100">
                </div>
                <div class="col-3">
                    <img :src="store.getImgPath(clientsLogoImgPath + '1' + clientsLogoImgExtension)" alt=""
                        class="w-100">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>