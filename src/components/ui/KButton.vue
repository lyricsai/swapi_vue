<template>
    <button class="kbutton"><slot></slot></button>
</template>
<script>
export default {
    name: "k-button",
};
</script>
<style lang="scss" scoped>
.kbutton {
    padding: 0.7rem 1.5rem;
    background: none;
    border: 1px solid gray;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    &:hover {
        background: #42b983;
        border-color: transparent;
        transition: all 0.3s ease 0s;
        color: #fff;
    }
    &:active {
        translate: 1px;
    }
    &:disabled {
        background: none;
        cursor: no-drop;
    }
}
</style>
