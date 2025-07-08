const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]


let index1;
for (let index = 0; index < posts.length; index++) {
    if(posts[index].id ===2) {
        index1 = index;
    }
}
posts.splice(index1,1);
console.log(posts);