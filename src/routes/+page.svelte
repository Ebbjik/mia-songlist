<script>
    // ... existing code ...

    export let countnum = 24;
</script>

<main class="container">
    <div class="profile">
        <img class="profile__avatar" alt="mia" src="/mia-head.jpeg" />
        <div class="profile__info">
            <p class="profile__text">丘米芽和她擅长的</p>
            <span class="profile__count">
                {countnum}
            </span>
            <p class="profile__text">首歌曲</p>
        </div>
    </div>
    <div class="right">
        <div class="song-selector">这是选择器部分</div>
        <div class="song-list">这是歌单部分ceshi</div>
    </div>
</main>
