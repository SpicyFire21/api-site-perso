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
        return data;
    } catch (error) {
        console.error("❌ Erreur recupération répos :", error);
    }
};