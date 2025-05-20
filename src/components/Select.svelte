<script lang="ts">
    interface Option {
        value: string;
        label: string;
    }

    export let options: Option[] = [];
    export let selectedOption: string = '';
    export let type: string = '';
</script>

<select bind:value={selectedOption}>
    <option class="option" value="">全部{type}</option>
    {#each options as option}
        <option class="option" value={option.value}>{option.label}</option>
    {/each}
</select>

<style scoped>
    /* 你可以在这里添加样式 */
    select {
        border: 1px solid #4caf50; /* 设置边框颜色和宽度 */
        border-radius: 5px; /* 圆角 */
        padding: 5px 10px;
        font-size: 16px;
        outline: none; /* 去掉聚焦时的默认边框 */
        transition: border-color 0.3s; /* 添加过渡效果 */
        background-color: hsla(0, 0%, 100%, 0.53);
    }

    select:focus {
        border-color: #2e7d32; /* 聚焦时改变边框颜色 */
    }

    .option {
        background-color: rgba(218, 138, 184, 0.212);
    }
</style>
