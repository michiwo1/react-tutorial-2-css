import { InlineStyle } from "./component/InlineStyle";
import { CssModules } from "./component/CssModules";
import "./styles.css";
import { StyledJsx } from "./component/StyledJsx";
import { StyledComponents } from "./component/StyledComponents";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
