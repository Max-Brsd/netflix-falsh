function isEmail(EmailVal) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(EmailVal);
}

function toggle(id) {
  var x = document.getElementById(id);
  i = id.slice(1)
  var y = document.getElementById('ans'+i);
  
  x.classList.toggle('rotate');
  y.classList.toggle('closed');
}

function remplir_faq(){
  fetch('faq.json')
  .then(response => response.json())
  .then(data => {
    let template = document.getElementById("template")

    for(let d of data){
      let clone = document.importNode(template.content, true);
      let newContent = clone.firstElementChild.innerHTML
        .replace(/{{question}}/g, d.question)
        .replace(/{{reponse}}/g, d.reponse)
        clone.firstElementChild.innerHTML = newContent;

        document.querySelector("#questions").appendChild(clone);
    }
  })
}

function valider_email(){
  let email = document.getElementById("email").value;
  if(isEmail(email)){
    alert("Email valide !")
  }else{
    alert("Email non valide !")
  }
}

window.addEventListener('load',remplir_faq());