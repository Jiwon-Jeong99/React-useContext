import { useContext } from "react";
import { AgeContext } from "./AgeContext";
import { NameContext } from "./NameContext";
import "./App.css";

const Header = () => {
  // useContext(MyContext)가 맞는 사용
  // useContext(MyContext.Provider)는 맞지 않는 사용
  // useContext로 전달한 인자는 context 객체 그 자체여야 함
  const age = useContext(AgeContext);
  const user = useContext(NameContext);

  console.log("user => ", user);
  console.log("age=> ", age);

  return (
    <header className="App-header">
      <p>
        안녕하세요. {user}님의 나이는 {age}입니다만?
      </p>
    </header>
  );
};

export default Header;
