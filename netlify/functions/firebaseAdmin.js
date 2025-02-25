console.log("🔥 Checking Firebase Environment Variables...");
console.log("FIREBASE_PRIVATE_KEY:", process.env.FIREBASE_PRIVATE_KEY ? "Loaded" : "Not found");
console.log("FIREBASE_PROJECT_ID:", process.env.FIREBASE_PROJECT_ID || "Not found");
console.log("FIREBASE_CLIENT_EMAIL:", process.env.FIREBASE_CLIENT_EMAIL || "Not found");

const admin = require("firebase-admin");

if (!admin.apps.length) {
    console.log("🔥 Initializing Firebase Admin...");
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY
                ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
                : null, // prevents crashing if undefined
        }),
        databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
    });
} else {
    console.log("🔥 Firebase Admin already initialized.");
}

const db = admin.firestore();
module.exports = { admin, db };
