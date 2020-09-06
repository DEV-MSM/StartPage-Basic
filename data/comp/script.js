function loadSetts(){
  var welcome = localStorage.spbwelcome;
  var pass = localStorage.spbpass;
  var nameuser = localStorage.spbname;
  var mode = localStorage.spbmode;
  var history = localStorage.spbhistory;
  var bg = localStorage.spbbg;
  var zoom = localStorage.spbzoom;
  var email = localStorage.spbemail;
  var acril1 = localStorage.spbacrilc1;
  var acril2 = localStorage.spbacrilc2;
  var acril3 = localStorage.spbacrilc3;
  var wsize = localStorage.spbwsize;
  var profile64 = localStorage.spbprofile;
  var part = localStorage.spbpart;
  document.body.style.zoom = zoom;
  document.getElementById('startup').style.display = welcome;
  document.getElementById('bar-search').focus();
  document.getElementById('li-mode').value = "dark";
  document.getElementById('fr-name').value = nameuser;
  document.getElementById('op-name').value = nameuser;
  document.getElementById('li-mode').value = mode;
  document.getElementById('li-zoom').value = zoom;
  document.getElementById('op-email').value = email;
  document.getElementById('history').innerHTML = history;
  document.getElementById('im-user').src = profile64;
  loadMode();
  verifyHistory();
  verifyBg();
  verifyProv();
  loadPart();
  rndSug();
  document.getElementById('t-license').innerHTML = tlicense;
  document.getElementById('t-terms').innerHTML = tterms;
  document.getElementById('t-privacy').innerHTML = tprivacy;
  document.getElementById('ra-co1').value = acril1;
  document.getElementById('ra-co2').value = acril2;
  document.getElementById('ra-co3').value = acril3;
  document.getElementById('vis-col').style.background = "rgb(" +acril1 +"," +acril2 +"," +acril3 +")";
  document.getElementById('li-part').value = part;
  document.body.style.backgroundSize = wsize;
  document.getElementById('li-sz').value = wsize;
}

function startCounter(){
  var passcph = localStorage.spbpass;
  var nowcph = btoa("12345");
  if(typeof(Storage) !== "undefined"){
    if(localStorage.spbpass){
      localStorage.spbpass = passcph;
    } else{
      localStorage.spbwelcome = "none";
      localStorage.spbpass = nowcph;
      localStorage.spbname = "Usuario";
      localStorage.spbemail = "";
      localStorage.spbzoom = "1";
      localStorage.spbhistory = "";
      localStorage.spbmode = "dark";
      localStorage.spbbg = "auto";
      localStorage.spbzoom = "1";
      localStorage.spbprov = "g";
      localStorage.spbemail = "";
      localStorage.spbacrilc1 = "125";
      localStorage.spbacrilc2 = "125";
      localStorage.spbacrilc3 = "125";
      localStorage.spbwsize = "auto";
      localStorage.spbprofile = "data/res/im-user.png";
      localStorage.spbpart = "0";
      window.location.reload();
    }
  } else{
    alert("Navegador no compatible con StartPage");
  }
}

function enlaceApp(objeto){
  var link = objeto.dataset.url;
  window.open(link, "_blank");
}

function verifyHistory(){
  var history = localStorage.spbhistory;
  var name = localStorage.spbname;
  var empty = "";
  if(history == empty){
    document.getElementById('tx-history').innerHTML = "El historial está vacío.";
  }
  else{
    document.getElementById('tx-history').innerHTML = "Se muestra el historial de búsqueda de " +name +":";
  }
}

function verifyProv(){
  var prov = localStorage.spbprov;
  switch(prov){
    case "g":
    document.getElementById("bar-search").dataset.vendor = "https://www.google.com/search?q=";
    document.getElementById("bar-search").dataset.ii = "g";
    document.getElementById('ic-vend1').style.opacity = "1";
    document.getElementById('ic-vend2').style.opacity = "0.5";
    document.getElementById('ic-vend3').style.opacity = "0.5";
    document.getElementById('ic-vend4').style.opacity = "0.5";
    document.getElementById('ic-vend1').style.transform = "scale(1)";
    document.getElementById('ic-vend2').style.transform = "scale(0.8)";
    document.getElementById('ic-vend3').style.transform = "scale(0.8)";
    document.getElementById('ic-vend4').style.transform = "scale(0.8)";
    document.getElementById('vsensor').value = "0px";
    document.getElementById('v-mapa').style.top = "0px";
    document.getElementById('op-ve').value = prov;
    break;
    case "b":
    document.getElementById("bar-search").dataset.vendor = "https://www.bing.com/search?q=";
    document.getElementById("bar-search").dataset.ii = "b";
    document.getElementById('ic-vend1').style.opacity = "0.5";
    document.getElementById('ic-vend2').style.opacity = "1";
    document.getElementById('ic-vend3').style.opacity = "0.5";
    document.getElementById('ic-vend4').style.opacity = "0.5";
    document.getElementById('ic-vend1').style.transform = "scale(0.8)";
    document.getElementById('ic-vend2').style.transform = "scale(1)";
    document.getElementById('ic-vend3').style.transform = "scale(0.8)";
    document.getElementById('ic-vend4').style.transform = "scale(0.8)";
    document.getElementById('vsensor').value = "-65px";
    document.getElementById('v-mapa').style.top = "-65px";
    document.getElementById('op-ve').value = prov;
    break;
    case "d":
    document.getElementById("bar-search").dataset.vendor = "https://duckduckgo.com/?q=";
    document.getElementById("bar-search").dataset.ii = "d";
    document.getElementById('ic-vend1').style.opacity = "0.5";
    document.getElementById('ic-vend2').style.opacity = "0.5";
    document.getElementById('ic-vend3').style.opacity = "1";
    document.getElementById('ic-vend4').style.opacity = "0.5";
    document.getElementById('ic-vend1').style.transform = "scale(0.8)";
    document.getElementById('ic-vend2').style.transform = "scale(0.8)";
    document.getElementById('ic-vend3').style.transform = "scale(1)";
    document.getElementById('ic-vend4').style.transform = "scale(0.8)";
    document.getElementById('vsensor').value = "-130px";
    document.getElementById('v-mapa').style.top = "-130px";
    document.getElementById('op-ve').value = prov;
    break;
    case "y":
    document.getElementById("bar-search").dataset.vendor = "https://www.youtube.com/results?q=";
    document.getElementById("bar-search").dataset.ii = "y";
    document.getElementById('ic-vend1').style.opacity = "0.5";
    document.getElementById('ic-vend2').style.opacity = "0.5";
    document.getElementById('ic-vend3').style.opacity = "0.5";
    document.getElementById('ic-vend4').style.opacity = "1";
    document.getElementById('ic-vend1').style.transform = "scale(0.8)";
    document.getElementById('ic-vend2').style.transform = "scale(0.8)";
    document.getElementById('ic-vend3').style.transform = "scale(0.8)";
    document.getElementById('ic-vend4').style.transform = "scale(1)";
    document.getElementById('vsensor').value = "-195px";
    document.getElementById('v-mapa').style.top = "-195px";
    document.getElementById('op-ve').value = prov;
    break;
  }
}

