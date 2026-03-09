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
            return {error : 1,status:response.status,data:`Erreur HTTP `}
        }
        const data = await response.json();
        console.log("✅ repos récupérer");

        const res = data.filter(repo => repo.name !== "api-site-perso" && repo.name !== "spicyfire21.github.io");
        return {error : 0,status:200,data:res}
    } catch (error) {
        console.error("❌ Erreur recupération répos :", error);
    }
};