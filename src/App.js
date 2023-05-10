import "./styles.css";

// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <DisplayLocations />
    </div>
  );
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    
    <div key={id}>
      <div className="line"></div>
      <h3>{name}</h3>
      <div className="inbox"><img className="image" alt="location-reference" src={`${photo}`} /></div>
      <br />
      <b className="textB inbox">About this location:</b>
      <p className="text inbox">{description}</p>
      <br />
    </div>
  ));
}
