import Navigation from "./navbar/Navigation";
import Auth from "./navbar/Auth";
import { useMatch } from "react-router-dom";
import Search from "./navbar/Search";
import CollectionNavbar from "./navbar/CollectionNavbar";


function Navbar() {

  const searchRoute = useMatch('/search')

  const CollectionRoute = useMatch('/Collection')

  const AlbumsRoute = useMatch('/Albums')
  const ArtistsRoute = useMatch('/Artists')
  const PlaylistsRoute = useMatch('/Playlists')
  const PodcastsRoute = useMatch('/Podcasts')

  // const collectionRoute = useMatch('/collection')

  return (
      <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
          <Navigation />

          {searchRoute && <Search />}

          {CollectionRoute && <CollectionNavbar />}
          
          {AlbumsRoute && <CollectionNavbar />}
          {ArtistsRoute && <CollectionNavbar />}
          {PlaylistsRoute && <CollectionNavbar />}
          {PodcastsRoute && <CollectionNavbar />}
                   


          <Auth />
      </nav>
  )
}

export default Navbar;



