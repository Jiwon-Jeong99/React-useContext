import "./App.css";
import { NameContext } from "./NameContext";
import { AgeContext } from "./AgeContext";
import Header from "./Header";

function App() {
  return (
    //Header 컴포넌트에 24와 정지원 전달
    // provider는 데이터 공급자
    <AgeContext.Provider value="24">
      <NameContext.Provider value="정지원">
        <div className="App">
          <Header />
        </div>
      </NameContext.Provider>
    </AgeContext.Provider>
  );
}

export default App;
