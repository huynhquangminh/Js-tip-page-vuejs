<template>
    <div class="swiperVue" :style="{background: listColors[indexColor].background}">
        <swiper
            ref="mySwiper"
            class="swiper swiperVue_block"
            :options="swiperOption"
            @slideChange="slideChange()"
        >
            <swiper-slide v-for="(item, index) in listCourse" :key="index">
                <div class="swiperVue_titleBig" :style="{color: listColors[indexColor].colorTitle}">
                    <span>{{item}}</span>
                </div>
                <div class="swiperVue_titleSmall">{{item}}</div>
                <div class="swiperVue_content">
                    <ul class="swiperVue_content__list">
                        <li
                            class="swiperVue_content__listItem"
                        >What is the JavaScript ternary operator?</li>
                        <li
                            class="swiperVue_content__listItem"
                        >What is the JavaScript ternary operator?</li>
                        <li
                            class="swiperVue_content__listItem"
                        >What is the JavaScript ternary operator?</li>
                    </ul>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
    name: 'SwiperVue',
    components: {
        Swiper,
        SwiperSlide,
    },
    data: () => ({
        swiperOption: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        listCourse: ['javascrip', 'vuejs', 'angular', 'reactjs', 'more'],
        listColors: [
            {
                background: 'rgba(249, 215, 50, 0.7)',
                colorTitle: 'rgba(249, 215, 50, 1)'
            },
            {
                background: 'rgba(74, 213, 255, 0.7)',
                colorTitle: 'rgba(74, 213, 255, 1)'
            },
            {
                background: 'rgba(221, 0, 3, 0.7)',
                colorTitle: 'rgba(221, 0, 3, 1)'
            },
            {
                background: 'rgba(0, 255, 153, 0.7)',
                colorTitle: 'rgba(0, 255, 153, 1)'
            },
            {
                background: 'rgba(96, 125, 139, 0.7)',
                colorTitle: 'rgba(96, 125, 139, 1)'
            },
        ],
        indexColor: 0
    }),
    methods: {
        slideChange() {
            this.indexColor = this.$refs.mySwiper.$swiper.activeIndex
        }
    },
};
</script>
<style lang="scss">
.swiperVue {
    width: 100%;
    margin: auto;
    height: 100%;
    display: flex;
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    &_block {
        width: 70%;
        display: flex;
    }
    &_titleSmall {
        font-family: roboto mono, monospace;
        font-size: 24px;
        position: absolute;
        top: 60px;
        text-transform: capitalize;
    }
    &_titleBig {
        // font-family: roboto mono, monospace;
        font-size: 250px;
        position: absolute;
        top: -140px;
        text-transform: capitalize;
    }
    &_content {
        width: 60%;
        height: auto;
        &__list {
            list-style-type: none;
            &Item {
                font-size: 18px;
                font-weight: bold;
                text-align: left;
                font-family: roboto mono, monospace;
                border-bottom: solid 1px rgba(0, 0, 0, 0.2);
                padding: 15px;
                text-transform: capitalize;
            }
        }
    }
}
</style>