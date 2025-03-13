import AOS from "aos";
import { Page } from "./components/ui";
import {
  About,
  Advantages,
  Feedback,
  Footer,
  Header,
  Hero,
  Partners,
  Services,
  Works,
} from "./components/shared";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 550,
      easing: "ease-in-out",
      offset: 0,
      delay: 50,
    });
  }, []);

  return (
    <Page>
      <Header />
      <Hero />
      <div className="flex flex-col rounded-[28px] lg:rounded-[58px] pt-[22px] pb-[38px] lg:pt-[52px] lg:pb-[72px] mb-[20px] text-black bg-white animate-show">
        <About />
        <Services />
        <Advantages />
        <Works />
        <Partners />
      </div>
      <div className="pt-[56px] rounded-t-[28px] lg:rounded-t-[58px] bg-gradient-to-t to-[rgba(255,255,255,0.07)] from-transparent animate-show">
        <Feedback />
        <Footer />
      </div>
    </Page>
  );
}

export default App;
