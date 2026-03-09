import * as Webhooks from '../webhooks/github.js';

export const getRepos = async (req,res) =>{
    try {
        let data = await Webhooks.getRepos();
        return res.status(data.status).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Erreur lors de la récupération des repos");
    }
}