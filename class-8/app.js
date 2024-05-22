// let heading = document.querySelector(".heading");
// function applyStyle() {
//     if(heading === 'onmouseover'){
//         heading.style.color = 'red';
//         heading.style.backgroundColor = 'green';
//     }else{
//         heading.style.color = '#000';
//         heading.style.backgroundColor = 'white';
//     }
// }
let text = document.querySelector('#text');
let changeText = document.querySelector('#change-text');
let fullText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita, quae architecto libero aspernatur, nihil explicabo eos amet quos minima tenetur in, repudiandae magnam sapiente distinctio aut aperiam? Culpa, sunt.';
let lessText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

function expand() {
    if(changeText.innerHTML === 'See More'){
        text.innerHTML = fullText;
        changeText.innerHTML = 'See Less';
    }else{
        text.innerHTML = lessText;
        changeText.innerHTML = 'See More';
    }
}
changeText.addEventListener('click',expand);

// function submit(){
    // var abc = document.getElementById('abc');
    // console.log(abc.value); // value get
    // abc.value = ""; //value set
// }


// function submit(){
//     var gender = document.getElementsByName('gender');
//     for(i = 0; i < gender.length; i++){
//         if(gender[i].checked){
//             console.log(gender[i].value)
//         }
//     }
// }
