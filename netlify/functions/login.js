const { admin, db } = require("./firebaseAdmin");

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { email, password } = JSON.parse(event.body);
        if (!email || !password) {
            return { statusCode: 400, body: JSON.stringify({ error: "Email and password are required." }) };
        }

        const userRecord = await admin.auth().getUserByEmail(email);
        const userDoc = await db.collection("users").doc(userRecord.uid).get();

        if (!userDoc.exists) {
            return { statusCode: 404, body: JSON.stringify({ error: "User data not found." }) };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                uid: userRecord.uid,
                email: userRecord.email,
                userData: userDoc.data(),
                message: "Login successful!"
            })
        };
    } catch (error) {
        return { statusCode: 400, body: JSON.stringify({ error: error.message }) };
    }
};