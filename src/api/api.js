import axios from 'axios'


const url = 'https://ksglobaltech.com/api21/api/v1/dropdown-search'



export let sendMUltipleRequestes = (data) => {

    console.log(data);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/text");

    // var raw = JSON.stringify({
    //     "property_id": "142",
    //     "first_name": "john",
    //     "last_name": "doe",
    //     "email_address": "vinaxeh500@zneep.com",
    //     "phone": "8874565211",
    //     "message": "test msg",
    //     "move_date": "27/02/2022"
    // });

    var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
    };

    fetch("http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/checkAvailability", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}



// export const searchdropdown = () => axios.post(url)
//     .then(res => {
//         // let data = res.data;
//         // var datah = data.data;
//         // console.log(res.data.data);
//         // return datah.json();
//         // console.log(datah);
//         return res.data.data;
//     }).catch(error => {
//         console.log('error', error);
//     });





