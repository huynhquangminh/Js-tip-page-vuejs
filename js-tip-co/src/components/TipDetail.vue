<template>
    <div class="tipDetail" >
        <div class="tipDetail_groupContent" sticky-container>
             <div class="tipDetail_groupContent__sticky">
                <div
                    ref="sticky"
                    class="sticky"
                    v-sticky="isSticky"
                    sticky-side="both"
                    sticky-z-index="10"
                >
                <ul class="sticky_list">
                    <li class="sticky_listShare">
                        <img src="../assets/share.svg" />
                    </li>
                    <li class="sticky_listItem">
                        <img src="../assets/twitter.svg" />
                    </li>
                    <li class="sticky_listItem">
                        <img src="../assets/facebook.svg" />
                    </li>
                    <li class="sticky_listItem">
                        <img src="../assets/linkedin.svg" />
                    </li>
                </ul>
                </div>
            </div>
            <div class="tipDetail_groupContent__detail">
                <div class="tipDetail_top">
                    <div class="tipDetail_topTitle">What is the JavaScript ternary operator?</div>
                    <div class="tipDetail_topInfo">
                        By
                        <span>@loverajoel</span> on Feb 2, 2021
                    </div>
                </div>
                <div class="tipDetail_content">
                    <div class="tipDetail_contentData" v-html="htmlText"></div>
                    <prism-editor
                        class="tipDetail_prismEditor"
                        v-model="code"
                        :highlight="highlighter"
                        :readonly="true"
                        line-numbers
                    ></prism-editor>
                </div>    
            </div>
        </div>
        <div class="tipDetail_book">
            <div class="tipDetail_book__content">
                <div class="tipDetail_bookImg">
                    <img src="https://www.jstips.co/assets/images/book.png" width="250" />
                </div>
                <div class="tipDetail_bookInfo">
                    <span>MEET THE NEW JSTIPS BOOK</span>
                    <br />
                    <a
                        class="tipDetail_bookInfo_title"
                        href
                    >The book to ace the JavaScript Interview.</a>
                    <p>A short book with 100 answers designed to boost your knowledge and help you ace the technical interview within a few days.</p>
                    <a class="tipDetail_bookInfo_btn" href>GET THE BOOK NOW</a>
                    <a class="tipDetail_bookInfo_btn2" href>
                        <img src="https://www.jstips.co/book/assets/bestseller.png" width="300" />
                    </a>
                </div>
            </div>
        </div>
        <div class="tipDetail_related">
            <RelatedTips />
        </div>
        <div class="tipDetail_comment">
            <CommentTipDetail />
        </div>
    </div>
</template>
<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
import RelatedTips from '../components/RelatedTips.vue';
import CommentTipDetail from '../components/CommentTipDetail.vue';
export default {
    name: 'TipDetail',
    components: {
        RelatedTips,
        PrismEditor,
        CommentTipDetail
    },
    data() {
        return {
            isSticky: true,
            code: `
    let age = 26;
    // condition ? expression if true : expression if false
    let drink = (age >= 21) ? "Beer" : "Juice";
    console.log(drink); // "Beer"
    // Equivalent to:
    let drink;
    if ((age >= 21)) {
    drink = "Beer";
    } else {
    drink = "Juice";
    }
    console.log(drink); // "Beer"`,
            htmlText: `<p>The ternary operator is a shortcut for the&nbsp;<code class="language-plaintext highlighter-rouge">if</code>&nbsp;statement. It consists of three operands; a question mark, a condition, and an expression to execute if the condition is true, followed by a colon and another expression to execute if it&rsquo;s false.</p>`,
        };
    },
    mounted () {},
    methods: {
        highlighter(code) {
            return highlight(code, languages.js); //returns html
        },
    },
};
</script>
<style lang="scss">
.tipDetail {
    // display: flex;
    margin: auto;
    margin-top: 30px;
    // width: 75%;
     &_groupContent {
        display: flex;
        &__sticky {
            width: 100px;
        }
        &__detail {
            width: 89%;
            margin: auto;
        }
    }
    &_top {
        width: 65%;
        max-width: 1150px;
        min-width: 730px;
        margin: auto;
        &Title {
            letter-spacing: -1px;
            font-family: roboto mono, monospace;
            font-size: 60px;
            font-weight: bold;
            line-height: 1.2;
            color: #29293f;
            margin-bottom: 30px;
            width: 70%;
            margin: auto;
        }
        &Info {
            width: 70%;
            margin: auto;
            font-size: 16px;
            color: #1f1e30;
            span {
                font-weight: bold;
            }
        }
    }
    &_content {
        // height: 2000px;
        width: 65%;
        max-width: 1150px;
        min-width: 730px;
        // margin: 50px 0 20px 0;
        margin: auto;
        &Data {
            padding: 50px 0 20px 0;
            width: 75% !important;
            margin: auto;
        }
    }
    &_book {
        background: #221a5a;
        margin-top: 50px;
        &__content {
            display: flex;
            width: 60%;
            margin: auto;
        }
        &Img {
            margin: 30px 15px 30px 0;
        }
        &Info {
            margin-top: 100px;
            width: 55%;
            span {
                font-size: 12px;
                line-height: 1;
                color: #fff;
                display: block;
            }
            &_title {
                font-weight: 400;
                font-size: 36px;
                color: #fda9a4;
                text-decoration: none;
                display: block;
                line-height: 1;
                margin: 0 0 20px 0;
                &:hover {
                    text-decoration: underline;
                }
            }
            p {
                font-size: 18px;
                line-height: 1.3;
                color: #fff;
                display: block;
                margin: 0 0 40px 0;
            }
            &_btn {
                width: 215px;
                height: 50px;
                font-size: 18px;
                line-height: 1;
                color: #221a5a;
                background: #fed06f;
                border-radius: 5px;
                padding: 10px 10px;
                display: flex;
                align-items: center;
                text-decoration: none;
                float: left;
                margin-right: 15px;
                &:hover {
                    background: #f8d646;
                }
            }
            &_btn2 {
                display: flex;
                // height: 50px;
                background: white;
                width: 303px;
                border-radius: 3px;
                // float: right;
            }
        }
    }
    &_related {
        margin: 0 0 20px 0;
    }
    .vue-sticky-placeholder {
        padding-top: 10px !important;
    }
    .sticky {
        // width: 50px;
        // left: 100px !important;
        margin-left: 50px;
        display: flex;
        &_list {
            list-style: none;
            &Share {
                background: #29293f;
                border-radius: 2px 2px 0 0;
                cursor: initial;
            }
            &Item {
                cursor: pointer;
                &:hover {
                    background: #eaeaea;
                }
            }
            li {
                padding: 15px;
                img {
                    display: block;
                }
            }
        }
    }
    &_prismEditor {
        width: 75%;
        margin: auto;
        background: #2d2d2d;
        color: #ccc;
        /* you must provide font-family font-size line-height. Example: */
        font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
        font-size: 14px;
        line-height: 1.5;
        padding: 5px;
    }
    .prism-editor__textarea:focus {
        outline: none;
    }
    &_comment {
        width: 65%;
        max-width: 1150px;
        min-width: 730px;
        margin: auto;
    }
}
@media (max-width: 770px) {
    .tipDetail {
        &_top {
            width: 80%;
            text-align: center;
            &Title {
                font-size: 36px;
            }
        }
        &_book {
            overflow: hidden;
            display: none;
        }
        &_content {
            width: 100%;
        }
         &_related {
            margin: 0 0 20px 0;
            .itemTip {
                margin-bottom: 20px;
            }
        }
    }
}
</style>