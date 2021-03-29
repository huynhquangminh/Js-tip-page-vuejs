<template>
    <div>
        <header class="header">
            <div class="header_content">
                <div class="header_contentLogo">
                    <a href="/home">
                        <img src="https://www.jstips.co/assets/images/logo.svg" width="80" height="80" />
                    </a>
                </div>
                <div class="header_contentAction">
                    <v-btn class="header_contentAction_btn">
                        <span>Submit your tip</span>
                    </v-btn>
                    <v-menu offset-y :left="true" nudge-right="5" nudge-top="-10">
                        <template v-slot:activator="{ on, attrs }">
                            <span
                                v-bind="attrs"
                                v-on="on"
                                class="header_contentAction_language"
                            >{{textLanguage}}</span>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in listLanguage" :key="index">
                                <v-list-item-title v-ripple @click="textLanguage = item">{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </header>
        <Nav />
    </div>
</template>
<script>
import Nav from  './Nav.vue'
export default {
    name: 'Header',
    components: {
        Nav
    },
    data: function () {
        return {
            listLanguage: [],
            textLanguage: '',
        };
    },
    mounted() {
        this.listLanguage = ['English', '中国大陆', 'Español', '台灣'];
        this.textLanguage = 'English';
    },
};
</script>
<style lang="scss">
.header {
    width: 100%;
    background-color: #f9d732;
    &_content {
        margin: auto;
        width: 75%;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // padding-right: 36px;
        &Action {
            width: 300px;
            align-items: center;
            &_btn {
                margin-right: 40px;
            }
            .v-btn__content {
                text-transform: none;
                font-size: 14px;
                font-weight: bold;
                line-height: 40px;
                color: #242424;
            }
            &_language {
                &::after {
                    content: '';
                    background: url(https://www.jstips.co/assets/images/arrow_down.svg)
                        no-repeat;
                    width: 12px;
                    height: 7px;
                    margin: 0 0 1px 10px;
                    display: inline-block;
                }
            }
        }
    }
}
</style>