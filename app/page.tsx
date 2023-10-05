// 1. Import Area
// import Image from 'next/image'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Main from "@/app/components/Main";

// 2. Function Defination
function Home() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

// 3. Export Area
export default Home;
