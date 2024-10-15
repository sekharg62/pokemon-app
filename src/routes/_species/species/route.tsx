import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

interface Species {
  name: string;
  url: string;
}

interface SpeciesResponse {
  results: Species[];
}


const fetchPokemonSpecies = async (page: number): Promise<SpeciesResponse> => {
  const offset = (page - 1) * 10;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=10&offset=${offset}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


export const Route = createFileRoute('/_species/species')({
  component: Species,
});

export default function Species() {
  const [page, setPage] = useState(1); 

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['pokemonSpecies', page], 
    queryFn: () => fetchPokemonSpecies(page), 
  
  });

  
  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }

  return (
    <div className="p-4">
      {/* Pagination buttons */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Pokemon Species</h2>
      <ul className="space-y-2 text-center">
        {data?.results.map((species, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded shadow-md">
            {species.name}
          </li>
        ))}
      </ul>

      
    </div>
  );
}
