<script lang="ts">
    interface Option {
        value: string;
        label: string;
    }

    export let options: Option[] = [];
    export let selectedOption: string = '';

    export let onChange: (value: string) => void; // 新增的回调函数属性

    function handleChange(event: Event) {
        selectedOption = (event.target as HTMLSelectElement).value;
        if (onChange) {
            onChange(selectedOption); // 调用父组件传递的回调函数
        }
    }
</script>

<select bind:value={selectedOption} on:change={handleChange}>
    <option class="option" value="">全部</option>
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
    }

    select:focus {
        border-color: #2e7d32; /* 聚焦时改变边框颜色 */
    }

    .option {
        background-color: aquamarine;
    }
</style>