function verifyBg(){
  var bg = localStorage.spbbg;
  var auto = "auto";
  if(bg == auto){
    document.getElementById('text-cauto').innerHTML = "Automático. Los colores se adaptan al fondo de pantalla.";
    document.getElementById('text-col').style.display = "none";
    document.getElementById('text-bauto').style.display = "none";
    document.getElementById('col-1').style.display = "none";
    document.getElementById('col-2').style.display = "none";
    document.getElementById('op-tx').style.display = "none";
    document.getElementById('ftl').style.display = "none";
    document.getElementById('li-bg').value = "auto";
    getWallpaper();
  }
  else{
    document.getElementById('text-cauto').innerHTML = "Primario";
    document.getElementById('text-col').style.display = "block";
    document.getElementById('text-bauto').style.display = "block";
    document.getElementById('col-1').style.display = "block";
    document.getElementById('col-2').style.display = "block";
    document.getElementById('op-tx').style.display = "block";
    document.getElementById('ftl').style.display = "block";
    document.getElementById('li-bg').value = "manual";
    loadWallpaper();
  }
}

function activeBar(){
  var termbus = document.getElementById('bar-search').value;
  switch (termbus){
    case "pacman":
    window.open("data/res/pacman/Index.html", "Pacman" , "width=1100,height=550");
    document.getElementById('bar-search').value ="";
    break;
    case "snake":
    window.open("data/res/snake/Index.html", "Snake" , "width=1100,height=550");
    document.getElementById('bar-search').value ="";
    break;
    case "t-rex":
    window.open("data/res/trex/Index.html", "T-Rex" , "width=1100,height=550");
    document.getElementById('bar-search').value ="";
    break;
    case "edge-surf":
    window.open("data/res/edgesurf/index.html", "Edge SURF" , "width=1100,height=550");
    document.getElementById('bar-search').value ="";
    break;
    case "":
    break;
    case "borrar historial":
    delHistory();
    document.getElementById('bar-search').value = "";
    break;
    case "restablecer":
    resetAll();
    break;
    case "configurar":
    showMenu();
    openSetts();
    document.getElementById('bar-search').value ="";
    break;
    case "personalizar":
    showMenu();
    openCustom();
    document.getElementById('bar-search').value ="";
    break;
    case "historial":
    showMenu();
    openHistory();
    document.getElementById('bar-search').value ="";
    break;
    case "ayuda":
    showMenu();
    openHelp();
    document.getElementById('bar-search').value ="";
    break;
    case "info":
    showMenu();
    openInfo();
    document.getElementById('bar-search').value ="";
    break;
    default:
    searchNow();
    break;
  }
}

function searchNow(){
  var vendor = document.getElementById('bar-search').dataset.vendor;
  var termbus = document.getElementById('bar-search').value;
  createHistory();
  window.open(vendor +termbus, "_blank");
  document.getElementById('bar-search').value = "";
}

function changeBg(){
  var wsize = localStorage.spbwsize;
  var bg = document.getElementById('li-bg').value;
  var auto = "auto";
  if(bg == auto){
    document.getElementById('text-cauto').innerHTML = "Automático. Los colores se adaptan al fondo de pantalla.";
    document.getElementById('text-col').style.display = "none";
    document.getElementById('text-bauto').style.display = "none";
    document.getElementById('col-1').style.display = "none";
    document.getElementById('col-2').style.display = "none";
    document.getElementById('op-tx').style.display = "none";
    document.getElementById('ftl').style.display = "none";
    getWallpaper();
    document.body.style.backgroundSize = wsize;
    localStorage.spbbg = bg;
  }
  else{
    document.getElementById('text-cauto').innerHTML = "Primario";
    document.getElementById('text-col').style.display = "block";
    document.getElementById('text-bauto').style.display = "block";
    document.getElementById('col-1').style.display = "block";
    document.getElementById('col-2').style.display = "block";
    document.getElementById('op-tx').style.display = "block";
    document.getElementById('ftl').style.display = "block";
    document.body.style.backgroundSize = wsize;
    localStorage.spbbg = bg;
  }
}

function getWallpaper(){
  var date = new Date().getDay();
  switch (date){
    case 0:
    document.body.style.background = "url(data/res/bg1.jpg) no-repeat";
    document.getElementById('menu').style.background = "linear-gradient(rgb(4,87,155), rgb(2,63,81))";
    document.getElementById('mapps').style.background = "linear-gradient(rgb(4,87,155), rgb(2,63,81))";
    document.getElementById('col-1').value = "#04579b";
    document.getElementById('col-2').value = "#023f51";
    localStorage.spbcolor1 = "#04579b";
    localStorage.spbcolor2 = "#023f51";
    break;
    case 1:
    document.body.style.background = "url(data/res/bg2.jpg) no-repeat";
    document.getElementById('menu').style.background = "linear-gradient(rgb(154,64,89), rgb(66,17,58))";
    document.getElementById('mapps').style.background = "linear-gradient(rgb(154,64,89), rgb(66,17,58))";
    document.getElementById('col-1').value = "#9a4059";
    document.getElementById('col-2').value = "#42113a";
    localStorage.spbcolor1 = "#9a4059";
    localStorage.spbcolor2 = "#42113a";
    break;
    case 2:
    document.body.style.background = "url(data/res/bg3.jpg) no-repeat";
    document.getElementById('menu').style.background = "linear-gradient(rgb(3,94,160), rgb(0,36,72))";
    document.getElementById('mapps').style.background = "linear-gradient(rgb(3,94,160), rgb(0,36,72))";
    document.getElementById('col-1').value = "#035ea0";
    document.getElementById('col-2').value = "#002448";
    localStorage.spbcolor1 = "#035ea0";
    localStorage.spbcolor2 = "#002448";
    break;
    case 3:
    document.body.style.background = "url(data/res/bg4.jpg) no-repeat";
    document.getElementById('menu').style.background = "linear-gradient(rgb(210,105,0), rgb(81,0,0))";
    document.getElementById('mapps').style.background = "linear-gradient(rgb(210,105,0), rgb(81,0,0))";
    document.getElementById('col-1').value = "#d26900";
    document.getElementById('col-2').value = "#510000";
    localStorage.spbcolor1 = "#d26900";
    localStorage.spbcolor2 = "#510000";
    break;
    case 4:
    document.body.style.background = "url(data/res/bg5.jpg) no-repeat";
    document.getElementById('menu').style.background = "linear-gradient(rgb(255,133,74), rgb(53,106,0))";
    document.getElementById('mapps').style.background = "linear-gradient(rgb(255,133,74), rgb(53,106,0))";
    document.getElementById('col-1').value = "#ff854a";
    document.getElementById('col-2').value = "#356a00";
    localStorage.spbcolor1 = "#ff854a";
    localStorage.spbcolor2 = "#356a00";
    break;
    case 5:
    document.body.style.background = "url(data/res/bg6.jpg) no-repeat";
    document.getElementById('menu').style.background = "linear-gradient(rgb(7,104,11), rgb(44,53,10)";
    document.getElementById('mapps').style.background = "linear-gradient(rgb(7,104,11), rgb(44,53,10)";
    document.getElementById('col-1').value = "#07680b";
    document.getElementById('col-2').value = "#2C350A";
    localStorage.spbcolor1 = "#07680b";
    localStorage.spbcolor2 = "#2C350A";
    break;
    case 6:
    document.body.style.background = "url(data/res/bg7.jpg) no-repeat";
    document.getElementById('menu').style.background = "linear-gradient(rgb(155,88,79), rgb(195,75,15))";
    document.getElementById('mapps').style.background = "linear-gradient(rgb(155,88,79), rgb(195,75,15))";
    document.getElementById('col-1').value = "#9b584f";
    document.getElementById('col-2').value = "#c34b0f";
    localStorage.spbcolor1 = "#9b584f";
    localStorage.spbcolor2 = "#c34b0f";
    break;
    default:
    document.body.style.background = "url(data/res/bg1.jpg) no-repeat";
    document.getElementById('menu').style.background = "linear-gradient(rgb(4,87,155), rgb(2,63,81))";
    document.getElementById('mapps').style.background = "linear-gradient(rgb(4,87,155), rgb(2,63,81))";
    document.getElementById('col-1').value = "#04579b";
    document.getElementById('col-2').value = "#023f51";
    localStorage.spbcolor1 = "#04579b";
    localStorage.spbcolor2 = "#023f51";
    break;
  }
}

