<template>
    <div class="chat">
        <div class="chat_list">
            <v-text-field
                label="Search"
                outlined
            ></v-text-field>
            <div>
                <Avatar />
            </div>
        </div>
        <div class="chat_mess">
            <div class="chat_mess_header"></div>
            <div class="chat_mess_header"></div>
        </div>
    </div>
</template>
<script>
import Avatar from '../components/Avatar.vue'
export default {
    name: 'Chat',
    components: {
        Avatar
    }
}
</script>
<style lang="scss">
.chat {

}
</style>