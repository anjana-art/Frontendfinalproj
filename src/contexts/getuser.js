import firebase from 'firebase';
import Userdetails from '../pages/userdetails/Userdetails';

const Userdetail = document.querySelector('userDetail')
async function getuserInfo(id){
  const userInfoSnap = await firebase.firestore()
    .collection('user-details')
    .doc(id)
    .get()
    const userInfo = userInfoSnap.data()

     if(userInfo){
        Userdetail.i
     }
}