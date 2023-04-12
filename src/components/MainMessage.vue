<template>
    <div class="row messhive--main__message--title">
        <div class="col-6">
            <table class="table messhive--main__message--title__table">
                <tbody>
                    <tr>
                        <td rowspan="2" style="width: 60px; text-align: right;">
                            <img src="@/assets/img/sample_avatar.svg" class="img-fluid rounded-start" style="max-height: 50px" alt="Chat App!">
                        </td>
                        <td style="padding-bottom: 0%; vertical-align: bottom">
                            <b style="font-size: 20px;">Le Van Dat</b>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top: 0%; vertical-align:top">
                            <small>Đang hoạt động</small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-6">
            <div class="card messhive--main__message--title__button--card">
                <div class="card-body messhive--main__message--title__button">
                    <i class="fas fa-xl fa-magnifying-glass"></i> &nbsp;
                    <i class="fas fa-xl fa-phone"></i>&nbsp;
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle pt-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-xl fa-ellipsis-vertical"></i>&nbsp;
                        </button>
                        <ul class="dropdown-menu messhive--main__message--title__dropdown">
                            <li><a class="dropdown-item" href="#"><i class="fas fa-video"></i> &nbsp; Gọi video</a></li>
                            <li><a class="dropdown-item" href="#"><i class="far fa-bell-slash"></i> &nbsp; Tắt thông báo</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-universal-access"></i> &nbsp; Đổi biệt danh</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-circle-check"></i> &nbsp; Chọn nhiều tin nhắn</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-flag"></i> &nbsp; Báo cáo người dùng</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item text-danger" href="#"><i class="fas fa-ban"></i> &nbsp; Chặn người dùng</a></li>
                            <li><a class="dropdown-item text-danger" href="#"><i class="fas fa-trash"></i> &nbsp; Xoá cuộc trò chuyện</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row messhive--main__message--mess">
        <div class="col-6">

        </div>
    </div>
</template>
<script>
export default {
    props: {
        currentType: { type: Number },
        currentConverName: { type: String },

    },

}
</script>
<style>
.messhive--main__message--title {
    border-bottom: 1px solid #ced4da;
}
.table>tbody {
    vertical-align: middle;
}
.messhive--main__message--title__table {
    margin-bottom: unset;
    border: none;
}
.messhive--main__message--title__table > tbody > tr > td {
    border: none;
    padding: 3px;
}
.messhive--main__message--title__button {
    letter-spacing: 5px;
    text-align: right;
}
.messhive--main__message--title__button--card {
    border: none;
}
.dropdown {
    display: inline;
    letter-spacing: normal;
}
.messhive--main__message--title__dropdown {
    inset: 17px 28px auto auto !important;
}
</style>