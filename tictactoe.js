const squares = document.querySelectorAll('.square');

squares.forEach((square)=> {
    square.addEventListener('click',(e)=>{
        console.log(e.target.textContent)
    })
})

const Player = function(name) { // factory function
    this.name = name;
    
};

const gameBoard = (()=>{ //module

})();

