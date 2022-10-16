<template>
    <form @submit.prevent class="search__bar">
        <label for="search__input"
            >Look for
            <k-input
                type="text"
                v-model.lazy="searchInput"
                id="search__input"
                placeholder="Type in.."
            />
            <k-button @click.prevent="search">Search</k-button>
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
