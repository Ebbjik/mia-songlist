import * as fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'static', 'songlist.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const new_list = []

// 遍历每首歌

for (const category of Object.keys(data)) {
    console.log(`Category: ${category}`);


    // 删除SC点歌单
    if (category === "SC点歌单") {
        delete data[category];
        continue;
    }

    data[category].forEach((song) => {
        // 检查歌名是否以【**SC】结尾
        const match = song["歌名"] && song["歌名"].match(/【(\d+)SC】$/);
        if (match) {
            // 添加SC档位字段
            song["SC档位"] = parseInt(match[1], 10) + '元';
            // 删除歌名后面的【】部分
            song["歌名"] = song["歌名"].replace(/【\d+SC】$/, '');
            console.log(song)
        }

        // 检查并删除n字段
        if (Object.prototype.hasOwnProperty.call(song, '序列')) {
            delete song['序列'];
        }

        song["语言"] = category;

        console.log(song);
    });

    new_list.push(...data[category]);
};

// 将更新后的数据写回songlist.json文件
fs.writeFileSync(filePath, JSON.stringify(new_list, null, 2), 'utf-8');

console.log("更新完成");