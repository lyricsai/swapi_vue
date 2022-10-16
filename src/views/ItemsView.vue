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
    <template v-if="isLoading">
        <p>Loading Data...</p>
    </template>
    <template v-else>
        <div class="items__info">
            <strong>{{ itemClass }}</strong> of the saga:
        </div>
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
                :class="{ 'current-page': page === pageNumber }"
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

    created() {
        this.searchQuery = "";
        this.getItems();
    },

    methods: {
        async getItems() {
            try {
                this.isLoading = true;
                const data = await fetchData(fetchingOptions[this.routeName], {
                    searchFor: this.searchQuery,
                    page: this.page,
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
        changePage(pageNumber) {
            if (pageNumber < 1 || pageNumber > this.totalPages) return;
            this.page = pageNumber;
            this.getItems();
        },
    },

    computed: {
        routeName() {
            return this.$route.name as string;
        },
        itemClass() {
            return this.routeName;
        },
    },

    watch: {
        routeName() {
            this.getItems();
            this.isLoading = true;
            this.searchQuery = "";
            this.page = 1;

            console.log(this.$route.name, this.searchQuery, this.page);
        },
        searchQuery() {
            if (this.searchQuery) this.getItems();
        },
    },
});
</script>

<style lang="scss" scoped>
.items__info {
    text-transform: capitalize;
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

@media (max-width: 600px) {
    .theme,
    .search {
        display: none;
    }
}
</style>
