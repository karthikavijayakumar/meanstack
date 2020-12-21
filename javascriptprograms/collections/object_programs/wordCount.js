var text="hello hai hello hai"
// hello:2
// hai:2


var words=text.split(" ")
console.log(words);
// [ 'hello', 'hai', 'hello', 'hai' ]


var ob={}
for(let word of words){

    //hello
    if(word in ob){
        ob[word]+=1
    }
    else{
        ob[word]=1
    }
}
console.log(ob);