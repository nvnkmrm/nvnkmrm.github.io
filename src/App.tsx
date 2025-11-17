import httpProtocol from "./assets/ssl/http_protocol.svg";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack>
      <img
        width={"60%"}
        height={"80%"}
        src={httpProtocol}
        alt="http protocol"
      />
    </Stack>
  );
}

export default App;
