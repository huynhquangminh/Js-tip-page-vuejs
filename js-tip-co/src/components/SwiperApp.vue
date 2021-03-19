<template>
    <div class="swiperVue">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
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
    data: function () {
        return {
            swiperOption: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        };
    },
};
</script>
<style lang="scss">
.swiperVue {
    width: 100%;
    height: 755px;
    background-color: red;
    margin-top: 100px;
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
</style>