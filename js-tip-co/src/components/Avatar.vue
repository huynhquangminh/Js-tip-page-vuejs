<template>
    <div class="avatar">
        <div class="avatar_img">
            <img src="../assets/icon-user-default.png" alt="" width="40" height="40">
        </div>
        <div class="avatar_info">
            <span class="avatar_infoName">user name</span> <br>
            <span class="avatar_infoMess">user name</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Avatar',
}
</script>
<style lang="scss">
    .avatar {
        display: flex;
        align-items: center;
        &_img {
           width: 40px;
           height: 40px;
           margin-right: 10px;
           img {
               border-radius: 20px;
           }
        }
        &_info {
            font-size: 16px;
            &Name {
                font-weight: bold;
            }
            &Mess {
                font-weight: 500;
            }
        }
    }
</style>