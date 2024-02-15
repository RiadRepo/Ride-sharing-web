// index.js
import NavBar from "@/Components/NavBar";
import CarRequest from "@/Components/Request/CarRequest";

export default function index({ repo }) {
  console.log(repo.items);
  return (
    <div>
      <NavBar />
      <h1>Car Requests</h1>
      {repo.items.map((request, index) => (
        <CarRequest key={index} request={request} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const token = process.env.TOKEN;

  const res = await fetch(
    "https://cloud.squidex.io/api/content/ride-share/request",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        // Add other headers if needed
      },
    }
  );
  const repo = await res.json();

  // console.log(repo);

  // Pass data to the page via props
  return { props: { repo } };
}
