import React from "react";
import DashBoard from "./Component/DashBoard";
import Header from "./Component/Header";
import Overview from "./Component/Overview";



function App() {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.className = "dark";
  //     console.log("Dark Thème");
  //   } else {
  //     document.body.className = "light";
  //   }
  // }, [isDarkMode]);

  return (
    <>
      <Header />
      <DashBoard />
      <Overview />
    </>
  );
}

export default App;
