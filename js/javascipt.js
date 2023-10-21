let demokey = "LDdPDGovNaOrinYrohJJUyaQnpbkv0y7FRCPjUyu8KA";
const formEl1 = document.querySelector("form")
const Searchinput = document.getElementById("intext2")
const Searchdata = document.getElementById("Getdata")
const showMore = document.getElementById("showmore-buttom")

let InputData = ''
let page = 1;

let SearchImg = async () => {
    InputData = Searchinput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${InputData}&client_id=${demokey}`
    const response = await fetch(url)
    const data = await response.json()
    const results = data.results
    console.log(data)
    if (page === 1) {
        Searchdata.innerHTML = ""
    }
    results.map((result) => {
        const ImagePush = document.createElement("div")
        ImagePush.classList.add("search-results")
        const image = document.createElement("img")
        image.className="img-fluid ";
        image.style.width="100%"
        image.style.height="300px"
        image.style.objectFit="cover"
        ImagePush.className="col-12 col-md-3 col-sm-6 "
        image.src = result.urls.small
        image.alt = result.alt_description
        const para = document.createElement("a")
        para.href = result.links.html
        para.target = "_black"
        para.className="btn btn-primary my-2  col-12 rounded-0"
        para.textContent = result.alt_description
        ImagePush.appendChild(image)
        ImagePush.appendChild(para)
        Searchdata.appendChild(ImagePush)
    });

    page++
    if (page > 1) {
        showMore.style.display = "block"
    }
}

formEl1.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1
    SearchImg()
})
showMore.addEventListener("click", () => {
    SearchImg()
})