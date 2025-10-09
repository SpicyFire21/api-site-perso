import dotenv from "dotenv";

dotenv.config();
//
const url = process.env.GITHUB_URL

export const getRepos = async () => {
    const method = "GET";
    try {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            }
        };

        const response = await fetch(`${url}`, options);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        console.log("✅ repos récupérer");

        return data.filter(repo => repo.name === "api-site-perso" || repo.name === "spicyfire21.github.io");
    } catch (error) {
        console.error("❌ Erreur recupération répos :", error);
    }
};