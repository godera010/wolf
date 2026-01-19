import { MapPin, Clock, DollarSign } from 'lucide-react';

export default function RoutesPage() {
  const routes = [
    {
      from: 'Harare',
      to: 'Bulawayo',
      distance: '440 km',
      duration: '5h 30m',
      price: '$25',
      departures: ['06:00', '09:00', '12:00', '15:00', '18:00'],
    },
    {
      from: 'Harare',
      to: 'Victoria Falls',
      distance: '880 km',
      duration: '10h',
      price: '$45',
      departures: ['06:00', '12:00', '18:00'],
    },
    {
      from: 'Bulawayo',
      to: 'Victoria Falls',
      distance: '440 km',
      duration: '6h',
      price: '$30',
      departures: ['07:00', '11:00', '16:00'],
    },
    {
      from: 'Harare',
      to: 'Mutare',
      distance: '265 km',
      duration: '3h 30m',
      price: '$18',
      departures: ['07:00', '10:00', '13:00', '16:00'],
    },
    {
      from: 'Harare',
      to: 'Gweru',
      distance: '275 km',
      duration: '3h 45m',
      price: '$15',
      departures: ['06:30', '09:30', '12:30', '15:30'],
    },
    {
      from: 'Harare',
      to: 'Masvingo',
      distance: '290 km',
      duration: '4h',
      price: '$20',
      departures: ['07:00', '11:00', '15:00'],
    },
  ];

  return (
    <div className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="font-['Montserrat',sans-serif] font-bold text-4xl md:text-5xl text-center text-[#01257d] mb-4">
            Our Routes
          </h1>
          <p className="font-['Montserrat',sans-serif] text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide reliable bus services across Zimbabwe. Check our available routes and schedules below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {routes.map((route, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#01257d] to-[#e96f30] p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <MapPin size={20} />
                      <span className="font-['Montserrat',sans-serif] font-semibold text-lg">
                        {route.from}
                      </span>
                    </div>
                    <span className="text-2xl">→</span>
                    <div className="flex items-center gap-2">
                      <span className="font-['Montserrat',sans-serif] font-semibold text-lg">
                        {route.to}
                      </span>
                      <MapPin size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-['Montserrat',sans-serif] text-gray-600">Distance</span>
                    <span className="font-['Montserrat',sans-serif] font-medium text-gray-800">
                      {route.distance}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={18} />
                      <span className="font-['Montserrat',sans-serif] text-sm">Duration</span>
                    </div>
                    <span className="font-['Montserrat',sans-serif] font-medium text-gray-800">
                      {route.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign size={18} />
                      <span className="font-['Montserrat',sans-serif] text-sm">Price</span>
                    </div>
                    <span className="font-['Montserrat',sans-serif] font-bold text-[#e96f30] text-xl">
                      {route.price}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-['Montserrat',sans-serif] text-sm text-gray-600 mb-2">
                      Daily Departures:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {route.departures.map((time, i) => (
                        <span 
                          key={i}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-['Montserrat',sans-serif] text-xs"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-[#042880] hover:bg-[#012275] text-white font-['Montserrat',sans-serif] font-medium py-2 rounded-lg transition-colors mt-4">
                    Book This Route
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
