import { Form } from "./Form";
import { Clock } from "./Clock";
import { Wrapper } from "./styled";
import Footer from "./Footer";

function App() {
  return (
    <Wrapper>
      <Clock />
      <Form />
      <Footer author="Piotr Kubiak 2021®"></Footer>
    </Wrapper>
  );
}

export default App;
