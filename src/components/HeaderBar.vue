<template>
    <header class="header">
        <router-link to="/" class="header__logo"
            ><div class="header__logo_container"><h2>SW-API</h2></div>
        </router-link>
        <div class="header__menu menu">
            <button
                class="icon-menu header__burger"
                type="button"
                @click="toggleMenu"
                ref="iconMenu"
            >
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <nav-bar v-show="desktop || navBarVisible" />
        </div>
        <div class="header__actions" id="header__actions">
            <k-button class="theme">Th</k-button>
        </div>
    </header>
</template>

<script>
import NavBar from "./NavBar.vue";
import KButton from "./ui/KButton.vue";

export default {
    components: { NavBar, KButton },
    data: () => {
        return { navBarVisible: true };
    },
    methods: {
        toggleMenu() {
            this.$refs.iconMenu.classList.toggle("_active");
            return (this.navBarVisible = !this.navBarVisible);
        },
        // resizeHandler() {
        //     return window.innerWidth > 995 ? true : false;
        // },
    },
    computed: {
        desktop() {
            return window.innerWidth > 995 ? true : false;
        },
    },
    // mounted() {
    //     window.addEventListener("resize", this.eventHandler);
    // },
    // beforeUnmount() {
    //     window.removeEventListener("resize", this.eventHandler);
    // },
};
</script>

<style lang="scss" scoped>
h1,
.header__logo h2 {
    color: #42b983;
    font-size: 2rem;
    transition: all 0.3s ease 0s;
    text-align: left;
    &:hover {
        font-size: 2.3rem;
    }
}
.header {
    position: relative;
    padding: 1rem;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin-bottom: 1rem;
    &__actions {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    &__logo_container {
        width: 200px;
    }
    &__menu {
        @media (max-width: 995px) {
            order: -1;
        }
    }
}
.icon-menu {
    display: none;
    @media (max-width: 995px) {
        display: block;
        position: relative;
        min-width: 57px;
        height: 30px;
        z-index: 5;
        border: none;
        background: none;
        color: gray;
        transition: all 0.3s ease 0s;
        &:hover {
            background: #fff;
            color: #42b983;
        }
        span {
            transition: all 0.3s ease 0s;
            top: calc(50% - 1px);
            left: 0px;
            position: absolute;
            width: 100%;
            height: 2px;
            background: gray;
            transition: all 0.3s ease 0s;
            &:first-child {
                top: 0px;
                width: 50%;
            }
            &:last-child {
                top: auto;
                bottom: 0px;
                width: 70%;
            }
        }
        &._active {
            span {
                transform: scale(0);
                width: 100%;
                &:first-child {
                    transform: rotate(-45deg);
                    top: calc(50% - 1px);
                }
                &:last-child {
                    transform: rotate(45deg);
                    bottom: calc(50% - 1px);
                }
            }
        }
    }
}
.search {
    &__input {
        display: none;
        font-size: 2rem;
        margin: 2rem;
        border: 2px solid gray;
        border-radius: 0.5rem;
        width: 80%;
        height: 3rem;
        padding: 0 0 0 1rem;

        &_container {
            position: absolute;
            width: 80%;
            top: 4rem;
            left: 10%;
            margin: 0 auto;
            z-index: 100;
            background: lightgray;
            border-radius: 0.5rem;
        }
    }
}

@media (max-width: 600px) {
    .theme,
    .search {
        display: none;
    }
}
</style>
