export const getDateLocalStorage = () => {
    return localStorage.getItem('date');
}
export const setDateLocalStorage = () => {
    const date = new Date();
    localStorage.setItem('date', `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}