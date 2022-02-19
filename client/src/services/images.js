import { api } from "./index.js";

// get all images
export async function getAllImages() {
    return await api('/images', null, 'GET');
}

// get image by id
export async function getImageById() {
    return await api('/images/1', null, 'GET');
}

// post a new image to the database
export async function createImage(image, message) {
    const data = {
        "image": image,
        "message": message,
        "date": new Date().toLocaleString()
    }
    return await api('/images', data, 'POST');
}