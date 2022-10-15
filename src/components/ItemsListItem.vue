<template>
    <li v-if="show">
        <div v-if="!items.length">
            <p>Loading Data...</p>
        </div>
        <details v-else>
            <summary>
                <h4 class="heading4">{{ itemClass }}</h4>
            </summary>
            <template v-if="items?.length">
                <ul>
                    <li v-for="item in items" :key="item">
                        {{ item }}
                    </li>
                </ul>
            </template>
        </details>
    </li>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        itemClass: {
            type: String,
            required: true,
        },
        show: {
            type: Boolean,
            required: true,
        },
    },
};
</script>
<style scoped>
.heading4 {
    text-transform: capitalize;
}
li {
    padding: 0.5rem 0;
}
ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
