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
    <template v-else>
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
                    <k-button>{{ pageNumber }}</k-button>
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
            searchQuery: "" as string | null,
            dialogSearchVisible: false,
        };
    },

    created() {
        if (!this.routeQuery.page) {
            this.$router.push({
                name: this.routeName,
                query: { ...this.routeQuery, page: 1 },
            });
        }
        this.page = Number(this.routeQuery.page);
        this.getItems();
    },

    methods: {
        async getItems() {
            try {
                this.isLoading = true;
                const data = await fetchData(fetchingOptions[this.routeName], {
                    search: this.routeQuery.search as string,
                    page: Number(this.routeQuery.page),
                });

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
            this.routeHandler();
        },
        changePage(pageNumber) {
            if (pageNumber < 1 || pageNumber > this.totalPages) return;
            this.page = pageNumber;
            this.routeHandler();
            this.getItems();
        },
        routeHandler() {
            this.$router.push({
                path: this.routeName,
                query: { search: this.searchQuery, page: Number(this.page) },
            });
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
            this.getItems();
            this.isLoading = true;
            this.searchQuery = "";
            this.page = 1;
        },
        searchQuery() {
            if (this.searchQuery) {
                this.page = 1;
                this.$router.push({
                    path: this.routeName,
                    query: { search: this.searchQuery, page: this.page },
                });
                this.getItems();
            }
        },
        routeQuery: {
            deep: true,
            handler() {
                this.searchQuery = (this.routeQuery.search as string) || "";
                this.page = Number(this.routeQuery.page) || 1;
                this.$nextTick(() => {
                    this.$router.push({
                        path: this.routeName,
                        query: { search: this.searchQuery, page: this.page },
                    });
                    this.getItems();
                });
            },
        },
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
