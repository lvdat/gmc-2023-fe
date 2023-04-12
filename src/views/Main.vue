<template>
    <div class="container-xxl messhive--main">
        <div class="row messhive--main__row">
            <div class="col-md-4 messhive--main__menu">
                <MainMenuToolbar />
            </div>
            <div class="col-md-8 messhive--main__message">
                <MainMessage />
            </div>
        </div>
    </div>
</template>
<script>
import MainMenuToolbar from '@/components/MainMenuToolbar.vue'
import MainMessage from '@/components/MainMessage.vue'
export default {
    components: {
        MainMenuToolbar,
        MainMessage,
    }
}
</script>
<style>
.messhive--main__row {
    height: 100vh;
    border: 1px solid #ced4da;
}
.messhive--main__menu {
    border-right: 1px solid #ced4da;
}
.messhive--main__message {

}

</style>