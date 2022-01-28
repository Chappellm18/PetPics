const API_ROOT = 'https://localhost:8080';

// function to get an image from the database
export async function api(url, data = null, method = null) {
    const options = {
        method: method || (data ? 'POST' : 'GET'),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_ROOT}${url}`, options);

    if (response.status === 401) {
        throw new Error('Unauthorized');
    }
}