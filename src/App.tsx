import { Suspense } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import type { TechData } from "./types/techData";
import { AllTech } from "./technologies/AllTech";
// import Technologies from "./components/Technogies";

let getData = async (): Promise<TechData[]> => {
  let response = await fetch("/data/data.json");
  let data = await response.json();
  // console.log(data);
  return data;
};

function App() {
  let promiseData = getData();

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <AllTech techData={promiseData} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
