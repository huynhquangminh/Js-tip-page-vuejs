<template>
    <div class="home">
        <div class="home_content">
            <div class="home_tips">
                <div class="home_tips__title">Latest Tips</div>
                <div class="home_tips__list">
                    <div class="home_tips__listItem" v-for="(value, index) in 6" :key="index">
                        <ItemTip></ItemTip>
                    </div>
                </div>
                <div class="home_tips__load-more">Load me more tips</div>
            </div>
            <div class="home_left">
                <SidebarLeft></SidebarLeft>
            </div>
        </div>
        <div class="home_swiper">
            <SwiperVue />
        </div>
    </div>
</template>
<script>
import ItemTip from '../components/ItemTip.vue';
import SidebarLeft from '../components/SidebarLeft.vue';
import SwiperVue from '../components/SwiperApp.vue';
export default {
    name: 'Home',
    components: {
        ItemTip,
        SidebarLeft,
        SwiperVue
    },
    data: function () {
        return {};
    },
};
</script>
<style lang="scss">
.home {
    // height: 1900px;
    padding: 60px 0 0;
    &_content {
      display: flex;
      margin: auto;
      width: 75%;
      flex-wrap: wrap;
      @media (max-width: 670px) {
            justify-content: center;
        }
    }
    &_tips {
        min-width: 350px;
        width: 65%;
        margin-right: 5px;
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
            @media (max-width: 670px) {
                overflow: auto;
                width: 100%
            }
        }
    }
    &_left {
        width: 30%;
        margin-top: 50px;
        @media (max-width: 670px) {
            width: auto;
        }
    }
    &_swiper
    {
        width: 100%;
        height: 755px;
        margin-top: 100px;
        display: flex;
    }
}
</style>