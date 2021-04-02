<template>
    <div class="commentTipDetail">
        <div class="commentTipDetail_top">
            <div class="commentTipDetail_topLink">
                <span class="commentTipDetail_topLink__comment">0 Comments</span>
                <span>JS TIPS</span>
                <span>
                    <a>
                        <v-icon style="font-size: 22px">mdi-lock</v-icon>Disqus' Privacy Policy
                    </a>
                </span>
            </div>
            <div class="commentTipDetail_topLogin">
                <v-menu offset-y :left="true" nudge-right="0" nudge-top="-5">
                    <template v-slot:activator="{ on, attrs }">
                        <span v-bind="attrs" v-on="on">
                            <v-icon style="font-size: 22px">mdi-chat</v-icon>
                            Login
                            <v-icon style="font-size: 22px">mdi-menu-down</v-icon>
                        </span>
                    </template>
                    <v-list class="commentTipDetail_topLogin__menu">
                        <v-list-item v-ripple>facebook</v-list-item>
                        <v-list-item v-ripple>Twitter</v-list-item>
                        <v-list-item v-ripple>Google</v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CommentTipDetail',
};
</script>
<style lang="scss">
.commentTipDetail {
    width: 100%;
    margin-bottom: 20px;
    &_top {
        display: flex;
        justify-content: space-between;
        height: 35px;
        padding: 5px 0;
        border-bottom: 2px solid #e7e9ee;
        &Link {
            span {
                // display: flex;
                font-size: 15px;
                font-weight: bold;
                color: #656c7a;
                margin-right: 20px;
                &:hover {
                    color: black;
                }
            }
            &__comment {
                color: #2a2e2e !important;
                border-bottom: 2px solid #2a2e2e;
                padding-bottom: 9px;
            }
            
        }
        &Login {
            font-size: 15px;
            font-weight: bold;
            color: #656c7a;
            span:hover {
                color:black;
            }
            &__menu {
                border: 2px solid #2a2e2e !important;
                width: 130px !important;
                .v-list-item {
                    min-height: 30px !important;
                    color: #687a86 !important;
                    font-weight: 500px;
                    &:hover {
                        color: red !important;
                        background-color: #2e9fff !important;
                        outline: 0;
                    }
                }
                .theme--light {
                    color: #687a86 !important;
                }
            }
        }
    }
}
</style>