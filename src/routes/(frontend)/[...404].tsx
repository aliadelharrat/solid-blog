import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <Title>Page Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>404 Page Not Found</h1>
    </main>
  );
}
