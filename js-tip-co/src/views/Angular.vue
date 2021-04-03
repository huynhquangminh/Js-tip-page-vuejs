<template>
    <div class="angular">
        <div class="angular_top">
            <div class="angular_top__content">
                <div class="angular_top__contentTitle">Preventing Unwanted Scopes Creation in AngularJs</div>
                <div
                    class="angular_top__contentDes"
                >In this tip I am going to show how to pass data between scopes preventing unwanted scopes created by ng-repeat and ng-if</div>
                <a class="angular_top__contentAction" @click="goToDetail">Read More</a>
            </div>
        </div>
        <div class="angular_content">
            <div class="angular_tips">
                <div class="angular_tips__title">Latest Tips</div>
                <div class="angular_tips__list">
                    <div class="angular_tips__listItem" v-for="(value, index) in 6" :key="index">
                        <ItemTip></ItemTip>
                    </div>
                </div>
                <div class="angular_tips__load-more">Load me more tips</div>
            </div>
            <div class="angular_left">
                <SidebarLeft></SidebarLeft>
            </div>
        </div>
        <div class="angular_swiper">
            <SwiperVue />
        </div>
    </div>
</template>
<script>
import ItemTip from '../components/ItemTip.vue';
import SidebarLeft from '../components/SidebarLeft.vue';
import SwiperVue from '../components/SwiperApp.vue';

export default {
    name: 'Angular',
    components: {
        ItemTip,
        SidebarLeft,
        SwiperVue,
    },
    methods: {
        goToDetail () {
            this.$router.push({
                name: 'angularDetail',
                params: { id: 123 },
            })
        }
    }
};
</script>
<style lang="scss">
.angular {
    &_top {
        padding: 150px 0 50px 0;
        background-color: rgba(221, 0, 3);
        &__content {
            width: 85%;
            max-width: 1150px;
            margin: auto;
            color: #f8f8f4;
            &Title {
                width: 70%;
                font-size: 50px;
                font-weight: 500;
                line-height: 1.36;
                opacity: 0.9;
                color: #f8f8f4;
            }
            &Des {
                margin-top: 15px;
                margin-bottom: 25px;
            }
            &Action {
                padding: 10px 25px;
                font-weight: 700;
                color: #f8f8f4;
                border: solid 2px #f8f8f4;
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
    .angular {
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