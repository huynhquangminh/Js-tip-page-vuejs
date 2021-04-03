<template>
    <div class="vueJs">
        <div class="vueJs_top">
            <div class="vueJs_top__content">
                <div class="vueJs_top__contentTitle">VueJS, How VueJS makes a copy-update-replace inside the data binding</div>
                <div
                    class="vueJs_top__contentDes"
                >In this tip I am going to show how to pass data between scopes preventing unwanted scopes created by ng-repeat and ng-if</div>
                <a class="vueJs_top__contentAction" @click="goToDetail">Read More</a>
            </div>
        </div>
        <div class="vueJs_content">
            <div class="vueJs_tips">
                <div class="vueJs_tips__title">Latest Tips</div>
                <div class="vueJs_tips__list">
                    <div class="vueJs_tips__listItem" v-for="(value, index) in 6" :key="index">
                        <ItemTip></ItemTip>
                    </div>
                </div>
                <div class="vueJs_tips__load-more">Load me more tips</div>
            </div>
            <div class="vueJs_left">
                <SidebarLeft></SidebarLeft>
            </div>
        </div>
        <div class="vueJs_swiper">
            <SwiperVue />
        </div>
    </div>
</template>
<script>
import ItemTip from '../components/ItemTip.vue';
import SidebarLeft from '../components/SidebarLeft.vue';
import SwiperVue from '../components/SwiperApp.vue';

export default {
    name: 'VueJs',
    components: {
        ItemTip,
        SidebarLeft,
        SwiperVue,
    },
    methods: {
        goToDetail () {
            this.$router.push({
                name: 'vueDetail',
                params: { id: 123 },
            })
        }
    }
};
</script>
<style lang="scss">
.vueJs {
    &_top {
        padding: 150px 0 50px 0;
        background-color: rgba(66, 185, 131);
        &__content {
            width: 85%;
            max-width: 1150px;
            margin: auto;
            &Title {
                width: 70%;
                font-size: 50px;
                font-weight: 500;
                line-height: 1.36;
                opacity: 0.9;
            }
            &Des {
                margin-top: 15px;
                margin-bottom: 25px;
            }
            &Action {
                padding: 10px 25px;
                font-weight: 700;
                color: #000;
                border: solid 2px #29293f;
                border-radius: 4px;
                text-decoration: none;
                text-align: center;
                cursor: pointer;
            }
        }
    }
    &_content {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        width: 85%;
        max-width: 1150px;
        padding: 60px 0 0;
    }
    &_tips {
        width: 65%;
        min-width: 350px;
        &__title {
            font: 400 28px/1.5 'Roboto Mono', monospace;
            margin-bottom: 15px;
        }
        &__list {
            display: flex;
            flex-wrap: wrap;
            &Item {
                margin: 0 20px 20px 0;
            }
        }
        &__load-more {
            border-radius: 4px;
            border: solid 2px #29293f;
            background-color: transparent;
            font-size: 14px;
            font-weight: bold;
            padding: 12px 20px;
            text-align: center;
            cursor: pointer;
            width: 200px;
            margin: 50px auto 0;
            &:hover {
                background-color: #29293f;
                color: #f8f8f4;
            }
        }
    }
    &_left {
        width: 30%;
        margin-top: 50px;
    }
    &_swiper {
        width: 100%;
        height: 755px;
        margin-top: 100px;
        display: flex;
    }
}
@media (max-width: 770px) {
    .vueJs {
        &_top {
            padding: 50px 0 50px 0;
            &__content {
                &Title {
                    width: auto;
                    font-size: 30px;
                }
            }
        }
        &_content {
            justify-content: center;
        }
        &_tips {
            &__load-more {
                overflow: auto;
                width: 100%
            }
        }
        &_left {
            width: auto;
        }
    }
}
</style>