import HttpProtocol from "../assets/ssl/http_protocol.svg";
import { ROUTES } from "../routes/paths";

export interface HomePageConfig {
  title: string;
  description: string;
  imageUrl: string;
  route: string;
}

export const HomePageConfigs = [
  {
    title: "Http Protocol",
    description:
      "Explains request/response lifecycle, methods, headers, and status codes. Visual flowchart with WWW vs Internet comparison",
    imageUrl: HttpProtocol,
    route: ROUTES.HTTP_PROTOCOL,
  },
  {
    title: "Http Protocol",
    description:
      "Explains request/response lifecycle, methods, headers, and status codes. Visual flowchart with WWW vs Internet comparison",
    imageUrl: HttpProtocol,
    route: ROUTES.HTTP_PROTOCOL,
  },
  {
    title: "Http Protocol",
    description:
      "Explains request/response lifecycle, methods, headers, and status codes. Visual flowchart with WWW vs Internet comparison",
    imageUrl: HttpProtocol,
    route: ROUTES.HTTP_PROTOCOL,
  },
  {
    title: "Http Protocol",
    description:
      "Explains request/response lifecycle, methods, headers, and status codes. Visual flowchart with WWW vs Internet comparison",
    imageUrl: HttpProtocol,
    route: ROUTES.HTTP_PROTOCOL,
  },
  {
    title: "Http Protocol",
    description:
      "Explains request/response lifecycle, methods, headers, and status codes. Visual flowchart with WWW vs Internet comparison",
    imageUrl: HttpProtocol,
    route: ROUTES.HTTP_PROTOCOL,
  },
];
