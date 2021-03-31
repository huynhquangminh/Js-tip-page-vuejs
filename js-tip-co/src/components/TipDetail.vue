<template>
    <div class="tipDetail" sticky-container>
        <div
            class="sticky"
            v-sticky
            sticky-offset="{top: 275, bottom: 127}"
            sticky-side="both"
            sticky-z-index="20"
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
        <div class="tipDetail_top">
            <div class="tipDetail_topTitle">What is the JavaScript ternary operator?</div>
            <div class="tipDetail_topInfo">
                By
                <span>@loverajoel</span> on Feb 2, 2021
            </div>
        </div>
        <div class="tipDetail_content">
            <div class="tipDetail_contentData" v-html="htmlText"></div>
        </div>
        <div class="tipDetail_book">
            <div class="tipDetail_book__content">
                 <div class="tipDetail_bookImg">
                    <img src="https://www.jstips.co/assets/images/book.png" width="250" />
                </div>
                <div class="tipDetail_bookInfo">
                    <span> MEET THE NEW JSTIPS BOOK</span> <br>
                    <a class="tipDetail_bookInfo_title" href="" >The book to ace the JavaScript Interview.</a>
                    <p>
                        A short book with 100 answers designed to boost your knowledge and help you ace the technical interview within a few days.
                    </p>
                    <a class="tipDetail_bookInfo_btn" href="" >GET THE BOOK NOW </a>
                    <a class="tipDetail_bookInfo_btn2" href="" ><img src="https://www.jstips.co/book/assets/bestseller.png" width="300" /> </a>
                    
                </div>
            </div>
        </div>
        <div class="tipDetail_related">
            <RelatedTips />
        </div>
    </div>
</template>
<script>
import RelatedTips from '../components/RelatedTips.vue';
export default {
    name: 'TipDetail',
    components: {
        RelatedTips,
    },
    data() {
        return {
            htmlText: `<p>The ternary operator is a shortcut for the&nbsp;<code class="language-plaintext highlighter-rouge">if</code>&nbsp;statement. It consists of three operands; a question mark, a condition, and an expression to execute if the condition is true, followed by a colon and another expression to execute if it&rsquo;s false.</p>
<pre class="highlight"><code><span class="kd">let</span> <span class="nx">age</span> <span class="o">=</span> <span class="mi">26</span><span class="p">;</span>

<span class="c1">// condition ? expression if true : expression if false</span>
<span class="kd">let</span> <span class="nx">drink</span> <span class="o">=</span> <span class="p">(</span><span class="nx">age</span> <span class="o">&gt;=</span> <span class="mi">21</span><span class="p">)</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">Beer</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">Juice</span><span class="dl">"</span><span class="p">;</span>

<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">drink</span><span class="p">);</span> <span class="c1">// "Beer"</span>

<span class="c1">// Equivalent to:</span>
<span class="kd">let</span> <span class="nx">drink</span><span class="p">;</span>
<span class="k">if</span> <span class="p">((</span><span class="nx">age</span> <span class="o">&gt;=</span> <span class="mi">21</span><span class="p">))</span> <span class="p">{</span>
  <span class="nx">drink</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Beer</span><span class="dl">"</span><span class="p">;</span>
<span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
  <span class="nx">drink</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Juice</span><span class="dl">"</span><span class="p">;</span>
<span class="p">}</span>

<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">drink</span><span class="p">);</span> <span class="c1">// "Beer"</span></code></pre>`,
        };
    },
};
</script>
<style lang="scss">
.tipDetail {
    // display: flex;
    margin: auto;
    margin-top: 30px;
    // width: 75%;
    &_top {
        width: 40%;
        margin: auto;
        &Title {
            letter-spacing: -1px;
            font-family: roboto mono, monospace;
            font-size: 60px;
            font-weight: bold;
            line-height: 1.2;
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
        // height: 2000px;
        width: 65%;
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
        left: 100px !important;
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
}
</style>