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


     

      async function add(enroll,id,total,marks){
        await setDoc(doc(db,"midterm",enroll+id),
            {
                courseid: id,
                marks: marks,
                total: total
            }
        );
      }
      async function Addmidterm(e) {
        e.preventDefault();
        var ibm501 = document.getElementsByName("obibm501")[0].value;
        var ibm512 = document.getElementsByName("obibm512")[0].value;
        var tcs502 = document.getElementsByName("obtcs502")[0].value;
        var tcs561 = document.getElementsByName("obtcs561")[0].value;
        var tcs501 = document.getElementsByName("obtcs501")[0].value;
        var enroll="20216397365442";
        add(enroll,"ibm501","25",ibm501);
        add(enroll,"ibm512","25",ibm512);
        add(enroll,"tcs502","25",tcs502);
        add(enroll,"tcs561","25",tcs561);
        add(enroll,"tcs501","25",tcs501);
    
    
        document.getElementById("msg").innerHTML = "Added Successfully :-)";
      }

      async function AddEndterm(e) {
        e.preventDefault();
        var ibm501 = document.getElementsByName("obeibm501")[0].value;
        var ibm512 = document.getElementsByName("obeibm512")[0].value;
        var tcs502 = document.getElementsByName("obetcs502")[0].value;
        var tcs561 = document.getElementsByName("obetcs561")[0].value;
        var tcs501 = document.getElementsByName("obetcs501")[0].value;
        add(enroll,"ibm501","100",ibm501);
        add(enroll,"ibm512","100",ibm512);
        add(enroll,"tcs502","100",tcs502);
        add(enroll,"tcs561","100",tcs561);
        add(enroll,"tcs501","100",tcs501);

    
        document.getElementById("msg").innerHTML = "Added Successfully :-)";
      }

      

if(document.getElementById("updatemid")){
    document.getElementById("updatemid").addEventListener("click",Addmidterm);
}
if(document.getElementById("updatend")){
    document.getElementById("updatend").addEventListener("click",AddEndterm);
}
