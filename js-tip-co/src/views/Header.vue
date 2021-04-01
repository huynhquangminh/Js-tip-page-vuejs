<template>
    <div>
        <header class="header">
            <div class="header_content">
                <div class="header_contentLogo">
                    <a href="/home">
                        <img
                            src="https://www.jstips.co/assets/images/logo.svg"
                            width="80"
                            height="80"
                        />
                    </a>
                </div>
                <div class="header_contentAction">
                    <v-btn class="header_contentAction_btn">
                        <span>Submit your tip</span>
                    </v-btn>
                    <v-menu offset-y :left="true" nudge-right="5" nudge-top="-10">
                        <template v-slot:activator="{ on, attrs }">
                            <span
                                v-bind="attrs"
                                v-on="on"
                                class="header_contentAction_language"
                            >{{textLanguage}}</span>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in listLanguage" :key="index">
                                <v-list-item-title v-ripple @click="textLanguage = item">{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
                <div class="header_burger" id="burger">
                    <span class="header_burger__open" id="burger-open" @click="openNav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                            <g fill="#252a32" fill-rule="evenodd">
                                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                            </g>
                        </svg>
                    </span>
                    <span class="header_burger__close" id="burger-close" @click="closeNav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                            <path
                                fill="#252a32"
                                fill-rule="evenodd"
                                d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="header_menu" id="menu">
                <ul class="header_menu_list" >
                    <li> <span class="header_menu_listTitle">Language</span> </li>
                    <li class="header_menu_listLanguage" v-for="(item, index) in listLanguage" :key="index">{{ item }}</li>
                    <li> <span class="header_menu_listTitle">Categories</span></li>
                    <li><a href="/javascript" class="header_menu_list__link">Javascrip</a></li>
                    <li><a href="/react" class="header_menu_list__link">React</a></li>
                    <li><a href="/angular" class="header_menu_list__link">Angular</a></li>
                    <li><a href="/vuejs" class="header_menu_list__link">VueJs</a></li>
                    <li><a href="/more" class="header_menu_list__link">More</a></li>
                </ul>
            </div>
        </header>
        <Nav class="header_nav"  />
    </div>
</template>
<script>
import Nav from './Nav.vue';
export default {
    name: 'Header',
    components: {
        Nav,
    },
    data: function () {
        return {
            listLanguage: [],
            textLanguage: '',
        };
    },
    mounted() {
        this.listLanguage = ['English', '中国大陆', 'Español', '台灣'];
        this.textLanguage = 'English';
    },
    methods: {
        openNav () {
            const burgerOpen = document.getElementById("burger-open");
            const burgerClose = document.getElementById("burger-close");
            const menu = document.getElementById("menu");
            burgerOpen.style.display = 'none'
            burgerClose.style.display = 'flex'
            menu.style.display = 'block'
            menu.classList.add("header_menuActiveOpen")
        },
        closeNav () {
            const burgerOpen = document.getElementById("burger-open");
            const burgerClose = document.getElementById("burger-close");
            const menu = document.getElementById("menu");
            burgerOpen.style.display = 'flex'
            burgerClose.style.display = 'none'
            menu.classList.remove("header_menuActiveOpen")
        }
    }
};
</script>
<style lang="scss">
.header {
    width: 100%;
    background-color: #f9d732;
    &_content {
        margin: auto;
        width: 75%;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // padding-right: 36px;
        &Action {
            width: 300px;
            align-items: center;
            &_btn {
                margin-right: 40px;
            }
            .v-btn__content {
                text-transform: none;
                font-size: 14px;
                font-weight: bold;
                line-height: 40px;
                color: #242424;
            }
            &_language {
                &::after {
                    content: '';
                    background: url(https://www.jstips.co/assets/images/arrow_down.svg)
                        no-repeat;
                    width: 12px;
                    height: 7px;
                    margin: 0 0 1px 10px;
                    display: inline-block;
                }
            }
        }
    }
    &_burger {
        display: none;
    }
    &_menu {
        width: 80%;
        text-align: right;
        margin: auto;
        height: 0px;
        overflow: hidden;
        transition: all 0.75s ease;
        &_list {
            line-height: 1.8;
            a {
                text-decoration: none;
                &:hover {
                    font-weight: bold;
                }
            }
            &Title {
                font-size: 20px;
                font-weight: bold;
            }
            &Language {
                cursor: pointer;
               &:hover {
                    font-weight: bold;
                } 
            }
        }
    }
    &_menuActiveOpen {
        height: 300px;
    }
}

@media (max-width: 770px) {
    .header {
        &_burger {
            display: flex;
            cursor: pointer;
            &__close {
                display: none;
            }
        }
        &_content {
            &Action {
                display: none;
            }
        }
        &_nav {
            display: none;
        }
    }
}
</style>