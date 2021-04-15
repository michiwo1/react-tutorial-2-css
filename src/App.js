import { InlineStyle } from "./component/InlineStyle";
import { CssModules } from "./component/CssModules";
import "./styles.css";
import { StyledJsx } from "./component/StyledJsx";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
