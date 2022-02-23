

function Playlists() {
  return (
      <nav className="mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-10">
          <ul>
              { new Array(30).fill(
                  <li>
                  <a href="/Listem" className="text-s text-link hover:text-white flex h-8 items-center">
                     22. Çalma Listem
                  </a>
              </li>
              )}
          </ul>
      </nav>
  )
}

export default Playlists;
