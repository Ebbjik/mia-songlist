<script lang="ts">
    export let message: string;
    export let show: boolean;
</script>

{#if show}
    <div class="toast">
        {message}
    </div>
{/if}

<style>
    .toast {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        animation: slideDown 0.5s ease-out forwards;
    }

    @keyframes slideDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
</style>
