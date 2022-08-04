

const numberOfCategofies = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategofies.length);

numberOfCategofies.forEach(function itemAtribut(item) {
    const title = item.querySelector("h2").textContent;
    const countItems = item.querySelectorAll("li").length;
    /*const category = {
        Category: title,
        Elements: countItems,
    };
    console.log(category);*/
    console.log("Category: ", title);
    console.log("Elements:", countItems);
});



