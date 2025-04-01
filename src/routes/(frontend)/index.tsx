import { useNavigate } from "@solidjs/router";

export default function Home() {
  const navigate = useNavigate();
  function navigateToBlog() {
    navigate("/blog");
  }

  return (
    <main>
      <h1>Welcome to home</h1>
      <button onClick={navigateToBlog}>Navigate to blog</button>
    </main>
  );
}