function setWallpaper(){
  var wsize = localStorage.spbwsize;
  var wall = document.getElementById('op-tx').value;
  document.body.style.background = "url(" +wall +") no-repeat";
  document.body.style.backgroundSize = wsize;
  localStorage.spbwall = wall;
}

function loadWallpaper(){
  var wall = localStorage.spbwall;
  var col1 = localStorage.spbcolor1;
  var col2 = localStorage.spbcolor2;
  document.body.style.background = "url(" +wall +") no-repeat";
  document.getElementById('menu').style.background = "linear-gradient(" +col1 +", " +col2 +")";
  document.getElementById('mapps').style.background = "linear-gradient(" +col1 +", " +col2 +")";
  document.getElementById('col-1').value = col1;
  document.getElementById('col-2').value = col2;
}

function loadMode(){
  var mode = localStorage.spbmode;
  var dark = "dark";
  if(mode == dark){
    document.getElementById('content').style.background = "rgba(0,0,0,0.4)";
    document.getElementById('signal').style.color = "white";
    document.getElementById('clock').style.color = "white";
    document.getElementById('tx-info').style.color = "white";
    document.getElementById('bar-search').style.color = "white";
    document.getElementById('ic-menu').style.color = "white";
    document.getElementById('app-0').style.color = "white";
    document.getElementById('app-1').style.color = "white";
    document.getElementById('app-2').style.color = "white";
    document.getElementById('app-3').style.color = "white";
    document.getElementById('app-4').style.color = "white";
    document.getElementById('app-5').style.color = "white";
    document.getElementById('ic-vend1').style.filter = "invert(0)";
    document.getElementById('ic-vend2').style.filter = "invert(0)";
    document.getElementById('ic-vend3').style.filter = "invert(0)";
    document.getElementById('ic-vend4').style.filter = "invert(0)";
  }
  else{
    document.getElementById('content').style.background = "rgba(255,255,255,0.2)";
    document.getElementById('signal').style.color = "black";
    document.getElementById('clock').style.color = "black";
    document.getElementById('tx-info').style.color = "black";
    document.getElementById('bar-search').style.color = "black";
    document.getElementById('ic-menu').style.color = "black";
    document.getElementById('app-0').style.color = "black";
    document.getElementById('app-1').style.color = "black";
    document.getElementById('app-2').style.color = "black";
    document.getElementById('app-3').style.color = "black";
    document.getElementById('app-4').style.color = "black";
    document.getElementById('app-5').style.color = "black";
    document.getElementById('ic-vend1').style.filter = "invert(3)";
    document.getElementById('ic-vend2').style.filter = "invert(3)";
    document.getElementById('ic-vend3').style.filter = "invert(3)";
    document.getElementById('ic-vend4').style.filter = "invert(3)";
  }
}

function loadPart(){
  var part = localStorage.spbpart;
  var on = "1";
  if(part == on){
    document.getElementById('particles-js').style.transform = "scale(1)";
  }
  else{
    document.getElementById('particles-js').style.transform = "scale(0)";
  }
}

function showMenu(){
	document.getElementById('menu').style.left = "0%";
    document.getElementById('menu').style.boxShadow = "0 39px 30px rgba(0,0,0,0.8), 0 1px 40px rgba(0,0,0,0.9)";
    document.getElementById('fade').style.display = "block";
    document.getElementById('opt-1').style.transform = "translateX(0px)";
    document.getElementById('opt-2').style.transform = "translateX(0px)";
    document.getElementById('opt-3').style.transform = "translateX(0px)";
    document.getElementById('opt-4').style.transform = "translateX(0px)";
    document.getElementById('opt-5').style.transform = "translateX(0px)";
    document.getElementById('opt-6').style.transform = "translateX(0px)";
    document.getElementById('opt-7').style.transform = "translateX(0px)";
    document.getElementById('opt-8').style.transform = "translateX(0px)";
    document.getElementById('sc-controls').style.transform = "translateX(0px)";
}

function hideMenu(){
  if(screen.width > screen.height){
    document.getElementById('menu').style.left = "-24%";
    document.getElementById('mapps').style.transform = "scale(0)";
    document.getElementById('mapps').style.borderRadius = "100%";
    document.getElementById('menu').style.boxShadow = "0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0)";
    document.getElementById('mapps').style.boxShadow = "0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0)";
    document.getElementById('fade').style.display = "none";
    document.getElementById('opt-1').style.transform = "translateX(-50%)";
    document.getElementById('opt-2').style.transform = "translateX(-50%)";
    document.getElementById('opt-3').style.transform = "translateX(-50%)";
    document.getElementById('opt-4').style.transform = "translateX(-50%)";
    document.getElementById('opt-5').style.transform = "translateX(-50%)";
    document.getElementById('opt-6').style.transform = "translateX(-50%)";
    document.getElementById('opt-7').style.transform = "translateX(-50%)";
    document.getElementById('opt-8').style.transform = "translateX(-50%)";
    document.getElementById('sc-controls').style.transform = "translateX(-50%)";
    document.getElementById('sc-vendor').style.zIndex = "0";
    document.getElementById('sc-custom').style.zIndex = "0";
    document.getElementById('sc-history').style.zIndex = "0";
    document.getElementById('sc-setts').style.zIndex = "0";
    document.getElementById('sc-share').style.zIndex = "0";
    document.getElementById('sc-help').style.zIndex = "0";
    document.getElementById('sc-info').style.zIndex = "0";
    document.getElementById('pa-mn').style.transform = "translateX(0%)";
    document.getElementById('ic-back').style.transform = "scale(0)";
    document.getElementById('bar-search').focus();
  }
  else{
    document.getElementById('menu').style.left = "-74%";
    document.getElementById('mapps').style.transform = "scale(0)";
    document.getElementById('mapps').style.borderRadius = "100%";
    document.getElementById('menu').style.boxShadow = "0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0)";
    document.getElementById('mapps').style.boxShadow = "0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0)";
    document.getElementById('fade').style.display = "none";
    document.getElementById('opt-1').style.transform = "translateX(-50%)";
    document.getElementById('opt-2').style.transform = "translateX(-50%)";
    document.getElementById('opt-3').style.transform = "translateX(-50%)";
    document.getElementById('opt-4').style.transform = "translateX(-50%)";
    document.getElementById('opt-5').style.transform = "translateX(-50%)";
    document.getElementById('opt-6').style.transform = "translateX(-50%)";
    document.getElementById('opt-7').style.transform = "translateX(-50%)";
    document.getElementById('opt-8').style.transform = "translateX(-50%)";
    document.getElementById('sc-controls').style.transform = "translateX(-50%)";
    document.getElementById('sc-vendor').style.zIndex = "0";
    document.getElementById('sc-custom').style.zIndex = "0";
    document.getElementById('sc-history').style.zIndex = "0";
    document.getElementById('sc-setts').style.zIndex = "0";
    document.getElementById('sc-share').style.zIndex = "0";
    document.getElementById('sc-help').style.zIndex = "0";
    document.getElementById('sc-info').style.zIndex = "0";
    document.getElementById('pa-mn').style.transform = "translateX(0%)";
    document.getElementById('ic-back').style.transform = "scale(0)";
  }
}

