function manageCheckbox() {
    const chk_id = document.getElementById("chk_id");
    const chk_userid = document.getElementById("chk_userid");
    const chk_title = document.getElementById("chk_title");
    const chk_completed = document.getElementById("chk_completed");
    const chk_action = document.getElementById("chk_action");
  
    chk_id.onchange = function (e) {
        const checked = e.target.checked;
        const th = document.querySelectorAll("thead tr th")[0]
        if (checked)
            th.style.display = "table-cell"
        else
            th.style.display = "none"
        const container = document.querySelectorAll("tbody tr")
        for (let i = 0; i <container.length ; i++) {
            const tr = container[i];
            if (checked)
                tr.children[0].style.display = "table-cell"
            else
                tr.children[0].style.display = "none"
        }
    }
    chk_userid.onchange = function (e) {
      const checked = e.target.checked;
      const th = document.querySelectorAll("thead tr th")[1]
      if (checked)
          th.style.display = "table-cell"
      else
          th.style.display = "none"
      const container = document.querySelectorAll("tbody tr")
      for (let i = 0; i <container.length ; i++) {
          const tr = container[i];
          if (checked)
              tr.children[1].style.display = "table-cell"
          else
              tr.children[1].style.display = "none"
      }
    }
    chk_title.onchange = function (e) {
      const checked = e.target.checked;
      const th = document.querySelectorAll("thead tr th")[2]
      if (checked)
          th.style.display = "table-cell"
      else
          th.style.display = "none"
      const container = document.querySelectorAll("tbody tr")
      for (let i = 0; i <container.length ; i++) {
          const tr = container[i];
          if (checked)
              tr.children[2].style.display = "table-cell"
          else
              tr.children[2].style.display = "none"
      }
    }
    chk_completed.onchange = function (e) {
      const checked = e.target.checked;
      const th = document.querySelectorAll("thead tr th")[3]
      if (checked)
          th.style.display = "table-cell"
      else
          th.style.display = "none"
      const container = document.querySelectorAll("tbody tr")
      for (let i = 0; i <container.length ; i++) {
          const tr = container[i];
          if (checked)
              tr.children[3].style.display = "table-cell"
          else
              tr.children[3].style.display = "none"
      }
    }
    chk_action.onchange = function (e) {
      const checked = e.target.checked;
      const th = document.querySelectorAll("thead tr th")[4]
      if (checked)
          th.style.display = "table-cell"
      else
          th.style.display = "none"
      const container = document.querySelectorAll("tbody tr")
      for (let i = 0; i <container.length ; i++) {
          const tr = container[i];
          if (checked)
              tr.children[4].style.display = "table-cell"
          else
              tr.children[4].style.display = "none"
      }
    }
}
window.onload = function () {
    manageCheckbox()
}