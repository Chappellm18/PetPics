const API_ROOT = 'https://localhost:3000';

// function to get an image from the database
export async function api(url, data = null, method = null) {
    console.log('body: JSON.stringify(data): ' + JSON.stringify(data));
    try {
        let response;

        if (data) {
            response = await fetch(API_ROOT + url, {
                method: method || 'POST', // *GET, POST, PUT, DELETE, etc.
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header

            });
        } else {
            response = await fetch(API_ROOT + url);
        }

        if (!response.ok) {
            throw await response.json();
        }
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}