function createHistory(){
  var history = localStorage.spbhistory;
  var name = localStorage.spbname;
  var newterm = document.getElementById('bar-search').value;
  var ii = document.getElementById('bar-search').dataset.ii;
  var fxbus = "searchHist(this)";
  switch(ii){
    case "g":
    localStorage.spbhistory = '• <span data-ii="' +ii +'" class="ii-bus" title="Buscar ' +newterm +' en Google" onClick="' +fxbus +'">' +newterm +'</span><br>' +history;
    document.getElementById('tx-history').innerHTML = "Se muestra el historial de búsqueda de " +name +":";
    document.getElementById('history').innerHTML = '• <span data-ii="' +ii +'" class="ii-bus" title="Buscar ' +newterm +' en Google" onClick="' +fxbus +'">' +newterm +'</span><br>' +history;
    document.getElementById('text-ht').innerHTML = "StartPage guarda tu historial de búsqueda en el dispositivo.";
    break;
    case "b":
    localStorage.spbhistory = '• <span data-ii="' +ii +'" class="ii-bus" title="Buscar ' +newterm +' en Bing" onClick="' +fxbus +'">' +newterm +'</span><br>' +history;
    document.getElementById('tx-history').innerHTML = "Se muestra el historial de búsqueda de " +name +":";
    document.getElementById('history').innerHTML = '• <span data-ii="' +ii +'" class="ii-bus" title="Buscar ' +newterm +' en Bing" onClick="' +fxbus +'">' +newterm +'</span><br>' +history;
    document.getElementById('text-ht').innerHTML = "StartPage guarda tu historial de búsqueda en el dispositivo.";
    break;
    case "d":
    localStorage.spbhistory = '• <span data-ii="' +ii +'" class="ii-bus" title="Buscar ' +newterm +' en DuckDuckGo" onClick="' +fxbus +'">' +newterm +'</span><br>' +history;
    document.getElementById('tx-history').innerHTML = "Se muestra el historial de búsqueda de " +name +":";
    document.getElementById('history').innerHTML = '• <span data-ii="' +ii +'" class="ii-bus" title="Buscar ' +newterm +' en DuckDuckGo" onClick="' +fxbus +'">' +newterm +'</span><br>' +history;
    document.getElementById('text-ht').innerHTML = "StartPage guarda tu historial de búsqueda en el dispositivo.";
    break;
    case "y":
    localStorage.spbhistory = '• <span data-ii="' +ii +'" class="ii-bus" title="Buscar ' +newterm +' en YouTube" onClick="' +fxbus +'">' +newterm +'</span><br>' +history;
    document.getElementById('tx-history').innerHTML = "Se muestra el historial de búsqueda de " +name +":";
    document.getElementById('history').innerHTML = '• <span data-ii="' +ii +'" class="ii-bus" title="Buscar ' +newterm +' en YouTube" onClick="' +fxbus +'">' +newterm +'</span><br>' +history;
    document.getElementById('text-ht').innerHTML = "StartPage guarda tu historial de búsqueda en el dispositivo.";
    break;
  }
}

function searchHist(elemento){
  var ii = elemento.dataset.ii;
  var termbus = elemento.innerHTML;
  switch(ii){
    case "g":
    window.open("https://www.google.com/search?q=" +termbus, "_blank");
    break;
    case "b":
    window.open("https://www.bing.com/search?q=" +termbus, "_blank");
    break;
    case "d":
    window.open("https://duckduckgo.com/?q=" +termbus, "_blank");
    break;
    case "y":
    window.open("https://www.youtube.com/results?q=" +termbus, "_blank");
    break;
  }
}

function loadClock(){
  var ahora = new Date();
  var h = ahora.getHours();
  var m = ahora.getMinutes();
  var s = ahora.getSeconds();
  var dn="AM";
  if (h>12){
    dn="PM";
    h=h-12;
  }
  m = corregirHora(m);
  s = corregirHora(s);
  document.getElementById('clock').innerHTML = h+":"+m+" "+ dn;
  var t = setTimeout(function(){loadClock()},1000);
}

function refresh(){
  window.location.reload();
}

function corregirHora(i){
  if(i<10){
    i = "0" + i};
    return i;
}

function retro(){
  var panel = document.getElementById('pa-mn').style.transform;
  var move = "translateX(-50%)";
  if(panel == move){
    verifyRetro();
  }
  else{
    document.getElementById('sc-vendor').style.zIndex = "0";
    document.getElementById('sc-custom').style.zIndex = "0";
    document.getElementById('sc-history').style.zIndex = "0";
    document.getElementById('sc-setts').style.zIndex = "0";
    document.getElementById('sc-share').style.zIndex = "0";
    document.getElementById('sc-help').style.zIndex = "0";
    document.getElementById('sc-info').style.zIndex = "0";
    document.getElementById('pa-mn').style.transform = "translateX(0%)";
    document.getElementById('ic-back').style.transform = "scale(0)";
  }
}

function verifyRetro(){
  var info = document.getElementById('sc-info').style.display;
  var block = "block";
  if(info == block){
    document.getElementById('sc-vendor').style.display = "none";
    document.getElementById('sc-vendor').style.zIndex = "0";
    document.getElementById('sc-custom').style.display = "none";
    document.getElementById('sc-custom').style.zIndex = "0";
    document.getElementById('sc-history').style.display = "none";
    document.getElementById('sc-history').style.zIndex = "0";
    document.getElementById('sc-setts').style.display = "none";
    document.getElementById('sc-setts').style.zIndex = "0";
    document.getElementById('sc-share').style.display = "none";
    document.getElementById('sc-share').style.zIndex = "0";
    document.getElementById('sc-help').style.display = "none";
    document.getElementById('sc-help').style.zIndex = "0";
    document.getElementById('sc-info').style.display = "block";
    document.getElementById('sc-info').style.zIndex = "3";
    document.getElementById('pa-mn').style.transform = "translateX(-25%)";
    document.getElementById('ic-back').style.transform = "scale(1)";
  }
  else{
    verifyRetro2();
  }
}

