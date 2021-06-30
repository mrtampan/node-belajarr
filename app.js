// Create File with syncronous
// Create File with Asyncronous
// Read File 

const fs = require('fs');

// fs.writeFile('satu.txt', 'Halo gimana kabar mu', (err) => {
//     console.log(err);
// });

// try{
//     fs.writeFileSync('dua.txt', 'Halo gimana kabar anda');
// }catch(err){
//     console.log(err);
// }

// fs.readFile('./hey.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });


// Module node buatan sendiri
// const modulku = require('./modulku.js');

// console.log(modulku.hehe);
// console.log(modulku.testvar);
// console.log(modulku);


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan Nama Kamu: ', (nama) => {
    rl.question('Masukan nomor telpon kamu: ', (phone) => {

        const contact = {nama, phone};
        const file = fs.readFileSync('kontak.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);
        fs.writeFileSync('kontak.json', JSON.stringify(contacts));

        console.log('Terima kasih sudah menginput');
        rl.close();
    })

});
