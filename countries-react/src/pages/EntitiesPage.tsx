import { useEffect, useState } from "react";
import { getCountries } from "../services/countryService";
import type { Country } from "../types/Country";
import { MapPin, Flag, Globe2, TrendingUp, Users, Building2 } from "lucide-react";

function EntitiesPage() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    loadCountries();
  }, []);

  // Get unique regions for stats
  const uniqueRegions = [...new Set(countries.map(c => c.region).filter(Boolean))];
  const totalPopulation = countries.reduce((sum, country) => sum + (country.population || 0), 0);
  
  return (
    <div className="space-y-8 lg:space-y-10">
      {/* Header with stats */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Countries Entities
          </h1>
          <p className="text-slate-400 text-sm lg:text-base">Base de datos completa con información detallada de todos los países</p>
        </div>
        
        <div className="flex gap-3">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl px-5 py-3 border border-indigo-500/20">
            <div className="text-2xl lg:text-3xl font-bold text-indigo-400">{countries.length}</div>
            <div className="text-xs text-slate-400">Países</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl px-5 py-3 border border-purple-500/20">
            <div className="text-2xl lg:text-3xl font-bold text-purple-400">{uniqueRegions.length}</div>
            <div className="text-xs text-slate-400">Regiones</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl px-5 py-3 border border-emerald-500/20 hidden lg:block">
            <div className="text-2xl lg:text-3xl font-bold text-emerald-400">{(totalPopulation / 1000000).toFixed(0)}M</div>
            <div className="text-xs text-slate-400">Población total</div>
          </div>
        </div>
      </div>

      {/* Enhanced Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border-b border-slate-700">
              <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-indigo-300">
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4" />
                  Bandera
                </div>
              </th>
              <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-indigo-300">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4" />
                  País
                </div>
              </th>
              <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-indigo-300">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Capital
                </div>
              </th>
              <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-indigo-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Región
                </div>
              </th>
              <th className="px-4 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-indigo-300 hidden lg:table-cell">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Población
                </div>
              </th>
            </tr>
          </thead>
          
          <tbody>
            {countries.map((country, index) => (
              <tr 
                key={country.name.common} 
                className={`border-b border-slate-700/50 hover:bg-indigo-500/5 transition-all duration-200 cursor-pointer ${
                  index % 2 === 0 ? 'bg-slate-800/30' : 'bg-transparent'
                }`}
              >
                <td className="px-4 lg:px-6 py-3">
                  <div className="w-12 h-8 rounded-md overflow-hidden shadow-lg ring-1 ring-slate-700">
                    <img
                      src={country.flags.png}
                      alt={country.name.common}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                
                <td className="px-4 lg:px-6 py-3">
                  <div className="font-semibold text-white group-hover:text-indigo-300">
                    {country.name.common}
                  </div>
                  {country.name.official && country.name.official !== country.name.common && (
                    <div className="text-xs text-slate-500 mt-1 hidden xl:block">
                      {country.name.official}
                    </div>
                  )}
                </td>
                
                <td className="px-4 lg:px-6 py-3 text-slate-300">
                  {country.capital && country.capital.length > 0 ? country.capital[0] : "N/A"}
                </td>
                
                <td className="px-4 lg:px-6 py-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/20">
                    {country.region || "No especificada"}
                  </span>
                </td>
                
                <td className="px-4 lg:px-6 py-3 text-slate-300 hidden lg:table-cell">
                  {country.population ? country.population.toLocaleString() : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Empty state */}
        {countries.length === 0 && (
          <div className="text-center py-16 lg:py-24">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500/10 mb-4 animate-pulse">
              <Globe2 className="w-10 h-10 text-indigo-400" />
            </div>
            <p className="text-slate-400 text-lg">Cargando datos del mundo...</p>
            <p className="text-slate-500 text-sm mt-2">Por favor espera un momento</p>
          </div>
        )}
      </div>
      
      {/* Footer info */}
      <div className="text-center text-xs text-slate-500 pt-4">
        Datos obtenidos de fuentes oficiales | Actualizado periódicamente
      </div>
    </div>
  );
}

export default EntitiesPage;