const template = document.querySelector("#template1").content;
const main = document.querySelector("main");
fetch("data.json").then(res => res.json()).then(data => show(data));


function show(data) {
    data.forEach(function (data) {
        const clone = template.cloneNode(true);
        clone.querySelector(".accordion").textContent = data.generic_title;
        clone.querySelector("h1").textContent = data.generic_subtitle;
        if (data.generic_description) {
            clone.querySelector(".p1").classList.remove("hide");
            clone.querySelector(".p1").textContent = data.generic_description;
        }
        if (data.generic_description1) {
            clone.querySelector(".p2").classList.remove("hide");
            clone.querySelector(".p2").textContent = data.generic_description1;
        }
        if (data.generic_description2) {
            clone.querySelector(".p3").classList.remove("hide");
            clone.querySelector(".p3").textContent = data.generic_description2;
        }
        if (data.sub_panel_title) {
            if (data.generic_subtitle) {
                clone.querySelector(".subtitulo").classList.remove("hide");
            }
            if (data.sub_panel_2_title) {
                clone.querySelector(".sub_acc1").classList.remove("margen_abajo");
            }
            clone.querySelector(".sub_acc1").classList.remove("hide");
            clone.querySelector(".sub_acc1").textContent = data.sub_panel_title;
            clone.querySelector(".d1").textContent = data.list_element1;
            clone.querySelector(".d2").textContent = data.list_element2;
            clone.querySelector(".d3").textContent = data.list_element3;
        }
        if (data.sub_sub_acc1) {
            if (data.sub_sub_acc2) {
                clone.querySelector(".sub_sub_acc1").classList.remove("margen_abajo");
            }
            clone.querySelector(".sub_sub_acc1").classList.remove("hide");
            clone.querySelector(".sub_sub_acc1").textContent = data.sub_sub_acc1;
            clone.querySelector(".n1").textContent = data.sub_list_element1_1;
            clone.querySelector(".n2").textContent = data.sub_list_element1_2;
            clone.querySelector(".n3").textContent = data.sub_list_element1_3;
        }
        if (data.sub_sub_acc2) {
            if (data.sub_sub_acc3) {
                clone.querySelector(".sub_sub_acc2").classList.remove("margen_abajo");
            }
            clone.querySelector(".sub_sub_acc2").classList.remove("hide");
            clone.querySelector(".sub_sub_acc2").textContent = data.sub_sub_acc2;
            clone.querySelector(".m1").textContent = data.sub_list_element2_1;
            clone.querySelector(".m2").textContent = data.sub_list_element2_2;
            clone.querySelector(".m3").textContent = data.sub_list_element2_3;
        }
        if (data.sub_sub_acc3) {
            clone.querySelector(".sub_sub_acc3").classList.remove("hide");
            clone.querySelector(".sub_sub_acc3").textContent = data.sub_sub_acc3;
            clone.querySelector(".k1").textContent = data.sub_list_element3_1;
            clone.querySelector(".k2").textContent = data.sub_list_element3_2;
            clone.querySelector(".k3").textContent = data.sub_list_element3_3;
        }
        if (data.sub_panel_2_title) {
            if (data.sub_panel_3_title) {
                clone.querySelector(".sub_acc2").classList.remove("margen_abajo");
            }
            clone.querySelector(".sub_acc2").classList.remove("hide");
            clone.querySelector(".sub_acc2").textContent = data.sub_panel_2_title;
            clone.querySelector(".e1").textContent = data.list_element_2_1;
            clone.querySelector(".e2").textContent = data.list_element_2_2;
            clone.querySelector(".e3").textContent = data.list_element_2_3;
        }
         if (data.sub_sub_acc4) {
            if (data.sub_sub_acc5) {
                clone.querySelector(".sub_sub_acc4").classList.remove("margen_abajo");
            }
            clone.querySelector(".sub_sub_acc4").classList.remove("hide");
            clone.querySelector(".sub_sub_acc4").textContent = data.sub_sub_acc4;
            clone.querySelector(".qw1").textContent = data.sub_list_element_qw_1;
            clone.querySelector(".qw2").textContent = data.sub_list_element_qw_2;
            clone.querySelector(".qw3").textContent = data.sub_list_element_qw_3;
        }
        if (data.sub_sub_acc5) {
            if (data.sub_sub_acc6) {
                clone.querySelector(".sub_sub_acc5").classList.remove("margen_abajo");
            }
            clone.querySelector(".sub_sub_acc5").classList.remove("hide");
            clone.querySelector(".sub_sub_acc5").textContent = data.sub_sub_acc5;
            clone.querySelector(".as1").textContent = data.sub_list_element_as_1;
            clone.querySelector(".as2").textContent = data.sub_list_element_as_2;
            clone.querySelector(".as3").textContent = data.sub_list_element_as_3;
        }
        if (data.sub_sub_acc6) {
            clone.querySelector(".sub_sub_acc6").classList.remove("hide");
            clone.querySelector(".sub_sub_acc6").textContent = data.sub_sub_acc6;
            clone.querySelector(".zx1").textContent = data.sub_list_element_zx_1;
            clone.querySelector(".zx2").textContent = data.sub_list_element_zx_2;
            clone.querySelector(".zx3").textContent = data.sub_list_element_zx_3;
        }
        if (data.sub_panel_3_title) {
            if (data.sub_panel_4_title) {
                clone.querySelector(".sub_acc3").classList.remove("margen_abajo");
            }
            clone.querySelector(".sub_acc3").classList.remove("hide");
            clone.querySelector(".sub_acc3").textContent = data.sub_panel_3_title;
            clone.querySelector(".f1").textContent = data.list_element_3_1;
            clone.querySelector(".f2").textContent = data.list_element_3_2;
            clone.querySelector(".f3").textContent = data.list_element_3_3;
            clone.querySelector(".f4").textContent = data.list_element_3_4;
        }
        if (data.sub_sub_acc7) {
            if (data.sub_sub_acc8) {
                clone.querySelector(".sub_sub_acc7").classList.remove("margen_abajo");
            }
            clone.querySelector(".sub_sub_acc7").classList.remove("hide");
            clone.querySelector(".sub_sub_acc7").textContent = data.sub_sub_acc7;
            clone.querySelector(".er1").textContent = data.sub_list_element_er_1;
            clone.querySelector(".er2").textContent = data.sub_list_element_er_2;
            clone.querySelector(".er3").textContent = data.sub_list_element_er_3;
        }
        if (data.sub_sub_acc8) {
            if (data.sub_sub_acc9) {
                clone.querySelector(".sub_sub_acc8").classList.remove("margen_abajo");
            }
            clone.querySelector(".sub_sub_acc8").classList.remove("hide");
            clone.querySelector(".sub_sub_acc8").textContent = data.sub_sub_acc8;
            clone.querySelector(".df1").textContent = data.sub_list_element_df_1;
            clone.querySelector(".df2").textContent = data.sub_list_element_df_2;
            clone.querySelector(".df3").textContent = data.sub_list_element_df_3;
        }
        if (data.sub_sub_acc9) {
            clone.querySelector(".sub_sub_acc9").classList.remove("hide");
            clone.querySelector(".sub_sub_acc9").textContent = data.sub_sub_acc9;
            clone.querySelector(".cv1").textContent = data.sub_list_element_cv_1;
            clone.querySelector(".cv2").textContent = data.sub_list_element_cv_2;
            clone.querySelector(".cv3").textContent = data.sub_list_element_cv_3;
        }    
        if (data.sub_panel_4_title) {
            clone.querySelector(".sub_acc4").classList.remove("hide");
            clone.querySelector(".sub_acc4").textContent = data.sub_panel_4_title;
            clone.querySelector(".g1").textContent = data.list_element_4_1;
            clone.querySelector(".g2").textContent = data.list_element_4_2;
            clone.querySelector(".g3").textContent = data.list_element_4_2;
        }
        main.appendChild(clone);
    })
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = (10 * panel.scrollHeight) + "px";
            }
        })
    }
}
