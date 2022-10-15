<template>
    <section :id="itemType" :tabindex="tab">
        <h2>{{ heading }}</h2>
        <ul class="card__list" v-if="items?.length">
            <li
                class="card__item"
                v-for="item in items"
                :key="item.name ?? item.title"
            >
                <strong>{{ item.name ?? item.title }}</strong>
                <div>{{ item.homeworld ?? item.model }}</div>
                <div>
                    <router-link
                        :to="{
                            path: `${itemType}/${item.url
                                .match(/\d/g)
                                .join('')}`,
                        }"
                    >
                        Learn More</router-link
                    >
                </div>
            </li>
        </ul>
        <span v-else>Loading...</span>
    </section>
</template>
<script>
export default {
    props: {
        itemType: {
            type: String,
            required: true,
        },
        heading: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
        tab: { type: Number, required: true },
    },
};
</script>
<style scoped>
section {
    min-height: 300px;
    margin: 0 auto;
}

.card__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
}
.card__item {
    max-width: 20rem;
    min-height: 5rem;
    box-shadow: 1px 2px 4px gray;
    padding: 1rem;
}
</style>
