 class myArray{
     constructor(){
         this.length = 0;
         this.data = {}
     }

     get(index){
         return this.data[index]
     }
     push(item){
         this.data[this.length] = item
         this.length++
         return this.length
     }
     pop(){
         const lastItem = this.data[this.length-1]
         delete this.data[this.length-1]
         this.length--
         return lastItem
     }

     delete(index){
         const item = this.data[index];
         this.shiftItems(index)
     }

     shiftItems(index){
        for(let i = index; i < this.length-1; ++i){
            this.data[i] = this.data[i+1] 
        }
        delete this.data[this.length-1]
        this.length--
     }
 }

const newArray  = new myArray()

console.log('newArray->', newArray)
newArray.push(7)
newArray.push('cuppid')
newArray.push('stupid')
newArray.push('love')
console.log('newArray->', newArray)
newArray.delete(3)
console.log('newArray->', newArray)

