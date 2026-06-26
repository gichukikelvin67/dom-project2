document.addEventListener("DOMContentLoaded", function(){

    //select the elements
    const colorBox=document.getElementById("color-box");
    const button=document.getElementById("change-color-btn");

    //function to generate random hexadecimal color changes
    function getRandomColor(){
        const letters="0123456789ABCDEF";
        let color="#";
        for(let i=0; i<6; i++){
            color +=letters[Math.floor(Math.random() *16)];
        
        }
        return color;
    }
    //change the color box when the button is clicked
        button.addEventListener("click",function(){
             colorBox.style.backgroundColor = getRandomColor();
        });
    


});