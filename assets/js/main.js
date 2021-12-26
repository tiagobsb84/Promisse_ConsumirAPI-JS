const BASE_URL = "https://thatcopy.pw/catapi/rest/";

const getImg = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    } catch(e){
        console.log(e.message);
    }
};

const loadImg = async () => {
    const imagem = document.getElementsByTagName("img")[0];
    imagem.src = await getImg();
};

const btnImagem = document.querySelector(".menu_botao");
addEventListener("click", loadImg);

loadImg();

