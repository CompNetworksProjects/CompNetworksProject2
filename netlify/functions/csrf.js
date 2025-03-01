const crypto = require("crypto");

exports.handler = async () => {
    const csrfToken = crypto.randomBytes(32).toString("hex");

    return {
        statusCode: 200,
        headers: {
            "Set-Cookie": `csrfToken=${csrfToken}; HttpOnly; Secure; SameSite=Strict`
        },
        body: JSON.stringify({ csrfToken })
    };
};