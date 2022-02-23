import { Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Home from "../wiews/Home";
import Search from "../wiews/Search";
import Collection from "../wiews/Collection";
import Albums from './collection/Albums';
import Artists from './collection/Artists';
import Playlists from './collection/Playlists';
import Podcasts from './collection/Podcasts';

function Content() {
  return (
      <main className="flex-auto overflow-auto">
			
            <Navbar />
			
				<div className='px-8 py-5'>
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/search" element={<Search/>} />	

						<Route path="/collection" element={<Collection/>} />	
						
					</Routes>
					<Routes>
						
						<Route path="/Playlists" element={<Playlists/>} />
						
						<Route path="/Podcasts" element={<Podcasts/>} />
                    
						<Route path="/Artists" element={<Artists/>} />	
                    
						<Route path="/Albums" element={<Albums />} />
                </Routes>
				</div>

		</main>
	)
}

export default Content;
