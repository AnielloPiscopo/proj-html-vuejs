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
    <div id="clients" class="container-fluid">
        <div class="row">

        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>