<template>
    <div class="footer">
        <div class="footer_content">
            <div class="footer_content_title">
                <div
                    class="footer_content_title__text"
                >JS Tips is a collection of useful daily JavaScript tips that will allow you to improve your code writing</div>
                <a class="footer_content_title__link footer_content_title__linkLeft">About</a>
                <a class="footer_content_title__link">Contact</a>
            </div>
            <div class="footer_content_fllow">
                <div class="footer_content_fllow_block">
                    <img
                        class="footer_content_fllow_icon"
                        src="https://www.jstips.co/assets/images/icon-twitter.svg"
                        width="20"
                    />
                    <span class="footer_content_fllow_text">Twitter</span>
                </div>
                <div class="footer_content_fllow_block">
                    <img
                        class="footer_content_fllow_icon"
                        src="https://www.jstips.co/assets/images/icon-github.svg"
                        width="20"
                    />
                    <span class="footer_content_fllow_text">Github</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
};
</script>
<style lang="scss">
.footer {
    background: #29293f;
    padding: 50px 0 80px;
    &_content {
        margin: auto;
        width: 75%;
        display: flex;
        justify-content: space-between;
        &_title {
            width: 48%;
            &__text {
                font-size: 16px;
                margin-bottom: 30px;
                line-height: 1.44;
                color: #fff;
                font-weight: bold;
            }
            &__link {
                font-size: 14px;
                font-weight: bold;
                color: #f9d732;
                &Left {
                    margin-right: 25px;
                }
            }
        }
        &_fllow {
            &_text {
                color: #f8f8f4;
                &:hover {
                    color: #f9d732;
                }
            }
            &_icon {
                margin-right: 10px;
            }
            &_block {
                margin-bottom: 20px;
                display: flex;
            }
        }
    }
}
@media (max-width: 670px) {
    .footer {
        &_content {
            display: block;
            &_title {
                width: 100%;
                text-align: center;
                margin-bottom: 30px;
            }
            &_fllow {
                display: flex;
                justify-content: center;
                &_block {
                    margin-right: 50px;
                }
            }
        }
    }
}
</style>
