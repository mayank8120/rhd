export let decimalRoundOff = (number) => {
    return Math.floor(number) == Math.round(number) ? Math.floor(number) : number
}

export let emptyDataCheck = (data) => {
    let flag;
    if (data == undefined || data == null || data == '') {
        flag = "N/A"
    } else {
        flag = data;
    }
    return flag;
}
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export let getMonthOf = (i) => {
    return monthNames[i];
}
export let getDayOf = (d) => {
    // localStorage.removeItem("saveHAList");

    return dayNames[d.getDay()];
}


export let finddate = (item, type) => {
    let date;
    if (type === 2) {
        let arr = JSON.parse(localStorage.getItem('saveHAList'));


        if (arr == '' || arr == null || arr == undefined || arr.length == 0) {

        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][0] == item) {
                    date = arr[i][1];
                }
            }
        }
    } else {
        let arr = JSON.parse(localStorage.getItem('savePropList'));

        if (arr == '' || arr == null || arr == undefined || arr.length == 0) {

        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][0] == item) {
                    date = arr[i][1];

                }
            }
        }
    }
    return date;
}

export let addOrRemoveProp = (item, dateI) => {

    let oldData = JSON.parse(localStorage.getItem('savePropList'));

    // const d = new Date(dateI);
    // console.log(d.getDate());
    // console.log(monthNames[d.getMonth()]);

    if (oldData == null || oldData == '' || oldData == undefined) {
        addFirstElementProp(item, dateI);
    } else {
        if (existCheck(oldData, item)) {
            removefromLocal(oldData, item);
        } else {
            addToLocal(oldData, item, dateI);
        }
    }

}


export let addOrRemoveHA = (item, dateI) => {

    let oldData = JSON.parse(localStorage.getItem('saveHAList'));

    if (oldData == null || oldData == '' || oldData == undefined) {
        addFirstElementHA(item, dateI);
    } else {
        if (existCheck(oldData, item)) {
            removefromLocalHA(oldData, item);
        } else {
            addToLocalHA(oldData, item, dateI);
        }
    }
}




function removefromLocal(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == item) { }
        else {
            newArr.push(arr[i]);
        }
    }
    localStorage.setItem('savePropList', JSON.stringify(newArr));
}

function removefromLocalHA(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == item) { }
        else {
            newArr.push(arr[i]);
        }
    }
    // localStorage.removeItem("save");
    localStorage.setItem('saveHAList', JSON.stringify(newArr));
}



function addFirstElementProp(item, dateI) {
    let newArr = [];
    let itemSS = [item, dateI];
    newArr.push(itemSS);
    localStorage.setItem('savePropList', JSON.stringify(newArr));
}
function addFirstElementHA(item, dateI) {
    let newArr = [];
    let itemSS = [item, dateI];
    newArr.push(itemSS);
    localStorage.setItem('saveHAList', JSON.stringify(newArr));
}


// export let createEmptyArrays = () => {
//     let oldData = JSON.parse(localStorage.getItem('savePropList'));
//     let oldData1 = JSON.parse(localStorage.getItem('saveHAList'));

//     if (oldData == null || oldData == '' || oldData == undefined) {

//     }
//     if (oldData1 == null || oldData1 == '' || oldData1 == undefined) {

//     }
// }

function addToLocal(arr, item, dateI) {
    let newArr = [];
    newArr = arr;
    let itemSS = [item, dateI];
    newArr.push(itemSS);
    // localStorage.removeItem("save");
    localStorage.setItem('savePropList', JSON.stringify(newArr));
}


function addToLocalHA(arr, item, dateI) {
    let newArr = [];
    newArr = arr;
    let itemSS = [item, dateI];
    newArr.push(itemSS);
    // localStorage.removeItem("save");
    localStorage.setItem('saveHAList', JSON.stringify(newArr));
}



let existCheck = (arr, item) => {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][0]);
        // console.log(item);
        if (arr[i][0] == item) {
            flag = true;
        }
    }
    // console.log(flag);
    return flag;
}


export let toggleHeart = (item) => {

    let arr = JSON.parse(localStorage.getItem('savePropList'));
    let flag = false;
    if (arr == '' || arr == null || arr == undefined || arr.length == 0) {

    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == item) {
                flag = true;
            }
        }
    }

    return flag;
}
export let toggleHeartHA = (item) => {

    let arr = JSON.parse(localStorage.getItem('saveHAList'));
    let flag = false;
    if (arr == '' || arr == null || arr == undefined || arr.length == 0) {

    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == item) {
                flag = true;
            }
        }
    }

    return flag;
}

export let getAllProp = () => {
    console.log(JSON.parse(localStorage.getItem('savePropList')));
}


export let getAllHA = () => {
    console.log(JSON.parse(localStorage.getItem('saveHAList')));
}



export let capitalise = (str) => {
    let str1 = str.toLowerCase();

    const arr = str1.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const str2 = arr.join(" ");
    return str2;
}



let removelastcomma = (str) => {
    let us;
    if (str.charAt(str.length - 1) == ',') {
        us = str.slice(0, -1);
    } else {
        us = str;
    }
    return us;
}


export let arrayToString = (type) => {
    let str = "";

    if (type == 0) {
        let arr = JSON.parse(localStorage.getItem('savePropList'));

        // console.log(arr);

        if (arr == null || arr == undefined || arr == '' || arr.length == 0) {

        } else {
            arr.map((data) => {
                str += `${data[0]},`;
            })
        }
    } else {
        let arr = JSON.parse(localStorage.getItem('saveHAList'));

        // console.log(arr);

        if (arr == null || arr == undefined || arr == '' || arr.length == 0) {

        } else {
            arr.map((data) => {
                str += `${data[0]},`;
            })
        }
    }
    return removelastcomma(str);

}
export let replaceSpace = (str) => {
    return str.replace(new RegExp('<p>&nbsp;</p>', 'g'), '');
}