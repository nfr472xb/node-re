//firebase admin
var admin = require("firebase-admin");
var serviceAccount = require("./final-7819d-firebase-adminsdk-20jfi-0457a8189d.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://final-7819d.firebaseio.com"
});

module.exports = admin.database();

