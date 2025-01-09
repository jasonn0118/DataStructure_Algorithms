class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // O(1) time complexity
    get(index) {
        return this.data[index];
    }

    // O(1) time complexity
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // O(1) time complexity
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // O(n) time complexity
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        // O(n) time complexity
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new CustomArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
console.log(newArray);