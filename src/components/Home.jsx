import StarBackground from "./Starbackground";
import ToggleTheme from "./ToggleTheme";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ToggleTheme/>
    <StarBackground/>
    </div>
  )
}

export default Home;