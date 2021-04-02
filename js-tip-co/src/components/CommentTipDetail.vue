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
        <div class="commentTipDetail_share">
            <div class="commentTipDetail_shareGroup">
                <span class="commentTipDetail_shareGroup__recommend"> <v-icon color="#E91E63" style="font-size:22px">mdi-heart-outline</v-icon> Recommend </span>
                <span class="commentTipDetail_shareGroup__tweet"> <a><v-icon  color="#ffff" style="font-size:15px">mdi-twitter</v-icon> Tweet</a> </span>
                <span class="commentTipDetail_shareGroup__face"> <a><v-icon  color="#ffff" style="font-size:15px">mdi-facebook</v-icon> Share </a> </span>
            </div>
            <div class="commentTipDetail_shareSort">
                <v-menu offset-y :left="true" nudge-right="0" nudge-top="-5">
                    <template v-slot:activator="{ on, attrs }">
                        <span v-bind="attrs" v-on="on">
                            Sort by best
                            <v-icon style="font-size: 22px">mdi-menu-down</v-icon>
                        </span>
                    </template>
                    <v-list class="commentTipDetail_topLogin__menu">
                        <v-list-item v-ripple>Best</v-list-item>
                        <v-list-item v-ripple>Newest</v-list-item>
                        <v-list-item v-ripple>Oldest</v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
        <div class="commentTipDetail_login">
            <div class="commentTipDetail_loginIconGroup">
                <span>LOG IN WITH</span> <br>
                <span>
                     <v-btn color="#0D47A1" fab x-small dark> <v-icon >mdi-facebook</v-icon> </v-btn>
                     <v-btn color="#2196F3" fab x-small dark> <v-icon>mdi-twitter</v-icon> </v-btn>
                     <v-btn color="#E53935" fab x-small dark> <v-icon>mdi-google</v-icon> </v-btn>
                </span>
            </div>
            <div class="commentTipDetail_loginForm">
                <span>OR SIGN UP WITH DISQUS <v-icon >mdi-help-circle-outline</v-icon></span>
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
    &_share {
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
        &Group {
            width: 300px;
            &__recommend {
                margin-right: 20px;
                color: #656c7a;
                width: 150px;
                cursor: pointer;
                &:hover {
                    color: black;
                    font-weight: 700px;
                }
            }
            &__tweet {
                padding: 2px 7px;
                height: 20px;
                width: auto;
                background-color: #1b95e0;
                border-radius: 2px;
                margin-right: 10px;
                a {
                    color: #ffff;
                    font-size: 13px;
                    font-weight: bold;
                }
            }
            &__face {
                padding: 2px 7px;
                height: 20px;
                width: auto;
                background-color: #3b5998;
                border-radius: 2px;
                a {
                    color: #ffff;
                    font-size: 13px;
                    font-weight: bold;
                }
            }
        }
        &Sort {
            font-weight: bold;
            color: #656c7a;
            span:hover {
                color:black;
            }
        }
    }
    &_login {
        display: flex;
    }
}
</style>