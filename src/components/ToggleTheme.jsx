import { Sun,Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [toggleTheme,setToggleTheme] = useState(false);
  useEffect(() =>{
    const StoredTheme = localStorage.getItem("theme");
    if(StoredTheme == "dark"){
      document.documentElement.classList.add("dark");
      setToggleTheme(true);
    }
  },[]);
  const toggleHandler =()=>{
    if(toggleTheme){
      document.documentElement.classList.remove("dark");
      localStorage.clear("theme");
      setToggleTheme(false)
    }else{
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark");
      setToggleTheme(true)
    }
    setToggleTheme(!toggleTheme);
  }
  return (
    <div>
      <div className="flex justify-end pr-10 pt-4" onClick={toggleHandler}>
          <div>{!toggleTheme?<Sun/>:<Moon/>}</div>
      </div>
    </div>
     
  )
}

export default ToggleTheme;