
function initLevelValidator(level) {
    $("form").submit(function (e) {
        e.preventDefault();
        validate();
    });

    function validate() {

        axios.get('https://vulnr.hack-au.com/level/validate', {params: {level, sol: $('#password').val() }})
        // axios.get('http://localhost:8001/level/validate', {params: {level, sol: $('#password').val() }})
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
}
