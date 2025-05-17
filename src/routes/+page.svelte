<script lang="ts">
    import Select from '../components/Select.svelte';

    let { data } = $props();

    const songlist = data.props.data as Song[];

    const countnum = data.props.countnum;

    let selectedSong = $state();
    let selectedOption = '';

    // 定义 Song 接口
    interface Song {
        歌名: string;
        语言: string;
        SC档位: string;
        '歌手/翻唱版本': string; // 添加这一行
    }

    // 定义 Option 接口
    interface Option {
        value: string;
        label: string;
    }

    // 提取所有语言作为选项
    const languageOptions: Option[] = [...new Set(songlist.map((song: Song) => song.语言))].map(
        lang => ({
            value: lang,
            label: lang,
        })
    );

    // 处理选项变化的函数
    function handleOptionChange(value: string) {
        selectedOption = value; // 更新选中的选项
        console.log('选中的语言:', selectedOption); // 可以在这里添加其他逻辑
    }

    // 使用 $effect 代替 $:
    $effect(() => {
        console.log(selectedSong);
    });
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
        <div class="song-selector">
            <div>
                <span>nihao:</span>
                <Select options={languageOptions} onChange={handleOptionChange}></Select>
            </div>
            <div>
                <span>nihao:</span>
                <Select options={languageOptions} onChange={handleOptionChange}></Select>
            </div>
            <div>
                <span>nihao:</span>
                <Select options={languageOptions} onChange={handleOptionChange}></Select>
            </div>
            <div>
                <span>nihao:</span>
                <Select options={languageOptions} onChange={handleOptionChange}></Select>
            </div>
        </div>
        <div class="song-list">
            <table>
                <thead>
                    <tr>
                        <th>歌名</th>
                        <th>语言</th>
                        <th class="sc">SC档位</th>
                    </tr>
                </thead>
                <tbody>
                    {#each songlist as song (song.歌名 + song['歌手/翻唱版本'])}
                        <tr>
                            <td>{song.歌名}</td>
                            <td>{song.语言}</td>
                            <td class="sc">{song.SC档位}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</main>
