export default function getResponseFromApi(){
    return new Promise((resolve, reject) => {
        resolve(``);
        reject(new Error(`Something Bad Happened`));
    })
}
