const fs = import ('fs')

document.querySelector('.button').addEventListener('click', function(){
    	
    fs.writeFileSync("hello.txt", "Привет ми ми ми!")
    console.log('dd')
})