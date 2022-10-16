<template>
    <span v-if="typeof links === 'string'">
        {{ items?.name || links }}
    </span>
    <div v-else>
        <h5 v-if="fetched.length">{{ itemClass }}</h5>
        <li v-for="link in fetched" :key="link">
            <strong>{{ link.title || link.name }}</strong>
        </li>
    </div>
</template>

<script>
import { fetchAdditionalData } from "@/services/api";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    data: () => {
        return {
            items: [],
            isLoading: false,
            fetched: [],
        };
    },
    props: {
        links: {
            type: [Array, String],
            required: true,
        },
        itemClass: {
            type: String,
            required: true,
        },
    },
    methods: {
        async getItems(link) {
            try {
                this.isLoading = true;
                return await fetchAdditionalData(link);
            } catch (error) {
                Promise.reject(error);
            } finally {
                this.isLoading = false;
            }
        },
    },
    async created() {
        if (!Array.isArray(this.links)) {
            this.items = await this.getItems(this.links).catch((err) =>
                Promise.reject(err)
            );
        } else {
            const res = await Promise.all([
                this.links.forEach(async (url) => {
                    const results = await this.getItems(url).catch((err) =>
                        Promise.reject(err)
                    );
                    this.fetched.push(results);
                }),
            ]).catch((err) => Promise.reject(err));
            return { res };
        }
    },
    watch: {
        fetched: {
            deep: true,
            handler() {
                return;
            },
        },
    },
});
</script>
<style scoped>
li,
h5 {
    padding: 0.5rem 0;
    text-align: left;
}
h5 {
    text-decoration: underline;
}
ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid gray;
}
</style>
