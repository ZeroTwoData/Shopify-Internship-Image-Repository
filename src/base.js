import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
    "projectId": "pc-setup-image-repository",
    "appId": "1:879901571985:web:17ba849a91e05a324ff830",
    "storageBucket": "pc-setup-image-repository.appspot.com",
    "locationId": "us-east4",
    "apiKey": "AIzaSyBwvT-yS5nKoOLYwaJb6Cuol1huMPItTFE",
    "authDomain": "pc-setup-image-repository.firebaseapp.com",
    "messagingSenderId": "879901571985",
    "measurementId": "G-YV3FRSZ4VK"
});