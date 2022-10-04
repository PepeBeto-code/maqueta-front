var UseR = document.getElementById('UseR');
var EMR = document.getElementById('EMR');
var PassR = document.getElementById('PassR');
var EML = document.getElementById('EML');
var PassL = document.getElementById('PassL');
var BotonR = document.getElementById('botonR');
var BotonL = document.getElementById('botonL');
const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
BotonR.addEventListener("click", function () {
    axios.post('http://api.test/api/register', {
          username: UseR.value,
          email: EMR.value,
          password: PassR.value
      },headers)
        .then(function(res) {
            swal("Good job!", "You clicked the button!", "success");

            UseR.value=""
            EMR.value=""
            PassR.value=""

        })
        .catch(function(err) {
            swal({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message,
               
              })
                        console.log(err);
        })
})
BotonL.addEventListener("click", function () {
    axios.post('http://api.test/api/login', {
          email: EML.value,
          password: PassL.value
      },headers)
        .then(function(res) {
            swal("Good job!", "Credenciales Validad", "success");

            UseR.value=""
            EMR.value=""
            PassR.value=""

        })
        .catch(function(err) {
            swal({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.data,
               
              })
                        console.log(err);
        })
})

