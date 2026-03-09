import * as Public from '../ressource/music.js';



export const getMusicByName = async (req, res) => {
    const { name } = req.params;

    try {
        const filePath = await Public.getMusicByName(name);

        res.setHeader("Content-Type", "audio/mpeg");
        res.sendFile(filePath);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
};
