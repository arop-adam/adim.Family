import { TrendingUp, Shield, Globe, GraduationCap, Heart, Users } from 'lucide-react';

const objectives = [
  {
    icon: TrendingUp,
    title: 'Maximize Investment Returns',
    description: 'We aim to generate sustainable financial growth for our stakeholders through well-researched and strategic investment decisions.'
  },
  {
    icon: Shield,
    title: 'Expand Investment Portfolios',
    description: 'Minimize risks while ensuring stable returns through diversified investment strategies.'
  },
  {
    icon: Globe,
    title: 'Support Economic Growth',
    description: 'Contribute to local and global economies by investing in businesses and infrastructure development.'
  },
  {
    icon: GraduationCap,
    title: 'Enhance Financial Literacy',
    description: 'Educate clients on smart investment strategies and financial planning for long-term success.'
  },
  {
    icon: Heart,
    title: 'Promote Ethical Investing',
    description: 'Conduct business with transparency, accountability, and social responsibility.'
  },
  {
    icon: Users,
    title: 'Empower Entrepreneurs',
    description: 'Provide financial support and mentorship to small businesses and startups.'
  }
];

export default function Objectives() {
  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Objectives</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving success through strategic goals and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border-2 border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-red-600 transition-colors">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-red-700 rounded-xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="font-semibold">Expertise in diversified investments</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="font-semibold">Commitment to ethical and sustainable investing</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="font-semibold">Tailored financial solutions for different needs</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="font-semibold">Long-term partnership approach with clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
