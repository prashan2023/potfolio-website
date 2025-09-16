import { useEffect,useState } from "react";

// id, size, x, y, opacity, animationDuration

const Starbackground = () => {
  const [stars,setStars] = useState([]);
  const [meteors,setMeteors] = useState([]);
  
  useEffect(() =>{
     generateStars();
     generateMeteors();
  },[]);

  const generateStars =()=>{
    const numberofStars = Math.floor(
      (window.innerWidth*window.innerHeight)/10000
    );

    const newStars = [];

    for(let i=0; i< numberofStars; i++){
      newStars.push({
        id: i,
        size: Math.random()*3 + 1,
        x: Math.random()*100,
        y:  Math.random()*100,
        opacity: Math.random()*0.5 + 0.5,
        animationDuration: Math.random()*4 + 2
      })
    };
  setStars(newStars); 
  }

  const generateMeteors =()=>{
    const newMeteors = [];
    const numberofMeteors = 5;

    for(let i=0;i<numberofMeteors; i++){
      newMeteors.push({
        id: i,
        size: Math.random()*2 + 4,
        x: Math.random()*70 ,
        y: Math.random()*20,
        opacity: Math.random()*0.5 + 0.5,
        animationDuration: Math.random()*13 + 1,
        delay: Math.random()
      })
    }
    setMeteors(newMeteors);
  }


    
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        {stars.map((star) =>(
          <div
           key={star.id}
           className="star animate-pulse-subtle"
           style={{
            width: star.size+ "px",
            height: star.size+ "px",
            left :star.x + "%",
            top : star.y + "%",
            opacity : star.opacity,
            animationDuration :star.animationDuration + "s"
           }}
          />
        ))}
        {
          meteors.map((meteor) =>(
            <div
             key={meteor.id}
             className="meteor animate-meteor" 
             style={{
              width: meteor.size*20 + "px",
              height: meteor.size + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              opacity: meteor.opacity,
              delay: meteor.delay,
              animationDuration: meteor.animationDuration + "s"
             }} />
          ))
        }
    </div>
  )
}

export default Starbackground;

 