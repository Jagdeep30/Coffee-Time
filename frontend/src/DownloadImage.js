import firebaseApp from "./firebase";
import { getDownloadURL, getStorage,ref } from "firebase/storage";

const downloadImage = async(filename)=>{
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage,filename);
    let result = await getDownloadURL(storageRef);
    // console.log(result);
    return result;
}

export default downloadImage;