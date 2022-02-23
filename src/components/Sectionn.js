import SongItem from "./SongItem";
import Title from "./Title";


function Sectionn({ title, more=false, items }) {

  return (
      <section className="">
          <Title title={title} more={more} />
          <div className="grid grid-cols-5 gap-x-6 mt-4">
                {items.map(item => <SongItem item={item} key={item.id} />)}
          </div>

      </section>
  )
}

export default Sectionn;
