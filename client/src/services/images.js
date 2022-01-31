import { api } from "./index.js";

// get all images
export async function getAllImages() {
    return await api('/images');
}

// get image by id
export async function getImageById(id) {
    return await api(`/images/${id}`);
}

// post a new image to the database
export async function createImage(image, message) {
    const data = {
        "image": image,
        "message": message,
        "date": new Date()
    }
    return await api('/images', data, 'POST');
}