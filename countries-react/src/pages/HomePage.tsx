import { useEffect, useState } from "react";
import { getCountries } from "../services/countryService";
import type { Country } from "../types/Country";
import { MapPin, Users, Globe2, TrendingUp, Award, Sparkles, Compass } from "lucide-react";

function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    loadCountries();
  }, []);

  const scrollToCountries = () => {
    const element = document.getElementById('countries-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl lg:rounded-3xl min-h-[500px] lg:min-h-[600px] flex items-center">
        {/* Fondo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
        
        {/* Círculos decorativos animados */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Contenido del Hero */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm text-indigo-300 font-medium">Discover the World</span>
            </div>
            
            {/* Título principal */}
            <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
              <div className="p-2 lg:p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl animate-bounce backdrop-blur-sm">
                <Globe2 className="w-10 h-10 lg:w-14 lg:h-14 text-indigo-400" />
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  World Explorer
                </span>
              </h1>
            </div>
            
            {/* Subtítulo */}
            <p className="text-indigo-300/90 text-base lg:text-lg mb-3">
              Your digital passport to the world
            </p>
            
            {/* Descripción */}
            <p className="text-base lg:text-lg text-slate-300 max-w-2xl mx-auto mb-8 lg:mb-10 leading-relaxed">
              Explore a complete collection of countries, their cultures, traditions, and fascinating facts.
              A window to the world at your fingertips.
            </p>
            
            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-10">
              <div className="flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-slate-300 text-sm lg:text-base">{countries.length.toLocaleString()} countries</span>
              </div>
              <div className="flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-500/20 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-300 text-sm lg:text-base">Updated data</span>
              </div>
              <div className="flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 text-sm lg:text-base">Official info</span>
              </div>
            </div>
            
            {/* Botón de acción */}
            <div className="flex justify-center">
              <button 
                onClick={scrollToCountries}
                className="group relative px-6 lg:px-8 py-2.5 lg:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Countries
                  <Compass className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Wave decoration at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-12 lg:h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-slate-900/50"
              opacity="0.5"
            />
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-slate-900/80"
            />
          </svg>
        </div>
      </section>

      {/* Countries Grid */}
      <div id="countries-grid">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white flex items-center gap-2">
              <span>🌍</span> 
              All Countries
            </h2>
            <p className="text-slate-400 text-sm lg:text-base mt-1">Explore our complete collection</p>
          </div>
          <div className="text-sm lg:text-base text-indigo-300 bg-indigo-500/10 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-indigo-500/20">
            {countries.length} destinations available
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {countries.map((country) => (
            <div 
              key={country.name.common} 
              className="group relative overflow-hidden bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
              
              <div className="relative h-44 lg:h-52 overflow-hidden">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-4 lg:p-5">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {country.name.common}
                </h3>
                
                <div className="space-y-1.5 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-slate-300">{country.region || "Region not specified"}</span>
                  </div>
                  {country.capital && country.capital.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-slate-300">Capital: {country.capital[0]}</span>
                    </div>
                  )}
                  {country.population && (
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-300">Population: {country.population.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;