function writeData(){
  var a = "az='StartPage Security Copy v4.0'; ";
  var b = "bz='spb-4x'; ";
  var c = "cz='" +localStorage.spbwelcome +"'; ";
  var d = "dz='" +localStorage.spbname +"'; ";
  var e = "ez='" +localStorage.spbmode +"'; ";
  var f = "fz='" +localStorage.spbbg +"'; ";
  var g = "gz='" +localStorage.spbzoom +"'; ";
  var h = "hz='" +localStorage.spbemail +"'; ";
  var i = "iz='" +localStorage.spbwsize +"'; ";
  var j = "jz='" +localStorage.spbacrilc1 +"'; ";
  var k = "kz='" +localStorage.spbacrilc2 +"'; ";
  var l = "lz='" +localStorage.spbacrilc3 +"'; ";
  var m = "mz='" +localStorage.spbprofile +"'; ";
  var n = "nz='" +localStorage.spbpart +"'; ";
  var o = "oz='" +localStorage.spbwall +"'; ";
  var p = "pz='" +localStorage.spbcolor1 +"'; ";
  var q = "qz='" +localStorage.spbcolor2 +"'; ";
  var r = "rz='" +localStorage.spbprov +"'; ";
  var s = "sz='" +localStorage.spbhistory +"'; ";
  var t = "tz='" +localStorage.spbcoli +"'; ";

  var utc = new Date().toJSON().slice(0,10);
  var fec = new Date();
  var cad = fec.getHours()+"-"+fec.getMinutes();

  var textToWrite = (a +b +c +d +e +f +g +h +i +j +k +l +m +n +o +p +q +r +s +t);
  var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
  var fileNameToSaveAs = "copia_de_seguridad_" +utc +"_" +cad +".ssc";
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "My Hidden Link";
  window.URL = window.URL || window.webkitURL;
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  alert("¡Se creó una copia de segudidad!");
}

function destroyClickedElement(event){
  document.body.removeChild(event.target);
}

function importcs(){
  localStorage.spbwelcome = cz;
  localStorage.spbname = dz;
  localStorage.spbmode = ez;
  localStorage.spbbg = fz;
  localStorage.spbzoom = gz;
  localStorage.spbemail = hz;
  localStorage.spbwsize = iz;
  localStorage.spbacrilc1 = jz;
  localStorage.spbacrilc2 = kz;
  localStorage.spbacrilc3 = lz;
  localStorage.spbprofile = mz;
  localStorage.spbpart = nz;
  localStorage.spbwall = oz;
  localStorage.spbcolor1 = pz;
  localStorage.spbcolor2 = qz;
  localStorage.spbprov = rz;
  localStorage.spbhistory = sz;
  localStorage.spbcoli = tz;
}