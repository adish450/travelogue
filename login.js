<% include partials/header %>
<link rel="stylesheet" href="/stylesheets/profile.css">
<body>
  
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Travelogue</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      </ul>
      <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <%= name %>
        </a>
          <div class="dropdown-menu" aria-labelledby="Dropdown">
          <a class="dropdown-item" href="#">My Blogs</a>
          <a class="dropdown-item" href="#">My Account</a>
          <a class="dropdown-item" href="/logout">Logout</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</header>
<section>
<div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Hello, <%= name %> ! </h1>
        <p>This is your own space where you can share your nostalgic experiences !</p>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Get Started!</button>

<!-- Modal -->
<form action ="/users/<%= name%>" method="POST"> 
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Blog</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
           <div class="form-group">
    <label for="exampleFormControlTextarea2">Title</label>
    <textarea name="title" class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>           
    <label for="exampleFormControlTextarea1">Content</label>
    <textarea name="content" class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
</form>    

</section>


     
<div class="container">
          <div class="row">
          <% for(var j=0;j<User.blog_title.length;j++){%>
          <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
              <div class="card-body">
              <h5 class="card-title"><%= User.blog_title[j] %></h5>
              <p class="card-text"><a class="btn btn-secondary" href="/users/<%= name %>/blog/<%= User.blog_title[j] %>" role="button">View details &raquo;</a></p>
          </div>
      </div>
      <% }%>
      </div>a



 </div> <!-- /container -->
      <footer>
        <p>&copy; Travelogue 2017</p>
      </footer>
   


<% include partials/footer %>