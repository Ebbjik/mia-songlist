<script lang="ts">
    import Select from '../components/Select.svelte';
    import Input from '../components/Input.svelte';
    import { writable } from 'svelte/store';
    import Toast from '../components/Toast.svelte'; // 导入 Toast 组件
    // ... 其他代码 ...

    let showToast = $state(false);
    let toastMessage = $state('已复制到剪贴板');

    let { data } = $props();

    const songlist = data.props.data as Song[];
    const tablelist = writable<Song[]>(songlist);

    const countnum = data.props.countnum;

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

    const filter = $state({
        language: '',
        SC档位: '',
        歌名: '',
    });

    // 提取所有语言作为选项
    const languageOptions: Option[] = [...new Set(songlist.map((song: Song) => song.语言))].map(
        lang => ({
            value: lang,
            label: lang,
        })
    );

    // 提取所有 SC档位作为选项
    const scOptions: Option[] = [...new Set(songlist.map((song: Song) => song.SC档位))].map(sc => ({
        value: sc,
        label: sc,
    }));

    $effect(() => {
        console.log($state.snapshot(filter)); // 使用 snapshot() 查看状态快照
        tablelist.set(
            songlist.filter(item => {
                return (
                    (filter.language === '' || item.语言 === filter.language) &&
                    (filter.SC档位 === '' || item.SC档位 === filter.SC档位) &&
                    (filter.歌名 === '' || item.歌名.includes(filter.歌名))
                );
            })
        );
    });

    const copyText = (text: string) => {
        const textarea = document.createElement('textarea');
        textarea.value = '点歌 ' + text;
        console.log(text);
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };

    let timer: NodeJS.Timeout | null = null;

    const handleclick = (song: Song) => {
        showToast = false; // 隐藏之前的提示
        if (timer) {
            clearTimeout(timer);
        }

        const textToCopy = song.歌名;

        if (!textToCopy) {
            console.warn('没有要复制的文本');
            return;
        }

        toastMessage = `已复制: ${textToCopy}`;

        // 复制文本
        copyText(textToCopy);

        // 显示提示
        showToast = true;

        // 2 秒后隐藏提示
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            showToast = false;
        }, 2000);
    };
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
            <Input bind:value={filter.歌名} placeholder="请输入歌名"></Input>

            <Select type="语言" bind:selectedOption={filter.language} options={languageOptions}
            ></Select>

            <Select type="SC档位" bind:selectedOption={filter.SC档位} options={scOptions}></Select>
        </div>
        <div class="song-list">
            <table>
                <thead>
                    <tr>
                        <th class="name">歌名</th>
                        <th class="language">语言</th>
                        <th class="sc">SC档位</th>
                    </tr>
                </thead>
                <tbody>
                    {#each $tablelist as song (song.歌名 + song['歌手/翻唱版本'])}
                        <tr onclick={() => handleclick(song)}>
                            <td class="name">{song.歌名}</td>
                            <td class="language">{song.语言}</td>
                            <td class="sc">{song.SC档位}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    <Toast message={toastMessage} show={showToast} />
</main>
