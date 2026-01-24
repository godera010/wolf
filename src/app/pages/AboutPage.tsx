import { Users, Award, Shield, TrendingUp } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import { Card } from '../components/ui/Card';

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
    <div className="flex flex-col flex-grow relative">

      {/* Hero Section */}
      <PageHero
        title="Driving Zimbabwe Forward"
        subtitle="Since 2011, RoadWolf Coaches has been the heartbeat of Zimbabwe's transport network, connecting communities with safety, comfort, and reliability."
        label="About Us"
      />

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} variant="default" hover="lift" className="flex flex-col items-center justify-center text-center border-slate-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#023e8a] rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>
                <div className="font-bold text-3xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Our Story Section */}
      <Section className="py-8">
        <Card variant="default" hover="none" padding="lg" className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border-slate-100">
          <h2 className="font-bold text-3xl text-center text-primary mb-8">
            Our Journey
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-['Montserrat',sans-serif]">
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
        </Card>
      </Section>

      {/* Values Section */}
      <Section className="bg-slate-50/50">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl text-primary mb-4">Our Core Values</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'Safety First', desc: 'We prioritize the safety of our passengers above all else, with regular maintenance and highly trained drivers.' },
            { title: 'Customer Satisfaction', desc: 'Your comfort and satisfaction are our top priorities. We go the extra mile to ensure a pleasant journey.' },
            { title: 'Reliability', desc: "We're committed to punctuality and consistency, ensuring you reach your destination on time, every time." }
          ].map((val, idx) => (
            <Card key={idx} variant="default" hover="lift" padding="lg" className="border-slate-100 h-full">
              <h3 className="font-bold text-xl text-primary mb-4">{val.title}</h3>
              <p className="text-slate-600 leading-relaxed">{val.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <h2 className="font-bold text-3xl text-center text-primary mb-12">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-40 h-40 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg group-hover:border-secondary transition-colors duration-300">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <Users className="text-slate-300" size={64} />
                )}
              </div>
              <h3 className="font-bold text-lg text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-secondary uppercase tracking-wider">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
