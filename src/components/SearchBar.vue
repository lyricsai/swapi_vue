<template>
    <form @submit.prevent>
        <label for="search__input"
            >Look for
            <input
                type="text"
                v-model.lazy="searchInput"
                id="search__input"
                placeholder="Type in.."
            />
            <button @click.prevent="search">Search</button>
        </label>
    </form>
</template>
<script>
export default {
    data() {
        return {
            searchInput: "",
        };
    },
    // computed: {
    //     sortedItems() {
    //         return [...this.items].sort((item1, item2) =>
    //             item1[this.selectedSort]?.localeCompare(
    //                 item2[this.selectedSort]
    //             )
    //         );
    //     },
    // },
    methods: {
        search() {
            this.$emit("update:searchInput", this.searchInput);
            if (this.searchInput) this.$emit("update:show", false);
            this.searchInput = "";
        },
    },
};
</script>
<style scoped></style>
