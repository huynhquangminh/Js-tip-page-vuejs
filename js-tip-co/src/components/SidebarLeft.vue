<template>
    <div class="sidebarLeft">
        <div class="sidebarLeft_partners">
            <div class="sidebarLeft_partners__title">Partners</div>
            <div class="sidebarLeft_partners__content">
                Looking to transition to Product Manager?
                Check The Product Index. and read the best pieces of content about Product Management.
            </div>
        </div>
        <div class="sidebarLeft_tips">
            <v-card>
                <v-card-title>
                    <div class="sidebarLeft_tips__title">
                       Popular Tips
                    </div>
                </v-card-title>
                <v-card-text>
                    <ul class="sidebarLeft_tips__content">
                        <li class="sidebarLeft_tips__contentItem" v-for="(item, index) in 5" :key="index">
                            <div class="sidebarLeft_tips__contentNum">{{index+ 1}}</div> <span class="sidebarLeft_tips__contentText">What is the JavaScript ternary operator?</span>
                        </li>
                    </ul>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SidebarLeft',
    components: {},
};
</script>
<style lang="scss">
.sidebarLeft {
    width: 348px;
    &_partners {
        &__title {
            font: 350 20px/1.5 'Roboto Mono', monospace;
            margin-bottom: 20px;
        }
        &__content {
            border: 1px solid #ccc;
            margin: 10px 0;
            display: block;
            padding: 11px;
        }
    }
    &_tips {
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 2px 2px 1px #cecece;
        margin-top: 80px;
        &__title{
            font: 400 20px/1.5 "Roboto Mono",monospace;
        }
        &__content {
            margin-top: 20px;
            &Item {
                display: flex;
                margin-bottom: 15px;
            }
            &Num {
                width: 50px;
                height: 50px;
                border-radius: 4px;
                background-color: #29293f;
                font-family: roboto mono,monospace;
                font-size: 24px;
                color: #f8f8f4;
                text-align: center;
                line-height: 50px;
                margin: 0 15px 0 0;
            }
            &Text {
                font-size: 16px;
                color: #242424;
            }
        }
    }
}
</style>