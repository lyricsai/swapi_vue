<template>
    <k-dialog
        :show="dialogSearchVisible"
        @update:show="dialogSearchVisible = false"
    >
        <search-bar
            ref="search__input"
            @update:show="(bool) => (dialogSearchVisible = bool)"
            @update:searchInput="(searchInput) => (searchQuery = searchInput)"
        />
    </k-dialog>
    <k-button class="search__button" @click="showSearch">Search </k-button>
    <k-button class="search__button" @click="resetSearchQuery">Reset </k-button>
    <template v-if="isLoading">
        <p>Loading Data...</p>
    </template>
    <template v-if="items">
        <div class="items__wrapper">
            <div class="items__info">
                <strong>{{ itemClass }}</strong> of the saga:
            </div>
            <div v-if="!items.length">No such data</div>
            <ul>
                <router-link
                    v-for="item in items"
                    :key="item"
                    :to="{
                        path: `${itemClass}/${item.url.match(/\d/g).join('')}`,
                    }"
                >
                    <li class="item">
                        <h2>{{ item.name ?? item.title }}</h2>
                    </li></router-link
                >
            </ul>

            <ul class="page__wrapper">
                <k-button
                    :disabled="page === 1"
                    @click.prevent="changePage(page - 1)"
                    >Back</k-button
                >

                <li
                    v-for="pageNumber in totalPages"
                    :key="pageNumber"
                    class="page"
                    :class="{ currentPage: page === pageNumber }"
                    @click="changePage(pageNumber)"
                >
                    <router-link
                        :to="{ name: itemClass, query: { page: pageNumber } }"
                    >
                        <k-button>{{ pageNumber }}</k-button></router-link
                    >
                </li>
                <k-button
                    :disabled="page === totalPages"
                    @click.prevent="changePage(page + 1)"
                    >Forward</k-button
                >
            </ul>
        </div>
    </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchData, fetchingOptions } from "@/services/api";
import SearchBar from "@/components/SearchBar.vue";

export default defineComponent({
    name: "ItemsView",
    components: { SearchBar },
    data: () => {
        return {
            items: null,
            isLoading: false,
            pageNumber: 1,
            totalPages: 1,
            limit: 10,
            page: 1,
            searchQuery: "",
            dialogSearchVisible: false,
        };
    },

    mounted() {
        window.addEventListener("popstate", this.checkState);
        this.page = Number(this.$route.query?.page) || 1;
        this.searchQuery = (this.$route.query?.search || "") as string;
        this.getItems();
    },

    methods: {
        async getItems() {
            try {
                this.isLoading = true;
                this.items = null;

                const query: { page?: number; search?: string } = {};
                if (this.page !== 1) query.page = this.page;
                if (this.searchQuery) query.search = this.searchQuery;

                if (query.page || query.search) {
                    this.$router.replace({
                        name: this.itemClass,
                        query: query,
                    });
                }

                const data = await fetchData(
                    fetchingOptions[this.routeName],
                    query
                );

                this.items = data.results;

                this.totalPages = Math.ceil(data.count / this.limit);
            } catch (error) {
                Promise.reject(error);
            } finally {
                this.isLoading = false;
            }
        },
        showSearch() {
            return (this.dialogSearchVisible = true);
        },
        resetSearchQuery() {
            this.searchQuery = "";
        },
        changePage(pageNumber) {
            if (pageNumber < 1 || pageNumber > this.totalPages) return;
            if (this.page === pageNumber) return;
            this.page = pageNumber;
        },
        checkState() {
            this.page = Number(this.$route.query?.page) || 1;
            this.searchQuery = (this.$route.query?.search || "") as string;
        },
    },

    computed: {
        routeName() {
            return this.$route.name as string;
        },
        itemClass() {
            return this.routeName;
        },
        routeQuery() {
            return this.$route.query;
        },
    },

    watch: {
        routeName() {
            this.isLoading = true;
            document.title = this.itemClass;
            this.searchQuery = "";
        },
        searchQuery() {
            if (this.page === 1) this.getItems();
            this.changePage(1);
        },
        page() {
            this.getItems();
        },
    },

    beforeUnmount() {
        window.removeEventListener("popstate", this.checkState);
    },
});
</script>

<style lang="scss" scoped>
.items__info {
    text-transform: capitalize;
}

.items__wrapper {
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.search {
    &__button {
        margin: 1rem;
    }
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

.item {
    padding: 1rem;
    margin: 1rem;
    min-width: 10rem;
    max-width: 25rem;
    box-shadow: 1px -2px 4px gray;
}

ul {
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
}

.page {
    transition: all 0.3s ease 0s;
    &.currentPage button {
        background: #42b983;
        border-color: transparent;
        color: #fff;
    }
    &:hover {
        background: #42b983;
        color: #fff;
        border-color: transparent;
    }
}

@media (max-width: 800px) {
    .page {
        display: none;
        &.currentPage {
            display: block;
        }
    }
}
</style>
