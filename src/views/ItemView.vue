<template>
    <router-link
        class="link"
        :to="{ name: itemClass }"
        style="text-decoration: underline"
        >Go back to {{ itemClass }}</router-link
    >
    <template v-if="!item">
        <p>Loading Data...</p>
    </template>
    <template v-else>
        <div>
            <ul>
                <li v-for="entry in Object.entries(item)" :key="entry[0]">
                    <div
                        v-if="
                            !checkArray.includes(entry[0]) &&
                            !notShowingArray.includes(entry[0])
                        "
                    >
                        <span>{{ entry[0].split("_")[0] }}</span> -
                        <span>
                            <strong>{{ entry[1] }}</strong>
                        </span>
                    </div>
                </li>
                <template v-if="item.additional">
                    <li
                        v-for="entry in Object.entries(item.additional)"
                        :key="entry[0]"
                    >
                        <span>{{ entry[0] }}</span> -
                        <span>
                            {{ entry }}
                        </span>
                    </li>
                </template>
                <details v-if="item.opening_crawl">
                    <summary>Summary</summary>
                    {{ item.opening_crawl }}
                </details>
            </ul>
        </div>
    </template>
</template>

<script lang="ts">
import { fetchData } from "@/services/api";
import { AxiosError } from "axios";
import { defineComponent } from "vue";

export default defineComponent({
    name: "ItemView",
    components: {},
    data() {
        return {
            item: (): (unknown & { url: string }) | null => null,
            error: "",
            checkArray: [
                "films",
                "species",
                "starships",
                "vehicles",
                "characters",
                "planets",
                "people",
                "homeworld",
                "pilots",
                "residents",
                "additional",
            ],
            notShowingArray: ["created", "edited", "url", "opening_crawl"],
        };
    },

    methods: {
        async getItem() {
            try {
                const res = await fetchData(`${this.itemClass}/${this.id}`);
                this.item = res;
            } catch (error) {
                if ((error as AxiosError).response?.status === 404) {
                    this.error = "Page was not founded";
                } else {
                    this.error = (error as AxiosError).message;
                }
                console.log(error);
            }
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
            return this.$route.name?.toString().split("-")[0];
        },
    },

    watch: {
        item() {
            return;
        },
    },
});
</script>

<style lang="scss" scoped>
ul {
    flex-direction: column;
}
li {
    & > * {
        text-transform: capitalize;
    }
}
</style>
