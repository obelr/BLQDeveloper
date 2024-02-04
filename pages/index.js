import Discount from "../app/Components/Discount";
import Navbar from "../app/Components/navbar";
import Shortcuts from "../app/Components/shortcuts";
import ImageSlider from "../app/Components/slider";

export default function Home() {
  return (
    <section className=" container">
       <Navbar />
      <ImageSlider />
      <Shortcuts/>
      <Discount/>
       </section>
  );
}
