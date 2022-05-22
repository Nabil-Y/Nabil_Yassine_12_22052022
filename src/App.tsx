import { FC } from "react";
import Card from "./components/UI/Card";
import IconCard from "./components/UI/IconCard";

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Card>Loop</Card>
      <IconCard>Icone</IconCard>
    </div>
  );
};

export default App;
