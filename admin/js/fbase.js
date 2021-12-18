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


     
      //Add document in firebase
      async function Add_Doc(e) {
        e.preventDefault();
        var fnameV = document.getElementsByName("fname")[0].value;
        var lnameV = document.getElementsByName("lname")[0].value;
        var genderV = document.getElementsByName("gender")[0].value;
        var dobV = document.getElementsByName("date")[0].value;
        var emailV = document.getElementsByName("email")[0].value;
        var mobileV = document.getElementsByName("mobile")[0].value;
        var fatherV = document.getElementsByName("fathername")[0].value;
        var cityV = document.getElementsByName("city")[0].value;
        var stateV = document.getElementsByName("state")[0].value;
        var countryV = document.getElementsByName("country")[0].value;
        var date = new Date();
        var enroll = date.getFullYear()+""+mobileV;
        await setDoc(doc(db,"students",enroll),
            {
                fname: fnameV,
                lname: lnameV,
                gender: genderV,
                dob: dobV,
                email: emailV,
                mobile: mobileV,
                father_name: fatherV,
                city: cityV,
                state: stateV,
                country: countryV,
                enrollement_number: enroll,

            }
        );

        await setDoc(doc(db,"user",emailV),
            {
                email: emailV,
                password: emailV,
                enrollement_number: enroll,
                role:"student",

            }
        );

        document.getElementsByName("fname")[0].value="";
        document.getElementsByName("lname")[0].value="";
        document.getElementsByName("gender")[0].value="";
        document.getElementsByName("date")[0].value="";
        document.getElementsByName("email")[0].value="";
        document.getElementsByName("mobile")[0].value="";
        document.getElementsByName("fathername")[0].value="";
        document.getElementsByName("city")[0].value="";
        document.getElementsByName("state")[0].value="";
        document.getElementsByName("country")[0].value="";

        document.getElementById("msg").innerHTML = "Added Successfully";
      }

      async function getCollection(e){
          e.preventDefault();
          const search = document.getElementsByName("search")[0].value;
          const docRef = doc(db, "students", search);
          const docSnap = await getDoc(docRef);
          currentdata = docSnap.data();
          if (docSnap.exists()) {
            document.getElementById("row").style.display = "flex";
            document.getElementById("nodata").style.display = "none"
            document.getElementById("enroll").innerHTML = docSnap.data().enrollement_number;
            document.getElementById("name").innerHTML = docSnap.data().fname+"  "+docSnap.data().lname;
          } else {
            document.getElementById("nodata").style.display = "flex"
            document.getElementById("nodata").innerHTML = "No Such Data found :-("
         }
      }

       async function deleteData(e){
          e.preventDefault();
          const enroll = document.getElementById("enroll").value;
          await deleteDoc(doc(db, "students", currentdata.enrollement_number));
          document.getElementById("row").style.display = "none";
      }

      async function sendData(e){
          localStorage.setItem("data",currentdata);
      }


if(document.getElementById("add")){
    document.getElementById("add").addEventListener("click",Add_Doc);
}
if(document.getElementById("search") || document.getElementById("searchbtn")){
    document.getElementById("search").addEventListener("submit",getCollection);
    document.getElementById("searchbtn").addEventListener("click",getCollection);
}

if(document.getElementById("deleteRecord")){
    document.getElementById("deleteRecord").addEventListener("click",deleteData);
}
