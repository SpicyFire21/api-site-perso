import * as Webhooks from '../webhooks/discord.js';

export const sendMessage = async (req,res) =>{
    try {
        let data = await Webhooks.sendMessage(req.body);

        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Erreur lors de l'envoie du message'");
    }
}