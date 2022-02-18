// Hash Table 

class Hashtable{
    constructor(){
        this.table = new Array(127);
        this.size = 0;
    }
    
    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value){
        const index = this._hash(key);
        if(this.table[index]){
            for (let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === key){
		//line unnecessary
                    this.table[index][i][1] === value;
		    return;
                }
            }
    //key not found but index exists in table, push new key/value pair
            this.table[index].push([key, value]);
        } else {
	    //initiate 2D array for index entry
            this.table[index] = [];
            this.table[index].push([key, value])
        }
        this.size++
    }

    get(key){
        const targetHash = this._hash(key);
        if(this.table[targetHash]){
            for (let i = 0; i < this.table.length; i++) {
                if(this.table[targetHash][i][0] === key){
                    return this.table[targetHash][i][1];
                }
            }
        }
        return undefined;
    }

    remove(key){
        const index = this._hash(key);

        if(this.table[index] && this.table[index].length){
            for (let i = 0; i < this.table.length; i++) {
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }
    display(){
        this.table.forEach((val, ind) => {
            const chainedVal = val.map(
                ([key, value]) => `[${key}: ${value}]`
            );
            console.log(`${ind}: ${chainedVal}`);
        });
    }
    showTable(){
        console.log(this.table);
    }
}