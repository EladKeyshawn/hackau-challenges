$("form").submit(function (e) {
    e.preventDefault();
    login();
});

function login() {

    axios.get('http://localhost:8001/level/validate', {params: {level: 1, sol: $('#password').val() }})
      .then(function (response) {
          console.log(response);
          if(response.data && response.data.status) {
              window.location = response.data.next;
          }
      })
      .catch(function (error) {
          console.log(error);
          $('#user_info').text("Not authorized!");
      });
}