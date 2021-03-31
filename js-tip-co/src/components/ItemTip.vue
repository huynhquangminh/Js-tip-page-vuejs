<template>
    <div class="itemTip">
        <v-card>
            <v-card-title>
                <div class="itemTip_title">@loverajoel in <span class="itemTip_title__course">Javascript</span></div>
            </v-card-title>
            <v-card-text>
                <div class="itemTip_content">
                    <div class="itemTip_content__title">
                        <h2>What is the JavaScript ternary operator?</h2>
                    </div>
                    <div class="itemTip_content_des">
                        The ternary operator is a shortcut for the if statement.
                    </div>
                </div>
            </v-card-text>
            <v-card-actions class="itemTip_action">
                <a class="itemTip_action__link" @click="navigation">Read More →</a>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'ItemTip',
    components: {},
    methods: {
        navigation () {
            // type
            switch (this.$route.name) {
                case 'home' || 'javascript':
                    this.$router.push({
                        name: 'javascriptDetail',
                        params: { id: 123 },
                    })
                    break;
                case 'react':
                    this.$router.push({
                        name: 'reactDetail',
                        params: { id: 123 },
                    })
                    break;
                case 'angular':
                    this.$router.push({
                        name: 'angularDetail',
                        params: { id: 123 },
                    })
                    break;
                case 'vuejs':
                    this.$router.push({
                        name: 'vueDetail',
                        params: { id: 123 },
                    })
                    break;
                case 'more':
                    this.$router.push({
                        name: 'moreDetail',
                        params: { id: 123 },
                    })
                    break;
                default:
                    break;
            }
        }
    }
};
</script>
<style lang="scss">
.itemTip {
    width: 345px;
    border-radius: 4px;
    border-top: 2px solid;
    border-color: #f9d732;
    background: #fff;
    box-shadow: 0 2px 2px 1px #cecece;
    &_title {
        font-size: 14px;
        &__course {
            font-weight: bold;
        }
    }
    &_content {
        margin-bottom: 20px;
        color: #242424 !important;
        &__title {
            font-weight: bold;
            text-decoration: none;
            margin: 15px 0;
        }
    }
    &_action {
        background: #fbfbfb;
        &__link {
            font-weight: bold;
            text-decoration: none;
            color: #242424;
            cursor: pointer;
        }
    }
    &:hover {
        box-shadow: 2px 2px 2px 1px #cecece;
    }
}
</style>