function verifyRetro2(){
  var custom = document.getElementById('sc-custom').style.display;
  var block = "block";
  if(custom == block){
    document.getElementById('sc-vendor').style.display = "none";
    document.getElementById('sc-vendor').style.zIndex = "0";
    document.getElementById('sc-custom').style.display = "block";
    document.getElementById('sc-custom').style.zIndex = "3";
    document.getElementById('sc-history').style.display = "none";
    document.getElementById('sc-history').style.zIndex = "0";
    document.getElementById('sc-setts').style.display = "none";
    document.getElementById('sc-setts').style.zIndex = "0";
    document.getElementById('sc-share').style.display = "none";
    document.getElementById('sc-share').style.zIndex = "0";
    document.getElementById('sc-help').style.display = "none";
    document.getElementById('sc-help').style.zIndex = "0";
    document.getElementById('sc-info').style.display = "none";
    document.getElementById('sc-info').style.zIndex = "0";
    document.getElementById('pa-mn').style.transform = "translateX(-25%)";
    document.getElementById('ic-back').style.transform = "scale(1)";
  }
  else{
    document.getElementById('sc-vendor').style.display = "none";
    document.getElementById('sc-vendor').style.zIndex = "0";
    document.getElementById('sc-custom').style.display = "none";
    document.getElementById('sc-custom').style.zIndex = "0";
    document.getElementById('sc-history').style.display = "none";
    document.getElementById('sc-history').style.zIndex = "0";
    document.getElementById('sc-setts').style.display = "block";
    document.getElementById('sc-setts').style.zIndex = "3";
    document.getElementById('sc-share').style.display = "none";
    document.getElementById('sc-share').style.zIndex = "0";
    document.getElementById('sc-help').style.display = "none";
    document.getElementById('sc-help').style.zIndex = "0";
    document.getElementById('sc-info').style.display = "none";
    document.getElementById('sc-info').style.zIndex = "0";
    document.getElementById('pa-mn').style.transform = "translateX(-25%)";
    document.getElementById('ic-back').style.transform = "scale(1)";
  }
}

