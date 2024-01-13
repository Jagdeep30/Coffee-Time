import firebaseApp from './firebase.js';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
const handleImageUpload = async(file)=>{
    const storage = getStorage(firebaseApp);
    let filename = new Date().getTime() + file.name;
    let storageRef = ref(storage,filename);
    const uploadTask = await uploadBytes(storageRef,file);
    return uploadTask.metadata;
}

export default handleImageUpload;