import { NavLink } from "react-router-dom"


function Title ({ title, more = false }) {
    return (
        <header className="flex items-center justify-between mb-4">
            
        <h3 className="font-semibold text-2xl text-white tracking-tight hover:underline">
            {title}
        </h3>
        
        {more && (
            <NavLink className={"font-bold hover:underline tracking-widest text-xs uppercase text-link"} to={more} >
                SEE ALL
            </NavLink>
        )}
      </header>
    )
}

export default Title