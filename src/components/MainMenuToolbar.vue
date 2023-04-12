<template>
    <div class="row text-center messhive--main__menu--toolbar">
        <div class="col-2 messhive--main__menu--toolbar__dropdown">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="far fa-message"></i>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <div class="row messhive--main__menu--toolbar__dropdown--info">
                            <div class="col-3 messhive--main__menu--toolbar__dropdown--info__avatar">
                                <img src="@/assets/img/sample_avatar.svg" class="img-fluid rounded-start messhive--main__menu--toolbar__dropdown--info__avatar--img" alt="Chat App!">
                            </div>
                            <div class="col-9 messhive--main__menu--toolbar__dropdown--info__text">
                                    <b>Lê Văn Đạt</b> <br />
                                <small>lvdatctu@gmail.com</small>
                            </div>
                        </div>
                    </li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-gears"></i> &nbsp; Cài đặt tài khoản</a></li>
                    <li><a class="dropdown-item" href="#"><i class="far fa-comment-dots"></i> &nbsp; Đóp góp ý kiến</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-bug"></i> &nbsp; Báo lỗi</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li class="text-center"><a href="https://github.com/lvdat/chatapp-frontend" class="text-muted" style="text-decoration: none;" target="_blank"><small>MessHive Beta v0.1</small></a></li>
                </ul>
            </div>
        </div>
        <div class="col-10 messhive--main__menu--toolbar__search">
            <div class="input-group">
                <input type="text" class="form-control messhive--main__menu--toolbar__search--input" placeholder="Tìm kiếm..." aria-label="Username" aria-describedby="basic-addon1">
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.messhive--main__menu--toolbar {
    margin-top: 10px;
    padding: 0 15px 10px 10px;
    border-bottom: 1px solid #ced4da;
    max-height: 60px;
}
.messhive--main__menu--toolbar__search--input {
    border-radius: 0%;
}

.dropdown-menu {
  transition: all 0.1s ease;
  transform: scale(0);
  transform-origin: top center;
  padding: 9px;
}
.show .dropdown-menu {
  transform: scale(1);
}
li~.dropdown-item:hover {
    border-radius: 20%;
}
button.dropdown-toggle {
    border-radius: 0%;
    background-color: #fff;
    color: #000;
    border: none;
}
button.dropdown-toggle:hover {
    background-color: unset;
    color: #000;
}
.messhive--main__menu--toolbar__dropdown--info__avatar--img {
    border-radius: 50%;
}
.messhive--main__menu--toolbar__dropdown--info__avatar {
    padding-right: unset;
}
.messhive--main__menu--toolbar__dropdown--info {
    border-bottom: 1px solid #ced4da;
    padding-bottom: 8px;
    margin-bottom: 8px;
}
</style>