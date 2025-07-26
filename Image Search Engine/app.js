const clientID = "QjprDE42eWyPzBJEuJQG1Ym35hJGTdN12hEtSq1FUr4";
const searchBlock = document.querySelector(".search");
const images = document.querySelector(".images");
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");
const showMore = document.querySelector("#show-more");
let page = 1;

let searchImage = async () =>{
    let searchVal = searchBar.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchVal}&client_id=${clientID}&per_page=12`;
    
    let response = await fetch(url);
    let data = await response.json();
    let results = data.results;
    
    if (page===1)
    {
        images.innerHTML="";
    }
    
    results.map((result)=>{
        let image = document.createElement("img");
        image.src=result.urls.small;
        let link = document.createElement("a");
        link.href=result.links.html;
        link.target="_main";
        link.appendChild(image);
        images.appendChild(link);
    })
    showMore.style.display="block";
}

searchBtn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    searchImage();
    page = 1;
})

showMore.addEventListener("click",()=>{
    page++;
    searchImage();
})