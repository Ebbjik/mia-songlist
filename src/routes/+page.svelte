<script>
  let { data } = $props();

  const songlist = data.props.data;

    const countnum = data.props.countnum;

    import { a } from './a.js';
</script>

<svelte:head>
  <title>mia的歌单</title>
</svelte:head>

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
        <div class="song-list">
            <table>
                <thead>
                    <tr>
                        <th>歌名</th>
                        <th>语言</th>
                    </tr>
                </thead>
                <tbody>
                    {#each songlist as song (song.歌名 + song['歌手/翻唱版本'])}
                        <tr>
                            <td>{song.歌名}</td>
                            <td>{song.语言}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
  </div>
</main>
