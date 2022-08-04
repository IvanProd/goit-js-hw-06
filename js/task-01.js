"user strict"

const numberOfCategofies = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategofies.length);

numberOfCategofies.forEach(function itemAtribut(item) {
    const title = item.firstElementChild.textContent;
    const countItems = item.children.length;
    /*const category = {
        Category: title,
        Elements: countItems,
    };
    console.log(category);*/
    console.log("Category: ", title);
    console.log("Elements:", countItems);
});



