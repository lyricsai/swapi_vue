<template>
    <div class="item">{{ itemClass }}</div>
    <template v-if="item">
        <div>
            <ul>
                <li v-for="k in Object.entries(item)" :key="k">
                    {{ k[0] }} - {{ k[1] }}
                </li>
            </ul>
        </div>
        <template v-if="item.opening_crawl">
            <p>
                {{ item.opening_crawl }}
            </p>
        </template>
    </template>
    <template v-else>
        <p>Loading Data...</p>
    </template>
</template>

<script lang="ts">
import { fetchData } from "@/services/api";
import { defineComponent } from "vue";

export default defineComponent({
    name: "ItemView",
    components: {},
    data() {
        return {
            item: (): (unknown & { url: string }) | null => null,
        };
    },
    methods: {
        async getItem() {
            const data = await fetchData(this.$route.path.slice(1));

            this.item = data;
            console.log(this.item);
        },
    },
    created() {
        this.getItem();
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        routeName() {
            return this.$route.name;
        },
        itemClass() {
            return "";
        },
    },
    watch: {
        item() {
            console.log(this.item);
        },
    },
});
</script>

<style lang="scss" scoped>
ul {
    flex-direction: column;
}
</style>
