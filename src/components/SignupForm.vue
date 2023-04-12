<template>
    <form class="mb-3">
        <div class="mb-3">
            <input type="email" class="form-control" placeholder="Nhập email của bạn" required />
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" placeholder="Nhập mật khẩu" required />
        </div>
        <div class="mb-4">
            <input type="password" class="form-control" placeholder="Nhập lại mật khẩu" required />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Tên của bạn" required />
        </div>
        <div class="mb-3">
            <label class="mb-1">Ngày sinh của bạn</label>
            <input type="date" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Tạo tài khoản</button>
    </form>
</template>
<script>
export default {

}
</script>