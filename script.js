/*console.log("Welcome to Shuffle!");

// Initialize the Variables
let songIndex= 0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Anaconda-Nikki Minaj", filePath: "1.mp3", coverPath: "1.png"},
    {songName: "Blank Space- Taylor Swift", filePath: "2.mp3", coverPath: "2.png"},
    {songName: "Chun Li-  Nikki Minaj", filePath: "3.mp3", coverPath: "3.png"},
    {songName: "Delicate", filePath: "4.mp3", coverPath: "4.png"},
    {songName: "Good Form", filePath: "5.mp3", coverPath: "5.png"},
    {songName: "Gorgeous", filePath: "6.mp3", coverPath: "6.png"},
    {songName: "Night is Still Young", filePath: "7.mp3", coverPath: "7.png"},
    {songName: "Pills & Potions", filePath: "8.mp3", coverPath: "8.png"},
    {songName: "Super Bass", filePath: "9.mp3", coverPath: "9.png"},
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})
    //audioElement.play();

    // Handle play/pause click
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;

        }
    })
    // Listen to Events
    audioElement.addEventListener('timeupdate', ()=>{
        //Update seekbar
        progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value= progress;
    })

    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime= myProgressBar.value * audioElement.duration/100 ;
    })

    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.target.classList.remove('fa-pause-circle');
            element.target.classList.add('fa-play-circle');
        })
    }

        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            songIndex= parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');

            audioElement.src= `${songIndex+1}.mp3`;
            masterSongName.innerText= songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
    })

    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=9){
            songIndex=0;
        }
        else{
            songIndex+= 1;
        }
        audioElement.src= `${songIndex+1}.mp3`;  
        masterSongName.innerText= songs[songIndex].songName;     
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
    document.getElementsById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex=0;
        }
        else{
            songIndex-= 1;
        }
        audioElement.src= `${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    */

console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Anaconda-Nikki Minaj", filePath: "1.mp3", coverPath: "1.png"},
    {songName: "Blank Space- Taylor Swift", filePath: "2.mp3", coverPath: "2.png"},
    {songName: "Chun Li-  Nikki Minaj", filePath: "3.mp3", coverPath: "3.png"},
    {songName: "Delicate", filePath: "4.mp3", coverPath: "4.png"},
    {songName: "Good Form", filePath: "5.mp3", coverPath: "5.png"},
    {songName: "Gorgeous", filePath: "6.mp3", coverPath: "6.png"},
    {songName: "Night is Still Young", filePath: "7.mp3", coverPath: "7.png"},
    {songName: "Pills & Potions", filePath: "8.mp3", coverPath: "8.png"},
    {songName: "Super Bass", filePath: "9.mp3", coverPath: "9.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})