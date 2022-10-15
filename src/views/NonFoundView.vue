<template>
    <div class="nonfound">Page was not found</div>
    <router-link to="/">Return Home</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NonFoundView",
    components: {},
});
</script>
