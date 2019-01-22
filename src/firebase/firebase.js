import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

/*
database.ref('expenses').on('value', (snapshot) => {
    const expenses = []
    snapshot.forEach((element) => {
        expenses.push({
            ...element.val(),
            id: element.key
        })
    });
    console.log(expenses)
},(error) => {
    console.log('error: ', error)
})
*/

/*
database.ref('expenses').once('value').then((snapshot) => {
    const expenses = []
    snapshot.forEach((element) => {
        expenses.push({
            ...element.val(),
            id: element.key
        })
    });
    console.log(expenses)
}).catch((error) => {
    console.log('error: ', error)
})
*/

/*
expenses.map((expense) => {
  database.ref('expenses').push(expense)
})
*/

/*
database.ref('notes').push({
            title: 'todo',
            body: 'go for a run'
})
*/

/*
const firebaseNotes = {
    notes: {
        id12: {
            title: 'first note',
            body: 'this is my first note'
        },
        id13: {
            title: 'second note',
            body: 'this is my second note'
        }
    }
}

database.ref('notes').set(firebaseNotes)
*/

/*
const notes = [{
    id: '12',
    title: 'first note',
    body: 'this is my first note'
},
{
    id: '13',
    title: 'second note',
    body: 'this is my second note'
}]
database.ref('notes').set(notes)
*/


/*
database.ref().on('value', (snapshot) => {
    console.log(snapshot.val().name, 'is a', snapshot.val().job.title, 'at', snapshot.val().job.company)
},(error) => {
    console.log('error: ', error)
})
*/

/*
database.ref().once('value').then((snapshot) => {
    console.log(snapshot.val())
}).catch((error) => {
    console.log('error: ', error)
})
*/

/*
database.ref().set({
    name: 'Feh',
    age: 59,
    stressLevel: 6,
    job: {
        title: 'software developer',
        company: 'Singlewire'
    },
    location: {
      city: 'Madison',
      country: 'US'
    }
}).then(() => {
    console.log(1, 'data was saved')
}).catch((error) => {
    console.log(1, 'error: ', error)
})

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
})
*/

/*
database.ref('isSingle').remove()
.then(() => {
    console.log(1, 'data was removed')
}).catch((error) => {
    console.log(1, 'error: ', error)
})
*/