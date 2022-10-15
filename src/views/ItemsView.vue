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
    <k-button class="search" @click="showSearch">Search </k-button>
    <template v-if="items?.length">
        <div class="items__info">
            <strong>{{ itemClass }}</strong> of the saga:
        </div>
        <ul>
            <li v-for="item in items" :key="item" class="item">
                <router-link
                    :to="{
                        path: `${itemClass}/${item.url.match(/\d/g).join('')}`,
                    }"
                >
                    <h2>{{ item.name ?? item.title }}</h2>
                </router-link>
            </li>
        </ul>
        <ul class="page__wrapper">
            <li
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page"
                :class="{ 'current-page': page === pageNumber }"
                @click="changePage(pageNumber)"
            >
                <k-button>{{ pageNumber }}</k-button>
            </li>
        </ul>
    </template>
    <template v-else>
        <p>Loading Data...</p>
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
            isItemsLoading: false,
            pageNumber: 1,
            totalPages: 1,
            limit: 10,
            page: 1,
            data: null,
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
            const data = await fetchData(fetchingOptions[this.routeName], {
                searchFor: this.searchQuery,
                page: this.page,
            });

            this.items = data.results;
            this.data = data;
            console.log(this.data);
            this.totalPages = Math.ceil(data.count / this.limit);
        },
        showSearch() {
            return (this.dialogSearchVisible = true);
        },
        changePage(pageNumber) {
            this.page = pageNumber;
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
        },
        page() {
            this.getItems();
        },
        searchVisible() {
            // this.$refs.search__input.style.display = "block";
        },
        searchQuery(val) {
            // this.$nextTick(() => {
            this.getItems();
            console.log(val);
            // });
        },
    },
});
</script>

<style lang="scss" scoped>
.items__info {
    text-transform: capitalize;
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
