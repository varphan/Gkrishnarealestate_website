import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY; // Set API Key from .env file

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Received request body:", body);

        const { name, email, phone, comments } = body;

        // Validate required fields
        if (!name || !email || !phone || !comments) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

        const sendSmtpEmail = {
            sender: { name: "G Krishna Real Estate Edits", email: "your@email.com" }, // Change sender email
            to: [{ email: "ksphranav15@gmail.com" }], // Your business email
            subject: "New Contact Request",
            htmlContent: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${comments}</p>
            `,
        };

        const response = await emailApi.sendTransacEmail(sendSmtpEmail);

        console.log("Email sent:", response);

        return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });

    } catch (error) {
        console.error("Send email error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { status: 500 });
    }
}
