import Sectionn from "../components/Sectionn";
import Songs from "../data/Songs";


function Home() {

  

  return (
      <div className="grid gap-y-8">
          
          <Sectionn 
            title="Recently played"
            more="/" 
            items={Songs}
          />  
          
          <Sectionn 
            title="Popular artists"
            more="/" 
            items={Songs}
          />   

          <Sectionn 
            title="Trending now"
            more="/" 
            items={Songs}
          />        
          
      </div>
  )
}

export default Home;
