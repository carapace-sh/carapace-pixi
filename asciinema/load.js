window.addEventListener("load", function () {
  // <img src="./carapace-bin.cast" alt="" />
  for (elem of Array.prototype.slice.call(document.getElementsByTagName("img")).reverse())
    if (elem.src.endsWith(".cast")) {
      const newItem = document.createElement("div");
      newItem.id = elem.src;
      elem.parentNode.replaceChild(newItem, elem);
      // AsciinemaPlayer.create(newItem.id, newItem, {cols: 108, rows: 24});

    var size = /([0-9]+)x([0-9]+)(@(.*))?$/.exec(elem.alt)
    AsciinemaPlayer.create(newItem.id, newItem, {cols: parseInt(size[1]), rows: parseInt(size[2]), poster: "npt:"+size[4]});
       
    }
})
