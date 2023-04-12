<template>
    <NavigationHome />
    <div class="container mt-3 landing-container">
        <div class="row">
            <div class="col-md-6">
                <LandingText />
                <LoginForm v-if="login" />
                <SignupForm v-else />
                <p v-if="login">
                    Bạn chưa có tài khoản?, <a class="change-state_link" @click="changeState">Đăng ký ngay!</a>
                </p>
                <p v-else>
                    Bạn đã có tài khoản?, <a class="change-state_link" @click="changeState">Đăng nhập ngay!</a>
                </p>
            </div>
            <div class="col-md-6">
                <LandingImage />

            </div>
        </div>
        <LandingFooter />
    </div>
</template>
<script>
import NavigationHome from '@/components/NavigationHome.vue'
import LandingText from '@/components/LandingText.vue'
import LandingImage from '@/components/LandingImage.vue'
import LoginForm from '@/components/LoginForm.vue'
import LandingFooter from '@/components/LandingFooter.vue'
import SignupForm from '@/components/SignupForm.vue'

export default {
    components: {
        NavigationHome,
        LandingText,
        LandingImage,
        LoginForm,
        LandingFooter,
        SignupForm,
    },
    data () {
        return {
            login: true,
        }
    },
    methods: {
        changeState () {
            const currentState = this.login
            this.login = !currentState
        }
    },
    watch: {

    }
}
</script>
<style>
.landing-container {
    padding-top: 50px;
}
.change-state_link {
    text-decoration: none;
    cursor: pointer;
}
</style>