
const binarySearch = (arr, val) => {

    let lower = 0;
    let upper = arr.length - 1;

    while (lower <= upper) {
        console.log("try");
        
        let middle = Math.floor((lower + upper) / 2);
        if (val === arr[middle]) return middle;

        (val > arr[middle]) ? lower = middle + 1 : upper = middle - 1;
    }
    return -1;
}

const valuse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(valuse, 8));