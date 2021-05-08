
import { useEffect, useState } from 'react';
import Player from './components/Player';


function App() {


  const [songs] = useState([

         {
           title:"Titaliyaan",
           artist: "Hardy Sandhu",
           img_src: "./image/Titliaan.jpg",
           src: "./song/Titliaan.mp3"
         },
         {
          title:"Care Ni Karda",
          artist: "Yo Yo Honey Singh",
          img_src: "./image/Care Ni Karda.jpg",
          src: "./song/Care Ni Karda.mp3"
        },
        {
          title:"Jamaica",
          artist: "Emiway Bantai",
          img_src: "./image/Jamaica.jpg",
          src: "./song/Jamaica.mp3"
        },
        {
         title:"Madhanya",
         artist: "Rahul Vaidya",
         img_src: "./image/Madhanya.jpg",
         src: "./song/Madhanya.mp3"
       },
       {
        title:"Seeti Maar",
        artist: "Salman Khan",
        img_src: "./image/seeti maar.jpg",
        src: "./song/Seeti Maar.mp3"
      }


  ]);

  const[currentSongIndex, setCurrentSongIndex]= useState(0);
  const[nextSongIndex,setNextSongIndex]=useState(0);

  useEffect( () => {
    setNextSongIndex(()=>{

      if(currentSongIndex + 1 > songs.length - 1){
        return 0
      }
      else{
        return currentSongIndex + 1
      }
    })
  },[currentSongIndex,songs.length])



  return (
    <div className="App">

    <Player


    currentSongIndex = {currentSongIndex}
    setCurrentSongIndex = {setCurrentSongIndex}
    nextSongIndex = {nextSongIndex}
    songs = {songs}

    />
    
    </div>
  );
}

export default App;
