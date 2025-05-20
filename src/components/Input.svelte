<script lang="ts">
    export let value: string = '';
    export let placeholder: string = '';
</script>

<input type="text" bind:value {placeholder} />

<style>
    /* 添加一些基本样式 */
    input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: hsla(0, 0%, 100%, 0.53);
    }
</style>
