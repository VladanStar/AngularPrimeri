
import initializeApp from "firebase/app";
// console.log('Hello from index.js');
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjrTr7Nuu417KFsruYjV10oZuSupTiRfE",
  authDomain: "fir-app-ec4a2.firebaseapp.com",
  projectId: "fir-app-ec4a2",
  storageBucket: "fir-app-ec4a2.appspot.com",
  messagingSenderId: "999254885727",
  appId: "1:999254885727:web:0fd32ff62aa80eb30f62ea",
  measurementId: "G-HL35MJR4N0"
};


// init firebase

initializeApp(firebaseConfig);

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })