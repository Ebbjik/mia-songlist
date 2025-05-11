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
    <option value="">全部</option>
    {#each options as option}
        <option value={option.value}>{option.label}</option>
    {/each}
</select>

<style scoped>
    /* 你可以在这里添加样式 */
    select {
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
    }
</style>
