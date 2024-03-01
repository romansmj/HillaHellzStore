const clothesItems = ['tshirts', 'hoodies', 'accessoires', 'sale'];

function handleMouseClick(item, event) {
    if (event.button === 0) {
        window.open(`clothes/${item}.html`, "_self");
    } else if (event.button === 1) {
        event.preventDefault();
        window.open(`clothes/${item}.html`, "_blank");
    }
}

for (let item of clothesItems) {
        let element = document.getElementById(item);
        element.addEventListener('mousedown', handleMouseClick.bind(null, item));
}