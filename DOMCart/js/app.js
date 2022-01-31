let odd=document.querySelectorAll('#primary a:nth-child(odd)');
odd.forEach(function(item){
    item.style.backgroundColor='red'
})

// for(i=0 ;i<odd.length;i++){
//     i.style.backgroundColor='red'
// }
console.log(odd);