// Synchronus
const getUserSync = (id) => {
   
    // jika id = 1 nama akan berisi Abe selain 1 nama akan berisi Kolin
    const nama = id === 1 ? 'Abe' : 'Kolin';
    return {id, nama}

}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello World!';
console.log(halo);


// Asynchronus
const getUser = (id, callback) =>{
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const nama = id === 1 ? 'Abe' : 'Kolin';
        callback({id, nama});
    },time);
}

const userOne = getUser(1, (hasil) => {
    console.log(hasil);
});
const userTwo = getUser(2, (hasil) => {
    console.log(hasil);
});
const hi = 'Hello World';
console.log(hi);