<template>
    <header class="header">
        <div class="header_content">
            <div class="header_contentLogo">
                <img
                    class
                    src="https://www.jstips.co/assets/images/logo.svg"
                    width="80"
                    height="80"
                />
            </div>
            <div class="header_contentAction">
                <v-btn  class="header_contentAction_btn">
                    <span>Submit your tip</span>
                </v-btn>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <span v-bind="attrs" v-on="on">xxx</span>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in listLanguage" :key="index">
                            <v-list-item-title>{{ item }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
           
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    data: function () {
        return {
            listLanguage: [],
            textLanguage: ''
        }
    },
    mounted() {
        this.listLanguage = ['English', '中国大陆', 'Español', 'Español']
        this.textLanguage = 'English'
    }
};
</script>
<style lang="scss">
.header {
    width: 100%;
    background-color: #f9d732;
    height: 100px;
    &_content {
        margin: auto;
        width: 65%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // padding-right: 36px;
        &Logo {
        }
        &Action {
            &_btn {
                margin-left: 10px;
                margin-right: 20px;
            }
            .v-btn__content {
                text-transform: none;
                font-size: 14px;
                font-weight: 500;
                line-height: 40px;
                color: #242424;
                text-decoration: none;
            }
        }
    }
}
</style>