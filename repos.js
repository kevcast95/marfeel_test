/* function create(){
    let repos = ['java.js','python.py', 'index.html', 'back.rb']
    parentElement = document.getElementById('repos');
    for (let repo of repos) {
        childElement = document.createElement('p');
        appendChildElement = parentElement.appendChild(childElement)
        appendChildElement.innerHTML = repo
    
}
} */

function getRepos() {
    fetch('https://api.github.com/users/reasonml/repos')
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

      
      
    repos.map(function(info){
        parentElement = document.getElementById('repos');
        for (let repo of info.name) {
            childElement = document.createElement('div');
            appendChildElement = parentElement.appendChild(childElement)
            appendChildElement.innerHTML = repo
        
        }
        
    })
  });
}