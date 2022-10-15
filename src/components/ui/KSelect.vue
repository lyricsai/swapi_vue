<template>
    <select name="" id="" v-model="localModelValue" @change="changeOption">
        <option disabled value="">Choose from the list</option>
        <option
            :value="option.value"
            v-for="option in options"
            :key="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>
<script>
export default {
    name: "k-select",
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        localModelValue: {
            get() {
                return this.modelValue;
            },
            set(newValue) {
                this.$emit("update:modelValue", newValue);
            },
        },
    },
};
</script>
<style scoped></style>
