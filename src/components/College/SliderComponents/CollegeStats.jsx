import React from 'react';
import { Award, CheckCircle, Star } from 'lucide-react';

const AmritaRankings = ({ collegeData }) => {
  const rankings = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "NIRF Ranking 2024",
      description: `${collegeData?.nirfranking || "N/A"}`
    },
    // {
    //   icon: <Award className="w-6 h-6 text-blue-500" />,
    //   title: "NAAC Grade",
    //   description: "A++ Grade"
    // }
  ];

  // Use data from collegeData.fullFormOfApprovals to generate dynamic accreditations
  const getAccreditations = () => {
    if (!collegeData || !collegeData.fullFormOfApprovals || !collegeData.fullFormOfApprovals.length) {
      return [];
    }

    return collegeData.fullFormOfApprovals.map(accred => ({
      title: accred.abbreviation,
      description: accred.fullForm
    }));
  };

  const accreditations = getAccreditations();

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {collegeData?.collegeName} Ahead - Excellence in Education
          </h2>
          
          <div className="space-y-8">
            {/* Rankings Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Rankings & Recognition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rankings.map((rank, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    {rank.icon}
                    <div>
                      <h4 className="font-semibold text-gray-800">{rank.title}</h4>
                      <p className="text-gray-600">{rank.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditations Section */}
            {accreditations.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Accreditations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {accreditations.map((accred, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">{accred.title}</h4>
                        <p className="text-sm text-gray-600">{accred.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmritaRankings;