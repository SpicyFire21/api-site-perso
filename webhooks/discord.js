import dotenv from "dotenv";

dotenv.config();
//env
const webhookUrl = process.env.DISCORD_URL;

export const sendMessage = async (message) => {
    const method = "POST";
    try {
        if (message.content.trim() === "") {
            throw new Error("Le message ne peut pas être vide !");
        }

        let data = `
**Nom :** ${message.firstname} ${message.lastname}
**Email :** ${message.email}
**Objet :** ${message.object}
----------------------------
${message.content}
`;


        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: data, // 👈 Discord veut { content: "..."}
            }),
        };

        const response = await fetch(`${webhookUrl}`, options);

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        console.log("✅ Webhook envoyé à Discord !");
        return {
            error: response.ok ? 0 : 1,
            status: response.status,
            data: "Votre Message a bien été envoyé !"
        };


    } catch (error) {
        console.error("❌ Erreur webhook Discord :", error);
    }
};
