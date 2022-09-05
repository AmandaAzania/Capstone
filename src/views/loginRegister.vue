<template>
 
  <a href="#login" class="nav-link" data-toggle="modal"><i class="fa fa-sign-in"></i> Login</a>
  <a href="#register" class="nav-link" data-toggle="modal"><i class="fa fa-user-plus"></i> Register</a>
  <!-- Login Modal -->
  <div class="modal fade" id="login">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content form-wrapper">
        <div class="close-box" data-dismiss="modal">
          <i class="fa fa-times fa-2x"></i>
        </div>
        <div class="container-fluid mt-5">
          <form action="{{route('login')}}" method="post" id="LoginForm">
            <div class="form-group text-center">
              <h4>Login Form</h4>
              <h6>Enter your credentials</h6>
            </div>
            <div class="form-group" style="position: relative;">
              <label for="l_email">Email</label>
              <input type="email" id="l_email" class="form-control mb-1" placeholder="someone@something.domain" required>
              
              
              
            </div>
            <div class="form-group pb-3" style="position: relative;">
              <label for="l_password">Password</label>
              <input type="password" id="l_password" class="form-control mb-1" placeholder="*******************" required>
              <a href="#forgotPassword" style="display:block; position: absolute; right: 0;" title="Fill Email Field and Click it">
                Forgot Password?
              </a>
            </div>
            <div class="form-group pt-2">
              <button class="btn btn-info form-control">Login</button>
            </div>
            <div class="form-group text-center pt-2 social-login">
              <h6>OR Continue with</h6>
              <a href="#" class="google"> <i class="fa fa-google-plus fa-lg"></i> </a>
              <a href="#" class="facebook"> <i class="fa fa-facebook fa-lg"></i> </a>
              <a href="#" class="twitter"> <i class="fa fa-twitter fa-lg"></i> </a>
              <a href="#" class="github"> <i class="fa fa-github fa-lg"></i> </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Registeration Modal -->
  <div class="modal fade" id="register">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content form-wrapper">
        <div class="close-box" data-dismiss="modal">
          <i class="fa fa-times fa-2x"></i>
        </div>
        <div class="container-fluid mt-5">
          <form action="#" method="post" id="RegisterationForm">
            <div class="form-group text-center pb-2">
              <h4>Registration Form</h4>
            </div>
            <div class="form-row">
              <div class="form-group col">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" placeholder="Jhon Doe" required>
              </div>
              <div class="form-group col" style="position:relative;">
                <label for='photo_upload' style="display:block">Profile Picture</label>
                <button type="button" class="btn btn-dark form-control" onclick="document.getElementById('photo_upload').click()" id="photo_btn">Select Image</button>
                <input type="file" name="photo" id="photo_upload" accept="image/*" style="display:none;" required>
              </div>
            </div>
            <div class="form-group" style="position:relative;">
              <label for="email">Email</label>
              <input type="email" id="email" class="form-control mb-1" placeholder="jhonedoe@gmail.com" required>
              <a href="#" data-toggle="modal" data-target="#login" style="display:none; position: absolute; right: 0; font-size: 12px;">That's you? Login</a>
             
            </div>
            <div class="form-row mb-1">
              <div class="form-group col">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" placeholder="*******************" required>
               
              </div>
              <div class="form-group col">
                <label for="password_confirmation">Confirm Password</label>
                <input type="password" id="password_confirmation" class="form-control" placeholder="*******************" required>
              </div>
            </div>

            <div class="form-group">
              <button class="btn btn-info form-control">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


 .modal .modal-content.form-wrapper .icon-box {
	 height: 50px;
	 width: 50px;
	 background: #007bff;
	 color: #f2f3f5;
	 margin: 0 auto;
	 position: absolute;
	 top: -4%;
	 left: -2%;
	 border-radius: 50%;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
}
 .modal .modal-content.form-wrapper .close-box {
	 height: 50px;
	 width: 50px;
	 background: #f00;
	 color: #f2f3f5;
	 margin: 0 auto;
	 position: absolute;
	 top: -4%;
	 right: -2%;
	 border-radius: 50%;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	 cursor: pointer;
}
 .modal .modal-content.form-wrapper .btn-info {
	 transition: all 500ms;
	 background: #007bff;
	 color: #fff;
}
 .modal .modal-content.form-wrapper .btn-info:hover {
	 background: transparent;
	 border-color: #007bff;
	 color: #007bff;
}
 .modal .modal-content.form-wrapper .social-login a {
	 transition: all 500ms;
	 display: inline-block;
	 height: 40px;
	 width: 40px;
	 margin: 0 auto;
	 background: #007bff;
	 color: #fff;
	 border-radius: 50%;
	 margin: 0 auto;
	 padding-top: 7px;
	 border: 1px solid transparent;
}
 .modal .modal-content.form-wrapper .social-login a.google {
	 background: #db4437;
}
 .modal .modal-content.form-wrapper .social-login a.google:hover {
	 border-color: #db4437;
	 color: #db4437;
	 background: transparent;
}
 .modal .modal-content.form-wrapper .social-login a.facebook {
	 background: #4267b2;
}
 .modal .modal-content.form-wrapper .social-login a.facebook:hover {
	 border-color: #4267b2;
	 color: #4267b2;
	 background: transparent;
}
 .modal .modal-content.form-wrapper .social-login a.twitter {
	 background: #1da1f2;
}
 .modal .modal-content.form-wrapper .social-login a.twitter:hover {
	 border-color: #1da1f2;
	 color: #1da1f2;
	 background: transparent;
}
 .modal .modal-content.form-wrapper .social-login a.github {
	 background: #24292e;
}
 .modal .modal-content.form-wrapper .social-login a.github:hover {
	 border-color: #24292e;
	 color: #24292e;
	 background: transparent;
}


</style>