function openVendor(){
  document.getElementById('sc-vendor').style.display = "block";
  document.getElementById('sc-vendor').style.zIndex = "3";
  document.getElementById('sc-custom').style.display = "none";
  document.getElementById('sc-custom').style.zIndex = "0";
  document.getElementById('sc-history').style.display = "none";
  document.getElementById('sc-history').style.zIndex = "0";
  document.getElementById('sc-setts').style.display = "none";
  document.getElementById('sc-setts').style.zIndex = "0";
  document.getElementById('sc-share').style.display = "none";
  document.getElementById('sc-share').style.zIndex = "0";
  document.getElementById('sc-help').style.display = "none";
  document.getElementById('sc-help').style.zIndex = "0";
  document.getElementById('sc-info').style.display = "none";
  document.getElementById('sc-info').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-25%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openCustom(){
  document.getElementById('sc-vendor').style.display = "none";
  document.getElementById('sc-vendor').style.zIndex = "0";
  document.getElementById('sc-custom').style.display = "block";
  document.getElementById('sc-custom').style.zIndex = "3";
  document.getElementById('sc-history').style.display = "none";
  document.getElementById('sc-history').style.zIndex = "0";
  document.getElementById('sc-setts').style.display = "none";
  document.getElementById('sc-setts').style.zIndex = "0";
  document.getElementById('sc-share').style.display = "none";
  document.getElementById('sc-share').style.zIndex = "0";
  document.getElementById('sc-help').style.display = "none";
  document.getElementById('sc-help').style.zIndex = "0";
  document.getElementById('sc-info').style.display = "none";
  document.getElementById('sc-info').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-25%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openHistory(){
  document.getElementById('sc-vendor').style.display = "none";
  document.getElementById('sc-vendor').style.zIndex = "0";
  document.getElementById('sc-custom').style.display = "none";
  document.getElementById('sc-custom').style.zIndex = "0";
  document.getElementById('sc-history').style.display = "block";
  document.getElementById('sc-history').style.zIndex = "3";
  document.getElementById('sc-setts').style.display = "none";
  document.getElementById('sc-setts').style.zIndex = "0";
  document.getElementById('sc-share').style.display = "none";
  document.getElementById('sc-share').style.zIndex = "0";
  document.getElementById('sc-help').style.display = "none";
  document.getElementById('sc-help').style.zIndex = "0";
  document.getElementById('sc-info').style.display = "none";
  document.getElementById('sc-info').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-25%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openSetts(){
  document.getElementById('sc-vendor').style.display = "none";
  document.getElementById('sc-vendor').style.zIndex = "0";
  document.getElementById('sc-custom').style.display = "none";
  document.getElementById('sc-custom').style.zIndex = "0";
  document.getElementById('sc-history').style.display = "none";
  document.getElementById('sc-history').style.zIndex = "0";
  document.getElementById('sc-setts').style.display = "block";
  document.getElementById('sc-setts').style.zIndex = "3";
  document.getElementById('sc-share').style.display = "none";
  document.getElementById('sc-share').style.zIndex = "0";
  document.getElementById('sc-help').style.display = "none";
  document.getElementById('sc-help').style.zIndex = "0";
  document.getElementById('sc-info').style.display = "none";
  document.getElementById('sc-info').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-25%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openShare(){
  document.getElementById('sc-vendor').style.display = "none";
  document.getElementById('sc-vendor').style.zIndex = "0";
  document.getElementById('sc-custom').style.display = "none";
  document.getElementById('sc-custom').style.zIndex = "0";
  document.getElementById('sc-history').style.display = "none";
  document.getElementById('sc-history').style.zIndex = "0";
  document.getElementById('sc-setts').style.display = "none";
  document.getElementById('sc-setts').style.zIndex = "0";
  document.getElementById('sc-share').style.display = "block";
  document.getElementById('sc-share').style.zIndex = "3";
  document.getElementById('sc-help').style.display = "none";
  document.getElementById('sc-help').style.zIndex = "0";
  document.getElementById('sc-info').style.display = "none";
  document.getElementById('sc-info').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-25%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openHelp(){
  document.getElementById('sc-vendor').style.display = "none";
  document.getElementById('sc-vendor').style.zIndex = "0";
  document.getElementById('sc-custom').style.display = "none";
  document.getElementById('sc-custom').style.zIndex = "0";
  document.getElementById('sc-history').style.display = "none";
  document.getElementById('sc-history').style.zIndex = "0";
  document.getElementById('sc-setts').style.display = "none";
  document.getElementById('sc-setts').style.zIndex = "0";
  document.getElementById('sc-share').style.display = "none";
  document.getElementById('sc-share').style.zIndex = "0";
  document.getElementById('sc-help').style.display = "block";
  document.getElementById('sc-help').style.zIndex = "3";
  document.getElementById('sc-info').style.display = "none";
  document.getElementById('sc-info').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-25%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openInfo(){
  document.getElementById('sc-vendor').style.display = "none";
  document.getElementById('sc-vendor').style.zIndex = "0";
  document.getElementById('sc-custom').style.display = "none";
  document.getElementById('sc-custom').style.zIndex = "0";
  document.getElementById('sc-history').style.display = "none";
  document.getElementById('sc-history').style.zIndex = "0";
  document.getElementById('sc-setts').style.display = "none";
  document.getElementById('sc-setts').style.zIndex = "0";
  document.getElementById('sc-share').style.display = "none";
  document.getElementById('sc-share').style.zIndex = "0";
  document.getElementById('sc-help').style.display = "none";
  document.getElementById('sc-help').style.zIndex = "0";
  document.getElementById('sc-info').style.display = "block";
  document.getElementById('sc-info').style.zIndex = "3";
  document.getElementById('pa-mn').style.transform = "translateX(-25%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openLicense(){
  document.getElementById('sc-particles').style.display = "none";
  document.getElementById('sc-particles').style.zIndex = "0";
  document.getElementById('sc-acrilic').style.display = "none";
  document.getElementById('sc-acrilic').style.zIndex = "0";
  document.getElementById('sc-terms').style.display = "none";
  document.getElementById('sc-terms').style.zIndex = "0";
  document.getElementById('sc-privacy').style.display = "none";
  document.getElementById('sc-privacy').style.zIndex = "0";
  document.getElementById('sc-license').style.display = "block";
  document.getElementById('sc-license').style.zIndex = "3";
  document.getElementById('pa-mn').style.transform = "translateX(-50%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openTerms(){
  document.getElementById('sc-particles').style.display = "none";
  document.getElementById('sc-particles').style.zIndex = "0";
  document.getElementById('sc-acrilic').style.display = "none";
  document.getElementById('sc-acrilic').style.zIndex = "0";
  document.getElementById('sc-terms').style.display = "block";
  document.getElementById('sc-terms').style.zIndex = "3";
  document.getElementById('sc-privacy').style.display = "none";
  document.getElementById('sc-privacy').style.zIndex = "0";
  document.getElementById('sc-license').style.display = "none";
  document.getElementById('sc-license').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-50%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openPrivacy(){
  document.getElementById('sc-particles').style.display = "none";
  document.getElementById('sc-particles').style.zIndex = "0";
  document.getElementById('sc-acrilic').style.display = "none";
  document.getElementById('sc-acrilic').style.zIndex = "0";
  document.getElementById('sc-terms').style.display = "none";
  document.getElementById('sc-terms').style.zIndex = "0";
  document.getElementById('sc-privacy').style.display = "block";
  document.getElementById('sc-privacy').style.zIndex = "3";
  document.getElementById('sc-license').style.display = "none";
  document.getElementById('sc-license').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-50%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openAcrilic(){
  document.getElementById('sc-particles').style.display = "none";
  document.getElementById('sc-particles').style.zIndex = "0";
  document.getElementById('sc-acrilic').style.display = "block";
  document.getElementById('sc-acrilic').style.zIndex = "3";
  document.getElementById('sc-terms').style.display = "none";
  document.getElementById('sc-terms').style.zIndex = "0";
  document.getElementById('sc-privacy').style.display = "none";
  document.getElementById('sc-privacy').style.zIndex = "0";
  document.getElementById('sc-license').style.display = "none";
  document.getElementById('sc-license').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-50%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function openParticles(){
  document.getElementById('sc-particles').style.display = "block";
  document.getElementById('sc-particles').style.zIndex = "3";
  document.getElementById('sc-acrilic').style.display = "none";
  document.getElementById('sc-acrilic').style.zIndex = "0";
  document.getElementById('sc-terms').style.display = "none";
  document.getElementById('sc-terms').style.zIndex = "0";
  document.getElementById('sc-privacy').style.display = "none";
  document.getElementById('sc-privacy').style.zIndex = "0";
  document.getElementById('sc-license').style.display = "none";
  document.getElementById('sc-license').style.zIndex = "0";
  document.getElementById('pa-mn').style.transform = "translateX(-50%)";
  document.getElementById('ic-back').style.transform = "scale(1)";
}

function changeMode(){
  var mode = document.getElementById('li-mode').value;
  var dark = "dark";
  if(mode == dark){
    document.getElementById('content').style.background = "rgba(0,0,0,0.4)";
    document.getElementById('signal').style.color = "white";
    document.getElementById('clock').style.color = "white";
    document.getElementById('tx-info').style.color = "white";
    document.getElementById('bar-search').style.color = "white";
    document.getElementById('ic-menu').style.color = "white";
    document.getElementById('app-0').style.color = "white";
    document.getElementById('app-1').style.color = "white";
    document.getElementById('app-2').style.color = "white";
    document.getElementById('app-3').style.color = "white";
    document.getElementById('app-4').style.color = "white";
    document.getElementById('app-5').style.color = "white";
    document.getElementById('ic-vend1').style.filter = "invert(0)";
    document.getElementById('ic-vend2').style.filter = "invert(0)";
    document.getElementById('ic-vend3').style.filter = "invert(0)";
    document.getElementById('ic-vend4').style.filter = "invert(0)";
    localStorage.spbmode = mode;
  }
  else{
    document.getElementById('content').style.background = "rgba(255,255,255,0.2)";
    document.getElementById('signal').style.color = "black";
    document.getElementById('clock').style.color = "black";
    document.getElementById('tx-info').style.color = "black";
    document.getElementById('bar-search').style.color = "black";
    document.getElementById('ic-menu').style.color = "black";
    document.getElementById('app-0').style.color = "black";
    document.getElementById('app-1').style.color = "black";
    document.getElementById('app-2').style.color = "black";
    document.getElementById('app-3').style.color = "black";
    document.getElementById('app-4').style.color = "black";
    document.getElementById('app-5').style.color = "black";
    document.getElementById('ic-vend1').style.filter = "invert(3)";
    document.getElementById('ic-vend2').style.filter = "invert(3)";
    document.getElementById('ic-vend3').style.filter = "invert(3)";
    document.getElementById('ic-vend4').style.filter = "invert(3)";
    localStorage.spbmode = mode;
  }
}

function changeZoom(){
  var zoom = document.getElementById('li-zoom').value;
  document.body.style.zoom = zoom;
  localStorage.spbzoom = zoom;
}

function changeColor(){
  var col1 = document.getElementById('col-1').value;
  var col2 = document.getElementById('col-2').value;
  document.getElementById('menu').style.background = "linear-gradient(" +col1 +", " +col2 +")";
  document.getElementById('mapps').style.background = "linear-gradient(" +col1 +", " +col2 +")";
  localStorage.spbcolor1 = col1;
  localStorage.spbcolor2 = col2;
}

function changeName(){
  var nameuser = document.getElementById('fr-name').value;
  document.getElementById('op-name').value = nameuser;
  document.getElementById('tx-info').innerHTML = "Buen día " +nameuser;
  localStorage.spbname = nameuser;
}

function changeName2(){
  var nameuser = document.getElementById('op-name').value;
  document.getElementById('fr-name').value = nameuser;
  localStorage.spbname = nameuser;
}

function changeEmail(){
  var email = document.getElementById('op-email').value;
  localStorage.spbemail = email;
}

function delHistory(){
  var boxa = confirm("¿Estás seguro(a) de que quieres borrar el historial?");
  switch (boxa){
    case true:
    localStorage.spbhistory = "";
    document.getElementById('tx-history').innerHTML = "El historial está vacío.";
    document.getElementById('history').innerHTML = "";
    document.getElementById('text-ht').innerHTML = "Se borró el historial.";
    document.getElementById('tx-info').style.transform = "translateY(300px)";
    setTimeout(viewTxh, 1000);
    break;
    default:
    break;
  }
}

function viewTxh(){
  document.getElementById('tx-info').innerHTML = "Se borró el historial";
  document.getElementById('tx-info').style.transform = "translateY(0px)";
}

function resetAll(){
  var nowcph = btoa("12345");
  var boxa = confirm("¿Estás seguro(a) de que quieres restablecer StartPage?, se borrarán todos tus datos.");
  switch (boxa){
    case true:
    localStorage.spbwelcome = "none";
    localStorage.spbpass = nowcph;
    localStorage.spbname = "Usuario";
    localStorage.spbemail = "";
    localStorage.spbzoom = "1";
    localStorage.spbhistory = "";
    localStorage.spbmode = "dark";
    localStorage.spbbg = "auto";
    localStorage.spbzoom = "1";
    localStorage.spbprov = "g";
    localStorage.spbwall = "";
    localStorage.spbacrilc1 = "125";
    localStorage.spbacrilc2 = "125";
    localStorage.spbacrilc3 = "125";
    localStorage.spbwsize = "auto";
    localStorage.spbprofile = "data/res/im-user.png";
    localStorage.spbpart = "0";
    window.location.reload();
    break;
    default:
    break;
  }
}

function changeProv(){
  var prov = document.getElementById('op-ve').value;
  switch(prov){
    case "g":
    document.getElementById("bar-search").dataset.vendor = "https://www.google.com/search?q=";
    document.getElementById("bar-search").dataset.ii = "g";
    document.getElementById('ic-vend1').style.opacity = "1";
    document.getElementById('ic-vend2').style.opacity = "0.5";
    document.getElementById('ic-vend3').style.opacity = "0.5";
    document.getElementById('ic-vend4').style.opacity = "0.5";
    document.getElementById('ic-vend1').style.transform = "scale(1)";
    document.getElementById('ic-vend2').style.transform = "scale(0.8)";
    document.getElementById('ic-vend3').style.transform = "scale(0.8)";
    document.getElementById('ic-vend4').style.transform = "scale(0.8)";
    document.getElementById('vsensor').value = "0px";
    document.getElementById('v-mapa').style.top = "0px";
    localStorage.spbprov = prov;
    break;
    case "b":
    document.getElementById("bar-search").dataset.vendor = "https://www.bing.com/search?q=";
    document.getElementById("bar-search").dataset.ii = "b";
    document.getElementById('ic-vend1').style.opacity = "0.5";
    document.getElementById('ic-vend2').style.opacity = "1";
    document.getElementById('ic-vend3').style.opacity = "0.5";
    document.getElementById('ic-vend4').style.opacity = "0.5";
    document.getElementById('ic-vend1').style.transform = "scale(0.8)";
    document.getElementById('ic-vend2').style.transform = "scale(1)";
    document.getElementById('ic-vend3').style.transform = "scale(0.8)";
    document.getElementById('ic-vend4').style.transform = "scale(0.8)";
    document.getElementById('vsensor').value = "-65px";
    document.getElementById('v-mapa').style.top = "-65px";
    localStorage.spbprov = prov;
    break;
    case "d":
    document.getElementById("bar-search").dataset.vendor = "https://duckduckgo.com/?q=";
    document.getElementById("bar-search").dataset.ii = "d";
    document.getElementById('ic-vend1').style.opacity = "0.5";
    document.getElementById('ic-vend2').style.opacity = "0.5";
    document.getElementById('ic-vend3').style.opacity = "1";
    document.getElementById('ic-vend4').style.opacity = "0.5";
    document.getElementById('ic-vend1').style.transform = "scale(0.8)";
    document.getElementById('ic-vend2').style.transform = "scale(0.8)";
    document.getElementById('ic-vend3').style.transform = "scale(1)";
    document.getElementById('ic-vend4').style.transform = "scale(0.8)";
    document.getElementById('vsensor').value = "-130px";
    document.getElementById('v-mapa').style.top = "-130px";
    localStorage.spbprov = prov;
    break;
    case "y":
    document.getElementById("bar-search").dataset.vendor = "https://www.youtube.com/results?q=";
    document.getElementById("bar-search").dataset.ii = "y";
    document.getElementById('ic-vend1').style.opacity = "0.5";
    document.getElementById('ic-vend2').style.opacity = "0.5";
    document.getElementById('ic-vend3').style.opacity = "0.5";
    document.getElementById('ic-vend4').style.opacity = "1";
    document.getElementById('ic-vend1').style.transform = "scale(0.8)";
    document.getElementById('ic-vend2').style.transform = "scale(0.8)";
    document.getElementById('ic-vend3').style.transform = "scale(0.8)";
    document.getElementById('ic-vend4').style.transform = "scale(1)";
    document.getElementById('vsensor').value = "-195px";
    document.getElementById('v-mapa').style.top = "-195px";
    localStorage.spbprov = prov;
    break;
  }
}

function openProve(){
  var mode = localStorage.spbmode;
  var dark = "dark";
  if(mode == dark){
    document.getElementById('v-mapa').style.top = "0px";
    document.getElementById('dv-vendor').style.height = "260px";
    document.getElementById('dv-vendor').style.background = "rgba(0,0,0,1)";
  }
  else{
    document.getElementById('v-mapa').style.top = "0px";
    document.getElementById('dv-vendor').style.height = "260px";
    document.getElementById('dv-vendor').style.background = "rgba(255,255,255,1)";
  }
}

function closeProve(){
  var vsensor = document.getElementById('vsensor').value;
  document.getElementById('v-mapa').style.top = vsensor;
  document.getElementById('dv-vendor').style.height = "65px";
  document.getElementById('dv-vendor').style.background = "rgba(0,0,0,0)";
}

function setGoogle(){
  document.getElementById('ic-vend1').style.opacity = "1";
  document.getElementById('ic-vend2').style.opacity = "0.5";
  document.getElementById('ic-vend3').style.opacity = "0.5";
  document.getElementById('ic-vend4').style.opacity = "0.5";
  document.getElementById('ic-vend1').style.transform = "scale(1)";
  document.getElementById('ic-vend2').style.transform = "scale(0.8)";
  document.getElementById('ic-vend3').style.transform = "scale(0.8)";
  document.getElementById('ic-vend4').style.transform = "scale(0.8)";
  document.getElementById('vsensor').value = "0px";
  document.getElementById('bar-search').focus();
  document.getElementById("bar-search").dataset.vendor = "https://www.google.com/search?q=";
  document.getElementById("bar-search").dataset.ii = "g";
}

function setBing(){
  document.getElementById('ic-vend1').style.opacity = "0.5";
  document.getElementById('ic-vend2').style.opacity = "1";
  document.getElementById('ic-vend3').style.opacity = "0.5";
  document.getElementById('ic-vend4').style.opacity = "0.5";
  document.getElementById('ic-vend1').style.transform = "scale(0.8)";
  document.getElementById('ic-vend2').style.transform = "scale(1)";
  document.getElementById('ic-vend3').style.transform = "scale(0.8)";
  document.getElementById('ic-vend4').style.transform = "scale(0.8)";
  document.getElementById('vsensor').value = "-65px";
  document.getElementById('bar-search').focus();
  document.getElementById("bar-search").dataset.vendor = "https://www.bing.com/search?q=";
  document.getElementById("bar-search").dataset.ii = "b";
}

function setDuck(){
  document.getElementById('ic-vend1').style.opacity = "0.5";
  document.getElementById('ic-vend2').style.opacity = "0.5";
  document.getElementById('ic-vend3').style.opacity = "1";
  document.getElementById('ic-vend4').style.opacity = "0.5";
  document.getElementById('ic-vend1').style.transform = "scale(0.8)";
  document.getElementById('ic-vend2').style.transform = "scale(0.8)";
  document.getElementById('ic-vend3').style.transform = "scale(1)";
  document.getElementById('ic-vend4').style.transform = "scale(0.8)";
  document.getElementById('vsensor').value = "-130px";
  document.getElementById('bar-search').focus();
  document.getElementById("bar-search").dataset.vendor = "https://duckduckgo.com/?q=";
  document.getElementById("bar-search").dataset.ii = "d";
}

function setYoutube(){
  document.getElementById('ic-vend1').style.opacity = "0.5";
  document.getElementById('ic-vend2').style.opacity = "0.5";
  document.getElementById('ic-vend3').style.opacity = "0.5";
  document.getElementById('ic-vend4').style.opacity = "1";
  document.getElementById('ic-vend1').style.transform = "scale(0.8)";
  document.getElementById('ic-vend2').style.transform = "scale(0.8)";
  document.getElementById('ic-vend3').style.transform = "scale(0.8)";
  document.getElementById('ic-vend4').style.transform = "scale(1)";
  document.getElementById('vsensor').value = "-195px";
  document.getElementById('bar-search').focus();
  document.getElementById("bar-search").dataset.vendor = "https://www.youtube.com/results?q=";
  document.getElementById("bar-search").dataset.ii = "y";
}

function chAcrilVis(){
  var red = document.getElementById('ra-co1').value;
  var green = document.getElementById('ra-co2').value;
  var blue = document.getElementById('ra-co3').value;
  document.getElementById('vis-col').style.background = "rgb(" +red +"," +green +"," +blue +")";
}

function applyAcril(){
  var red = document.getElementById('ra-co1').value;
  var green = document.getElementById('ra-co2').value;
  var blue = document.getElementById('ra-co3').value;
  document.getElementById('menu').style.background = "rgba(" +red +"," +green +"," +blue +",0.5)";
  document.getElementById('mapps').style.background = "rgba(" +red +"," +green +"," +blue +",0.5)";
  localStorage.spbcolor1 = "rgba(" +red +"," +green +"," +blue +",0.5)";
  localStorage.spbcolor2 = "rgba(" +red +"," +green +"," +blue +",0.5)";
  localStorage.spbacrilc1 = red;
  localStorage.spbacrilc2 = green;
  localStorage.spbacrilc3 = blue;
}

function changeSize(){
  var wsize = document.getElementById('li-sz').value;
  document.body.style.backgroundSize = wsize;
  localStorage.spbwsize = wsize;
}

function showApps(){
  document.getElementById('fade').style.display = "block";
  document.getElementById('mapps').style.transform = "scale(1)";
  document.getElementById('mapps').style.borderRadius = "20px";
  document.getElementById('mapps').style.boxShadow = "0 39px 30px rgba(0,0,0,0.8), 0 1px 40px rgba(0,0,0,0.9)";
}

function selProfile(){
  document.getElementById('inputProfile').click();
}

function selImagebg(){
  document.getElementById('inputFileToLoad').click();
}

function selCopy(){
  document.getElementById('inputssc').click();
}

function errorProfile(){
  document.getElementById('im-user').src = "data/res/im-user.png";
}

function openComp1(){
  window.open("data/res/pacman/Index.html", "Pacman" , "width=1100,height=550");
}

function openComp2(){
  window.open("data/res/snake/Index.html", "Snake" , "width=1100,height=550");
}

function openComp3(){
  window.open("data/res/trex/Index.html", "T-Rex" , "width=1100,height=550");
}

function openComp4(){
  window.open("data/res/edgesurf/index.html", "Edge SURF" , "width=1100,height=550");
}

function playAnim(){
  document.getElementById('vidanim').play();
}

function chParticles(){
  var part = document.getElementById('li-part').value;
  var on = "1";
  if(part == on){
    document.getElementById('particles-js').style.transform = "scale(1)";
    localStorage.spbpart = "1";
  }
  else{
    document.getElementById('particles-js').style.transform = "scale(0)";
    localStorage.spbpart = "0";
  }
}

function rndSug(){
  var name = localStorage.spbname;
  var Quotation=new Array()
  Quotation[0] = "Buen día " +name;
  Quotation[1] = "Hola " +name;
  Quotation[2] = "Buen día " +name;
  Quotation[3] = 'Consejo: Escribe "ayuda" en la barra de búsqueda y ve todo lo que puedes hacer con StartPage';
  Quotation[4] = "StartPage está optimizado para computadoras, celulares y tabletas";
  Quotation[5] = "Ahora puedes hacer una copia de seguridad de tu configuración de StartPage";
  Quotation[6] = name +", no olvides actualizar StartPage para recibir nuevas funciones";
  Quotation[7] = "Personaliza StartPage con tu imagen y color favorito";
  Quotation[8] = "¿Sabías que puedes personalizar StartPage con imágenes y colores?";
  Quotation[9] = "Consejo: Puedes ver tu historial de navegación desde el menú lateral";
  var Q = Quotation.length;
  var whichQuotation=Math.round(Math.random()*(Q-1));
  document.getElementById('tx-info').innerHTML = Quotation[whichQuotation];
}

function tecla(e){
    var evt = e ? e : event;
    var key = window.Event ? evt.which : evt.keyCode;
    if(key == 38){
      showMenu();
    }
    if(key == 40){
      document.getElementById('bar-search').value = "";
      hideMenu();
    }
}