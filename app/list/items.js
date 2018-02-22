export const apiCall = () => {
    return fetch('/api/test').then(response => {
        return response.json();
    });
};