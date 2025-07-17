export function StatsSection() {
  const stats = [
    { number: '2000+', label: 'Students Graduated', color: 'bg-blue-600' },
    { number: '50+', label: 'Expert Faculty', color: 'bg-green-600' },
    { number: '20+', label: 'Years of Excellence', color: 'bg-orange-600' },
    { number: '95%', label: 'Placement Rate', color: 'bg-purple-600' },
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}