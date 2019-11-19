const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    "projectId":process.env.FIREBASE_PROJECT_ID,
    "clientEmail":process.env.FIREBASE_CLIENT_EMAIL,
    "privateKey":process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.firestore()

function addScore({username, score}) {
  return db.collection('ranks').add({username, score}).then(res => ({
    statusCode: 201,
    body: JSON.stringify(res)
  })).catch(() => ({
    body: JSON.stringify({
      message: "Something went wrong",
    }),
    statusCode: 500,
  }))
}

async function getRanks(){
  return db
    .collection('ranks')
    .orderBy("score", "desc")
    .limit(50)
    .get()
    .then(results => {
      let ranks = []
      results.forEach(result => {
        ranks.push(result.data())
      })

      return {
        statusCode: 200,
        body: JSON.stringify(ranks)
      }
    }).catch((err) => console.log("Err", err) || ({
      body: JSON.stringify({
        message: "Something went wrong",
      }),
      statusCode: 500,
    }))
}


exports.handler = async function({httpMethod, body}) {
  switch(httpMethod){
    case 'GET':
      return await getRanks()
    case 'POST':
      return await addScore(JSON.parse(body))
  }
}
