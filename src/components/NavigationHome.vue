<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary home_navbar fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo96.png" alt="Bootstrap" width="40" height="40">
                <span class="nav-text">
                    <b>GMC 2023</b>
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                </ul>
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Danh sách game</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Giới thiệu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Tin tức</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style>
.nav-link {
    font-weight: bold;
    font-size: 18px;
    color: #000;
}
.nav-item:hover {
    border-bottom: 2px solid #121FCF;
}
.navbar-toggler, .navbar-toggler.collapsed{
    border: none;
}
.home_navbar {
    margin: 20px 10px 20px 10px;
}
.nav-text {
    background: #121FCF;
    background: -webkit-linear-gradient(to right, #121FCF 0%, #CF1512 100%);
    background: -moz-linear-gradient(to right, #121FCF 0%, #CF1512 100%);
    background: linear-gradient(to right, #121FCF 0%, #CF1512 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>