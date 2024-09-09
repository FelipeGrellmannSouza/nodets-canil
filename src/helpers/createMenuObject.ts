type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export function createMenuObject(activemenu: MenuOptions) {
    let returnObject = {
        all: false, 
        dog: false, 
        cat: false,
        fish: false
    };

    if(activemenu !== '') { 
        returnObject[activemenu] = true;
    }

    return returnObject;
}