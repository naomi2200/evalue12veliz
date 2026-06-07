import { useEffect, useState } from "react";
import { getCountries } from "../services/countryService";
import type { Country } from "../types/Country";

function EntitiesPage() {
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
      <h1 className="text-4xl font-bold mb-6">
        🌎 Countries Entities
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-black">
              <th className="border p-2">Bandera</th>
              <th className="border p-2">País</th>
              <th className="border p-2">Región</th>
            </tr>
          </thead>

          <tbody>
            {countries.map((country) => (
              <tr key={country.name.common}>
                <td className="border p-2">
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="w-16"
                  />
                </td>

                <td className="border p-2">
                  {country.name.common}
                </td>

                <td className="border p-2">
                  {country.region}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EntitiesPage;