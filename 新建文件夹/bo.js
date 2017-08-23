/**
 * Created by sunchenshidabendan on 2017/8/23.
 */
var ospan=document.getElementById("tab_hd").getElementsByTagName("span");
var odiv=document.getElementById("tab_bd").getElementsByTagName("div");
for (var i=0;i<ospan.length;i++){
    (function (i) {
        ospan[i].onmousemove=function () {
            for(var j=0;j<odiv.length;j++){
                odiv[j].className=""
            }
            odiv[i].className="current";
            for(j=0;j<ospan.length;j++){
                ospan[j].className="";
            }
            ospan[ospan.length-1].className="last";
            this.className+=" current";
        }
    })(i)
}