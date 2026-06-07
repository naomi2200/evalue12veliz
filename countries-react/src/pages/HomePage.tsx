import { useEffect, useState } from "react";
import { getCountries } from "../services/countryService";
import type { Country } from "../types/Country";

function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    loadCountries();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-2">
        🌎 World Explorer
      </h1>

      <p className="mb-6 text-gray-500">
        Explora países del mundo.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {countries.map((country) => (
          <div
            key={country.name.common}
            className="border rounded-lg p-3"
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="h-24 w-full object-cover rounded"
            />

            <h2 className="mt-2 font-semibold">
              {country.name.common}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;