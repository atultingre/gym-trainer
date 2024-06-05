import Comments from "./components/Comments/Comments";
import Dashboard from "./components/Dashboard/Dashboard";
import NaavigationBar from "./components/NavigationBar/NaavigationBar";
import Results from "./components/results/results";

export default function Home() {
  return (
    <>
      <NaavigationBar />
      <Dashboard />
      <Results />
      <Comments />
    </>
  );
}
