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
const enrollement = "";

function getdata(){
 var url_string = window.location;
  var url = new URL(url_string);
  var enroll = url.searchParams.get("enroll");
  enrollement=enroll;
  console.log(enrollement+"vhvh");
}

 async function getUserDetail(){
    var url_string = window.location;
  var url = new URL(url_string);
  var enroll = url.searchParams.get("enroll");
  console.log(enroll)
    console.log("sfsfsf")
    const docRef = doc(db,"students",enrollement);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        document.getElementById("user-details").style.display="flex";
        document.getElementById("mid").style.display = "none"
        document.getElementById("end").style.display = "none"
        document.getElementById("visualization").style.display = "none"
        document.getElementById("enroll").innerHTML = docSnap.data().enrollement_number;
        document.getElementById("name").innerHTML = docSnap.data().fname+"  "+docSnap.data().lname;
    } else {
        document.getElementById("nodata").style.display = "flex"
        document.getElementById("nodata").innerHTML = "Some Error Occured"
    }
}


document.getElementById("detail").addEventListener("click",getUserDetail);
document.getElementById("mid").addEventListener("click",midResult);
document.getElementById("end").addEventListener("click",endResult);
document.getElementById("visualization").addEventListener("click",getVisuals);
     
     

