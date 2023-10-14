const toggleClass = ($li, $img) => {
    let isFocussed = $li.classList.contains("focus");
    let rects = $img.getBoundingClientRect();
    if (isFocussed) {
        $li.classList.remove("focus");
        $li.style.zIndex = "";
        $li.style.width = "";
        $li.style.height = "";
    } else {
        // prevent <li> from collapsing as <img> comes out of flow
        $li.classList.add("focus");
        $li.style.zIndex = "9";
        $li.style.width = rects.width + "px";
        $li.style.height = rects.height + "px";
    }
}
const toggleImageAnimation = (ev) => {

    let $li = ev.target.firstChild ? ev.target : ev.target.parentElement;
    let $img = $li.firstChild;
    $img.style.viewTransitionName = "img" + Date.now();
    if (!document.startViewTransition) {
        toggleClass($li, $img);
        return;
    }

    document.startViewTransition(() => {
        toggleClass($li, $img);
    }).finished.then(() => {
        $img.style.viewTransitionName = "";
    });

}

document.querySelectorAll(".thread__carousel > li").forEach(($el) => {
    $el.addEventListener("click", toggleImageAnimation);
})