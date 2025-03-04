<script>
    // ... existing code ...
    import { browser } from "$app/environment";
    let deviceClass = "";
    if (browser) {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            deviceClass = "mobile";
        } else {
            deviceClass = "desktop";
        }
    }
    // ... existing code ...

    export let countnum = 24;
</script>

<main class={deviceClass}>
    <div class="introduction">
        <img class="mia-head" alt="mia" src="/mia-head.jpeg" />
        <p class="introduce">丘米芽和她擅长的</p>
        <span class="total">
            {countnum}
        </span>
        <p class="introduce">首歌曲</p>
    </div>
    <div class="right">
        <div class="selector">这是选择器部分</div>
        <div class="song_list">这是歌单部分ceshi</div>
    </div>
</main>
