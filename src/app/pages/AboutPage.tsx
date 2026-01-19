import { Users, Award, Shield, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '500K+', label: 'Happy Passengers' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Shield, value: '99.9%', label: 'Safety Record' },
    { icon: TrendingUp, value: '50+', label: 'Daily Routes' },
  ];

  const team = [
    { name: 'Tendai Moyo', role: 'CEO & Founder', image: null },
    { name: 'Grace Ncube', role: 'Operations Manager', image: null },
    { name: 'John Dube', role: 'Customer Service Director', image: null },
  ];

  return (
    <div className="bg-white flex flex-col overflow-x-hidden flex-grow relative">
      
      <div className="flex-grow relative">
         {/* Background Blobs (Consistent with Home) */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
             <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />
             <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative bg-[#01257d] py-24 text-white overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-[#01257d] to-[#023e8a]" />
           {/* Pattern Overlay */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
           
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-[#e96f30] font-bold uppercase tracking-widest text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">About Us</span>
            <h1 className="font-bold text-4xl md:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Driving Zimbabwe Forward
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Since 2011, RoadWolf Coaches has been the heartbeat of Zimbabwe's transport network, connecting communities with safety, comfort, and reliability.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#01257d] to-[#023e8a] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="font-bold text-3xl text-[#01257d] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
              <h2 className="font-bold text-3xl text-center text-[#01257d] mb-8">
                Our Journey
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Founded in 2011, RoadWolf Coaches began with a simple mission: to provide safe, comfortable, and reliable bus transportation across Zimbabwe. What started as a small fleet of three buses has grown into the country's premier bus service, serving thousands of passengers daily.
                </p>
                <p>
                  Our commitment to excellence has made us the preferred choice for travelers throughout Zimbabwe. We take pride in our modern fleet, experienced drivers, and unwavering dedication to passenger safety and comfort.
                </p>
                <p>
                  Today, RoadWolf Coaches operates over 30 luxury coaches, connecting major cities and towns across the country. We continue to invest in the latest technology and training to ensure that every journey with us is a pleasant experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-50/50 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="font-bold text-3xl text-[#01257d] mb-4">Our Core Values</h2>
                 <div className="h-1 w-20 bg-[#e96f30] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Safety First', desc: 'We prioritize the safety of our passengers above all else, with regular maintenance and highly trained drivers.' },
                { title: 'Customer Satisfaction', desc: 'Your comfort and satisfaction are our top priorities. We go the extra mile to ensure a pleasant journey.' },
                { title: 'Reliability', desc: "We're committed to punctuality and consistency, ensuring you reach your destination on time, every time." }
              ].map((val, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-xl text-[#01257d] mb-4">{val.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="font-bold text-3xl text-center text-[#01257d] mb-12">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="w-40 h-40 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg group-hover:border-[#e96f30] transition-colors duration-300">
                    {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                        <Users className="text-slate-300" size={64} />
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-[#01257d] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#e96f30] uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
