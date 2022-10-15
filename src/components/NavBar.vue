<template>
    <nav ref="nav">
        <router-link to="/">Home</router-link>
        <router-link
            class="link__name"
            v-for="link in links"
            :to="{ path: `/${link.name}` }"
            :key="link.name"
            >{{ link.name }}
        </router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: "people" },
                { name: "planets" },
                { name: "films" },
                { name: "species" },
                { name: "starships" },
                { name: "vehicles" },
            ],
        };
    },
    props: {
        show: { type: Boolean, requried: true },
    },
    // computed: {
    // },
    methods: {
        showNav() {
            if (this.show) {
                this.$refs.nav.style.dysplay = "block";
            } else {
                this.$refs.nav.style.dysplay = "none";
            }
            console.log(this.show);
        },
    },
    mounted() {
        this.showNav();
    },
};
</script>

<style lang="scss" scoped>
nav {
    display: none;
    @media (min-width: 995px) {
        display: block;
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    & a {
        &::after {
            content: " | ";
            color: #42b983;
        }
        &:last-child::after {
            content: "";
        }
        &:hover {
            transition: all 0.3s ease 0s;
            color: #42b983;
        }
    }
}
.link__name {
    text-transform: capitalize;
}
</style>
