// $('.slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


var userName = prompt("Enter your name ")
  if(userName===""){
     Swal.fire({
    icon: "error",
    title: "User Name is empty",
  });
}
else{
    Swal.fire({
        icon: "success",
        title: "Successfully Login",
      });

}