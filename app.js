 weather={
    sunny:{
     pic:"https://metro.co.uk/wp-content/uploads/2015/04/giphy3.gif",
     desc: "Hot weather",
     temp:"90 deg"
     } ,
    cloudy:{
       pic: "https://www.adventurebikerider.com/wp-content/uploads/2017/10/tumblr_o27c7fByaO1tchrkco1_500.gif",
       desc:"Cloudy",
       temp:"55 deg"
       },
    rainy:{
        pic: "https://i.pinimg.com/originals/a2/be/02/a2be02c55ef285e6c86a7637f5627ca7.gif",
        desc:"It's raining",
        temp:"50 deg"
        },
    snowy: {
        pic: "https://media.tenor.com/bbpU9z0BxNcAAAAC/snow-winter.gif",
        desc:"It's snowing",
        temp:"10 deg"
       }

    }
const sunnyWeather= () =>{
    const picContainer=document.querySelector(".imgContainer")
    let newImg = document.querySelector(".weatherPic");
    newImg.setAttribute('src',weather.sunny.pic);
    document.querySelector('.tempContainer').innerHTML=weather.sunny.temp
    document.querySelector('.para').innerHTML=weather.sunny.desc
}
   const cloudyWeather= () =>{
    const picContainer=document.querySelector(".imgContainer")
    let newImg = document.querySelector(".weatherPic");
    newImg.setAttribute('src',weather.cloudy.pic);
    document.querySelector('.tempContainer').innerHTML=weather.cloudy.temp
    document.querySelector('.para').innerHTML=weather.cloudy.desc
   }
   const rainyWeather= () =>{
    const picContainer=document.querySelector(".imgContainer")
    let newImg = document.querySelector(".weatherPic");
    newImg.setAttribute('src',weather.rainy.pic);
    document.querySelector('.tempContainer').innerHTML=weather.rainy.temp
    document.querySelector('.para').innerHTML=weather.rain.desc
  }
   const snowyWeather= () =>{
    const picContainer=document.querySelector(".imgContainer")
    let newImg = document.querySelector(".weatherPic");
    newImg.setAttribute('src',weather.snowy.pic);
    document.querySelector('.tempContainer').innerHTML=weather.snowy.temp
    document.querySelector('.para').innerHTML=weather.snowy.desc

   }