import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Work"
import StyleGuide from "./pages/StyleGuide";

import PageWrap from "./global/PageWrap";
import { Routes, Route } from "react-router"

function App() {

  return (
    <>  
      <Routes>
        <Route path="/" element={ <PageWrap /> }>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="work" element={<Work />}></Route>
          <Route path="style-guide" element={<StyleGuide />}></Route>
        </Route>
      </Routes>
    </>
  )

}

export default App
