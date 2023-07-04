

async function infos(link){
    let promise = await fetch(link);

    let lista_json = await promise.json();
    return lista_json;
   
}

let lista = document.getElementById("lista-git");
async function cria_items(){
    json = await infos("https://api.github.com/users/J-Linaris");


    let li = document.createElement("li");
    li.innerText="Login: "+json.login;
    lista.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Seguidores: "+json.followers;
    lista.appendChild(li);

    let span = document.createElement("span");
    span.innerText="Imagem de avatar: "
    let a = document.createElement("a");
    a.innerText = "clique aqui";
    a.href=json.avatar_url;
    a.style.fontWeight = "500";
    a.style.color="rgb(184, 155, 29)";
    li = document.createElement("li");
    li.append(span);
    li.appendChild(a);
    lista.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Seguindo: "+json.following;
    lista.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    a.href = json.html_url;
    a.innerText = "Clique aqui para mais informações sobre "+json.login;
    a.style.fontWeight = "500";
    a.style.color="rgb(184, 155, 29)";
    li.appendChild(a);
    lista.appendChild(li);
    return true
}
let ocorrência = cria_items();

let fundo = document.getElementById("tela-fundo");
let body = document.querySelector("body");
let a = document.querySelectorAll("a");
let botao = document.getElementById("botao-b")
let controle = true;

function light_mode(){
    
        if(controle==true){
            fundo.style.backgroundColor = "rgb(237, 235, 228)";
            body.style.backgroundColor = "rgb(117, 117, 117)";
            body.style.color = "black";
            for(let i =0; i<a.length; i++){
                a[i].style.color = "black";
            }
            botao.style.backgroundColor = "rgb(181, 181, 181)";
            botao.style.color="black";
            botao.style.borderColor="rgb(181, 181, 181)";
            controle = false;
            
        }
        else{
            fundo.style.backgroundColor = "rgb(84, 84, 83)";
            body.style.backgroundColor = "rgba(0,0,0,0.87)" ;
            body.style.color = "white";
            for(let i =0; i<a.length; i++){
                a[i].style.color = "white";
            }
            botao.style.backgroundColor = "rgb(119, 118, 118)";
            botao.style.color="white";
            botao.style.borderColor="rgb(119, 118, 118)";

            controle = true; 
            
        }  
        
    }
