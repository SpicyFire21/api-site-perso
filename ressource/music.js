import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const musicDir = path.join(__dirname, "../public/music");

export const getMusicByName = async (name) => {
    const safeName = path.basename(name); // empêche "../"
    const filePath = path.join(musicDir, safeName) + ".mp3";

    if (!fs.existsSync(filePath)) {

        const error = new Error("Musique non trouvée");
        error.status = 404;
        throw error;
    }

    return filePath;
};
