import { InlineStyle } from "./component/InlineStyle";
import { CssModules } from "./component/CssModules";
import "./styles.css";
import { StyledJsx } from "./component/StyledJsx";
import { StyledComponents } from "./component/StyledComponents";
import { Emotion } from "./component/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
