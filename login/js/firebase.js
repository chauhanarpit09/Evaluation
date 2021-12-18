import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore,doc,setDoc,getDoc, deleteDoc} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvfeupVnrAudK_P_urdp9tEKj6_E8Rok0",
  authDomain: "academicevaluation-77d5b.firebaseapp.com",
  projectId: "academicevaluation-77d5b",
  storageBucket: "academicevaluation-77d5b.appspot.com",
  messagingSenderId: "879353454854",
  appId: "1:879353454854:web:94c0070ea5c35e46f1fe87",
  measurementId: "G-NGWW2SRB22"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
let currentdata = ""


      async function getCollection(e){
          e.preventDefault();
          const id=document.getElementById("email").value;
          const pass=document.getElementById("password").value;
          const docRef = doc(db, "user", id);
          const docSnap = await getDoc(docRef);
          currentdata = docSnap.data();
          if (docSnap.exists()) {
            window.onbeforeunload = function(e){
                console.log(docSnap.data());
                localStorage.setItem("data",docSnap.data());
            };
            if(docSnap.data().role=="student"){
                window.location.href = "../student/index.html?enroll="+docSnap.data().enrollement_number;
            } else {
                window.location.href = "../admin/index.html"
            }
          } else {
            document.getElementById("nodata").innerHTML = "Invalid login"
         }
      }


if(document.getElementById("login") || document.getElementById("submit")){
    document.getElementById("login").addEventListener("submit",getCollection);
    document.getElementById("submit").addEventListener("click",getCollection);
}
