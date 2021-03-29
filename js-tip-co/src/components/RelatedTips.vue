<template>
    <div class="relatedTips">
        <div class="relatedTips_title">
            <span >Related Tips</span>
        </div>
        <div class="relatedTips_list">
            <div class="relatedTips_listItem" v-for="(value, index) in 3" :key="index">
                <ItemTip></ItemTip>
            </div>
        </div>
    </div>
</template>
<script>
import ItemTip from '../components/ItemTip.vue';
export default {
    name: 'RelatedTips',
    components: {
        ItemTip
    },
}
</script>
<style lang="scss">
.relatedTips {
    max-width: 1180px;
    margin: auto;
    &_title {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        margin: 50px 30px;
    }
    &_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        &Item {
            margin-right: 20px;
        }
    }
}
</style>