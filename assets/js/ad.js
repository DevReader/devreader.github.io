let ad = document.getElementById("ad"),
    title = document.getElementById("adTitle"),
    desc = document.getElementById("adDesc"),
    icon = document.getElementById("adIcon");

fetch('https://raw.githubusercontent.com/devreader/devreader.github.io/master/assets/json/ad.json')
  .then(response => response.ok ? response : Promise.reject(response))
  .then(response => response.json()) // или как текст `response.text()`
  .then(json => {

     console.log(json);

     if (json.adVisible == false) {
       ad.style.display = "none"
     }
     
     ad.onclick = function() { location.href=json.adClickLink; };
     ad.setAttribute("title", "Нажмите, чтобы перейти по рекомендации " + json.adClient);
     title.innerHTML = json.adTitle;
     desc.innerHTML = json.adDesc;
     icon.setAttribute("src", json.adIcon);
    
  }
);