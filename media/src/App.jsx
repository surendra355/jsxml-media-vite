
import './App.css'

import lbposter from "./assets/images/lbposter.jpg"
import luckyBhaskar1 from "./assets/audios/luckyBhaskar1.mp3"
import luckyBhaskar2 from "./assets/audios/luckyBhaskar2.mp3"
import luckyBhaskar3 from "./assets/audios/luckyBhaskar3.mp3"
import luckyBhaskar4 from "./assets/videos/luckyBhaskar.mp4"


function App() {
  
 
  return (
    <div>

      <div>
      <h1>Gang Leader</h1>
      <img className='glPoster' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZAOx4VzPSRIRNQwwmjICQBivU1We34qgqw&s'></img>
      <div className='glAudio'>
        <audio className='glAudio' src='https://services.brninfotech.com/tws/media2/songs/Gang Leader/02 - Hoyna Hoyna.mp3' controls></audio>
        <audio className='glAudio' src='https://services.brninfotech.com/tws/media2/songs/Gang Leader/01 - Ra Ra (Roar of the Revengers).mp3' controls></audio>
        <audio className='glAudio' src='https://services.brninfotech.com/tws/media2/songs/Gang Leader/04 - Gangu Leader.mp3' controls></audio>
      </div>
     <video className='glTrailer' src='https://services.brninfotech.com/tws/media2/trailers/gangLeader.mp4' controls autoPlay muted></video>
     </div>
 
     <div>
  <h1>Pushpa 2: The Rule</h1>
  <img className='p2Poster' src='../images/pushpa2.jpg'></img>
  <div className='p2Audio'>
  <audio className='p2Audio' src='../audios/pushpa1.mp3' controls></audio>
  <audio className='p2Audio' src='../audios/pushpa2.mp3' controls></audio>
  <audio className='p2Audio' src='../audios/pushpa3.mp3' controls></audio>
  </div>
  <video className='p2Trailer' src='../videos/pushpa.2.mp4' controls autoPlay muted></video>
</div>

<div>
  <h1>Lucky Baskhar</h1>
  <img className='lbImage' src={lbposter}></img>          
  <div className='lbAudio'>
  <audio className='lbAudio' src={luckyBhaskar1} controls></audio>
  <audio className='lbAudio' src={luckyBhaskar2} controls></audio>
  <audio className='lbAudio' src={luckyBhaskar3} controls></audio>
  </div>
<video className='lbTrailer' src={luckyBhaskar4} controls autoPlay muted></video>



  </div>
 

</div>

  
  )
}

export default App
