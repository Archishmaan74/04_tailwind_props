import Card from "./components/Card";
import "./App.css";

function App() {
  const myObjt = {
    name: "Nike Shoes",
    btnUrl: "https://www.nike.com/in/w/mens-shoes-nik1zy7ok",
  };
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold underline text-black  bg-red-200 p-4 rounded-xl">
          Hello world!
        </h1>
      </div>
      <Card name={myObjt.name} url={myObjt.btnUrl} />
    </>
  );
}

export default App;
