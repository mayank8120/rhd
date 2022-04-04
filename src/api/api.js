import axios from 'axios'


const url = 'https://ksglobaltech.com/api21/api/v1/dropdown-search'



export const searchdropdown = () => axios.post(url)
    .then(res => {
        // let data = res.data;
        // var datah = data.data;
        // console.log(res.data.data);
        // return datah.json();
        // console.log(datah);
        return res.data.data;
    }).catch(error => {
        console.log('error', error);
    });







// export const createPost = (newPost) => axios.post(url, newPost);