<template>
    <div class="javascriptDetail" sticky-container >
        <!-- sticky -->
        <div class="sticky" v-sticky sticky-offset="{top: 275, bottom: 127}" sticky-side="both" sticky-z-index="20">
            fasdfasdfadsfadsf
        </div>
        <div class="javascriptDetail_top">
       
            <div class="javascriptDetail_topTitle">What is the JavaScript ternary operator?</div>
            <div class="javascriptDetail_topInfo">
                By <span>@loverajoel</span> on Feb 2, 2021
            </div>
        </div>
        <div class="javascriptDetail_content">
            <RelatedTips />
        </div>
        
    </div>
</template>
<script>
import RelatedTips from '../components/RelatedTips.vue';
export default {
    name: 'JavascriptDetail',
    components: {
        RelatedTips,
    },
};
</script>
<style lang="scss">
.javascriptDetail {
    // display: flex;
    margin: auto;
    margin-top: 30px;
    width: 75%;
    &_top {
        width: 50%;
        margin: auto;
        &Title {
            letter-spacing: -1px;
            font-family: roboto mono, monospace;
            font-size: 60px;
            font-weight: bold;
            line-height: 1;
            color: #29293f;
            margin-bottom: 30px;
        }
        &Info {
            font-size: 16px;
            color: #1f1e30;
            span {
                font-weight: bold;
            }
        }
    }
    &_content {
        height: 2000px;
        margin: 0 0 20px 0;
        // display: flex;
    }
    &_sticky {
    //     top: 275px;
    // bottom: 127px;
    // position: relative;
    }
    .sticky {
        display: flex;
        background: #bbb;
    }
}
</style>