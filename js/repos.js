 // Create elements to describe every single repo
 function create(content){
    parentElement = document.getElementById('repos');
    for (let repo of content) {
        // Define de div to contain info about repos
        container = document.createElement('div');
        appendChildElement = parentElement.appendChild(container)
        appendChildElement.className = "repos-info"
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
        count_star.className='cout-star'
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
// Retriving and handle data
function getRepos(account){
  document.getElementById('h2').className='dispay-info'
  document.getElementById('hr').className='hr'
  fetch(`https://api.github.com/users/${account}/repos`)
  .then(function(response) {
    return response.json();
  })
  .then(function(repos) {
      document.getElementById('user-info').className='user-info'
      var user= repos[0].owner.login;
      var img_user = repos[0].owner.avatar_url
      document.getElementById('img-profile').src=img_user
      document.getElementById('user-name').innerHTML='@'+user
      document.getElementById('full-name').innerHTML=user
      
      var name = repos.map(function(info){
          return info
      })
      create(name)
      name=[]
  }).catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
}

// Validate search content
function search() {
  var account = document.getElementById('search').value
  if (account) {
    location.reload(true)
    getRepos(account)
  }else{
    alert('Campo de busqueda vacío')
  }
}