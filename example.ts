const getLastItem = <T>(items: T[]): T => {
    return items[items.length - 1];
}


console.log(getLastItem([2,1,5,6,7]));
