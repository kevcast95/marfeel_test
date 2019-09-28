 // Create elements to describe every single repo
 function create(content){
    parentElement = document.getElementById('repos');
    parentElement.className ='repos'
    for (let repo of content) {
        // Define de div to contain info about repos
        container = document.createElement('div');
        appendChildElement = parentElement.appendChild(container)
        appendChildElement.className = "repos-info"
        appendChildElement.id = "repos-info"
        // Define repos name element
        contain_name = document.createElement('p');
        repo_name = container.appendChild(contain_name)
        repo_name.innerHTML = repo.name
        repo_name.className= 'repo-name'
        // Define repos star element
        contain_star = document.createElement('img');
        star = container.appendChild(contain_star)
        star.src = './assets/star.png'
        star.className='star'
        p_star =  document.createElement('p');
        count_star = container.appendChild(p_star)
        count_star.innerHTML = repo.stargazers_count
        count_star.className='count-star'
        // Define repos fork element
        contain_fork = document.createElement('img');
        fork = container.appendChild(contain_fork)
        fork.src = './assets/repo-forked.svg'
        fork.className='fork'
        p_fork =  document.createElement('p');
        count_fork = container.appendChild(p_fork)
        count_fork.innerHTML = repo.forks_count
}
}
// Header set on browser profile info
function header(repos){
      document.getElementById('user-info').className='user-info'
      var user= repos[0].owner.login;
      var img_user = repos[0].owner.avatar_url
      document.getElementById('img-profile').src=img_user
      document.getElementById('img-profile').className ='img-profile'
      document.getElementById('user-name').innerHTML=`<i>@${user}</i>`
      document.getElementById('full-name').innerHTML=user
      document.getElementById('bio').innerHTML='This is the bio...'
      document.getElementById('h2').className='dispay-info'
      document.getElementById('h2').style.marginLeft='17px'
      document.getElementById('hr').className='hr'
      document.getElementById('error').className ='none'
      document.getElementById('err-msg').className ='none'
}
// ErrorMs set on browser "Not found"
function errorMsg(){
    document.getElementById('user-info').className='none'
    document.getElementById('img-profile').className ='none'
    document.getElementById('h2').className='none'
    document.getElementById('hr').className='none'
    document.getElementById('error').className ='container-error'
    document.getElementById('err-msg').className ='err-msg'
}

// Retriving and handle data
function getRepos(account){
  fetch(`https://api.github.com/users/${account}/repos`)
  .then(function(response) {
    return response.json();
  })
  .then(function(repos) {
      header(repos)
      var name = repos.map(function(info){
          return info
      })
      create(name)
      console.log(name);
      
  }).catch(function(error) {
    errorMsg()
  });
}

// Validate search content
var load = 0
function search() {
  var account = document.getElementById('search').value
  if (account) {
    // load validate the first searching to load info
    load = load+1
    if(load==1){
      getRepos(account)
    }else{
      // For more than one searching it is necessary to remove previous info and load new
       var elms = document.querySelectorAll("[id='repos-info']")
       for (let i = 0; i < elms.length; i++) {
        var parentElement = document.getElementById('repos-info');
        var ve = parentElement.closest('div')
        ve.parentNode.removeChild(ve);
       }
       getRepos(account)
    }
  }else{
    alert('Campo de busqueda vacío')
  }
}