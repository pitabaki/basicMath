function average(){"use strict";for(var e=document.getElementById("num_array").value,o=[],n=[],t=0;t<e.length;t++)","!==e[t]&&" "!==e[t]?o.push(e[t]):" "===e[t]?o.push():o.push(",");console.log(o);for(var l="",r=0;r<o.length;r++)l+=o[r];console.log("something: "+l);for(var s=0;s<l.length;s++)","!==l[s]?n.push(l[s]):","===l[s]&&(n=Number(n));return console.log("this is "+n),console.log(l/=n.length),!1}function init(){"use strict";var e=document.getElementById("calcForm");e.onsubmit=average}window.onload=init;