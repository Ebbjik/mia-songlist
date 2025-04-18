import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, "..", "..", "static", "songlist.json");
const data = JSON.parse(readFileSync(filePath, "utf-8"));

export async function load() {

    return {
        props: {
            data: data,
            countnum: data.length
        }
    };
}
