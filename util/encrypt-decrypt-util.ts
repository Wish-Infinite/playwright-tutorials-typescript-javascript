import CryptoJS from "crypto-js";


const secreKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : '';

export function encryptData(data: string){
    return CryptoJS.AES.encrypt(data, secreKey).toString();
}

export function decryptData(encData: string){
    return CryptoJS.AES.decrypt(encData, secreKey).toString(CryptoJS.enc.Utf8);
}
