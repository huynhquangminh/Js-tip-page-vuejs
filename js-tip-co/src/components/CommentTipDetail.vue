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
                <span class="commentTipDetail_shareGroup__recommend" @click="recommend()">
                    <v-icon color="#E91E63" style="font-size:22px" v-if="!recommendNum">mdi-heart-outline</v-icon>
                    <v-icon color="#E91E63" style="font-size:22px" v-if="recommendNum">mdi-heart</v-icon>
                    Recommend <span v-if="recommendNum">{{recommendNum}}</span>
                </span>
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
        <div class="commentTipDetail_comment">
            <div class="commentTipDetail_commentAvatar">
                <img src="https://a.disquscdn.com/1616607624/images/noavatar92.png" width="50" height="50" >
            </div>
            <div class="commentTipDetail_commentEditor">
                <jodit-editor v-model="content" :buttons="buttonsJodit" />
            </div>
        </div>
        <div class="commentTipDetail_login">
            <div class="commentTipDetail_loginIconGroup">
                <span class="commentTipDetail_loginIconGroup__text">LOG IN WITH</span> <br>
                <span>
                     <v-btn class="commentTipDetail_loginIconGroup__btn" color="#0D47A1" fab x-small dark> <v-icon >mdi-facebook</v-icon> </v-btn>
                     <v-btn class="commentTipDetail_loginIconGroup__btn" color="#2196F3" fab x-small dark> <v-icon>mdi-twitter</v-icon> </v-btn>
                     <v-btn class="commentTipDetail_loginIconGroup__btn" color="#E53935" fab x-small dark> <v-icon>mdi-google</v-icon> </v-btn>
                </span>
            </div>
            <div class="commentTipDetail_loginForm">
                <span class="commentTipDetail_loginForm__text">OR SIGN UP WITH DISQUS <v-icon style="font-size: 18px" >mdi-help-circle-outline</v-icon></span>
                <ValidationObserver ref="obs" v-slot="{invalid}" tag="form" slim class="commentTipDetail_loginForm__input">
                        <ValidationProvider name="name"  v-slot="{ errors}" rules="required" slim>
                            <v-text-field outlined  dense required placeholder="Name" :error-messages="errors" v-model="registorModel.name" @focus="focusName"></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider name="email" :error="true" v-slot="{ errors }" rules="required|email"  slim>
                            <v-text-field v-if="isFocus" outlined dense placeholder="Email" :error-messages="errors" v-model="registorModel.email"></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider name="pasword" v-slot="{ errors }" rules="required"  slim>
                            <v-text-field v-if="isFocus" outlined dense placeholder="Password" :error-messages="errors" v-model="registorModel.password"></v-text-field>
                        </ValidationProvider>
                        <p class="commentTipDetail_loginForm__note" v-if="isFocus">Please access our Privacy Policy to learn what personal data Disqus collects and your choices about how it is used. All users of our service are also subject to our Terms of Service.</p>
                        <v-btn v-if="isFocus" class="commentTipDetail_loginForm__btn" :disabled="invalid">Sign Up</v-btn>
                </ValidationObserver>
            </div>
        </div>
        <div class="commentTipDetail_bottom">
            <div class="commentTipDetail_bottom__text">Be the first to comment.</div>
            <div class="commentTipDetail_bottom__info">
                <span><v-icon style="font-size:22px">mdi-email-outline</v-icon>Subscribe</span>
                <span><v-icon style="font-size:22px">mdi-disqus</v-icon>Subscribe</span>
                <span><v-icon style="font-size:22px">mdi-alert</v-icon>Subscribe</span>
                <span style="float:right">
                    <img src="https://c.disquscdn.com/next/embed/assets/img/sprite.654110a9206fd22f08cca0798e34a65e.png" width="75">
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CommentTipDetail',
    data() {
        return {
            content: '',
            buttonsJodit: ['image', '|', 'bold', 'underline', 'italic', 'strikethrough','link', 'preview', 'source'],
            recommendNum: 0,
            isFocus: false,
            registorModel: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        recommend () {
            this.recommendNum = this.recommendNum === 1 ? 0 : 1
        },
        focusName () {
            if (!this.isFocus) this.$refs.obs.reset()
            this.isFocus = true
            
        }
    }
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
    &_comment {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
        &Avatar {
            margin-right: 15px;
        }
        &Editor {
            width: 100%;
            .jodit-container {
                min-height: 100px !important;
                height: 120px !important;
            }
            .jodit-workplace {
                min-height: 50px !important;
                height: 80px !important;
            }
            .jodit-status-bar {
                display: none;
            }
        }
    }
    &_login {
        display: flex;
        padding-left: 65px;
        padding-bottom: 50px;
        &IconGroup {
            width: 15%;
            &__text {
                font-size: 12px;
                font-weight: bold;
                color: #656c7a;
                margin-bottom: 10px
            }
            &__btn {
                margin-right: 5px;
            }
        }
        &Form {
            width: 85%;
            margin-left: 15px;
            &__text {
                font-size: 12px;
                font-weight: bold;
                color: #656c7a;
                margin-bottom: 10px
            }
            .v-btn__content {
                color: white;
            }
            &__btn {
                float: right;
                background-color: #007aff !important;
            }
            &__input {
                display: block;
                margin-top: 10px;
                .v-messages__message {
                    color: red !important;
                }
            }
            &__note {
                font-size: 13px;
                color: #687a86;
            }
        }
    }
    &_bottom {
        &__text {
            margin: auto;
            width: 30%;
            text-align: center;
            line-height: 107px;
            font-size: 15px;
            color: #687a86;
            font-weight: 600;
        }
        &__info {
            border-top: 2px solid #e7e9ee;
            padding: 7px 0 10px;
            font-size: 12px;
            color: #687a86;
            font-weight: 700;
        }
    }
}
</style>