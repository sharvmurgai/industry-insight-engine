
import { useState } from 'react';
import { ArrowUp, TrendingUp, Users, DollarSign, Building, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      growth: '+45%',
      marketSize: '$390B',
      score: 94,
      description: 'Artificial intelligence and machine learning technologies',
      trend: 'up',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'fintech',
      name: 'FinTech',
      growth: '+32%',
      marketSize: '$280B',
      score: 89,
      description: 'Financial technology and digital banking solutions',
      trend: 'up',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'healthtech',
      name: 'HealthTech',
      growth: '+28%',
      marketSize: '$220B',
      score: 87,
      description: 'Digital health and medical technology',
      trend: 'up',
      color: 'from-rose-500 to-pink-600'
    },
    {
      id: 'cleantech',
      name: 'CleanTech',
      growth: '+38%',
      marketSize: '$180B',
      score: 91,
      description: 'Clean energy and environmental technology',
      trend: 'up',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'edtech',
      name: 'EdTech',
      growth: '+25%',
      marketSize: '$89B',
      score: 82,
      description: 'Educational technology and e-learning platforms',
      trend: 'up',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'foodtech',
      name: 'FoodTech',
      growth: '+22%',
      marketSize: '$67B',
      score: 78,
      description: 'Food technology and agricultural innovation',
      trend: 'up',
      color: 'from-orange-500 to-amber-600'
    }
  ];

  const startups = {
    'ai-ml': [
      {
        id: 'neural-dynamics',
        name: 'Neural Dynamics',
        description: 'Advanced neural network optimization',
        score: 92,
        funding: '$12M Series A',
        employees: '45-60'
      },
      {
        id: 'quantum-ai',
        name: 'Quantum AI Labs',
        description: 'Quantum computing for AI acceleration',
        score: 89,
        funding: '$8M Seed',
        employees: '20-35'
      },
      {
        id: 'vision-pro',
        name: 'VisionPro AI',
        description: 'Computer vision for autonomous systems',
        score: 85,
        funding: '$5M Seed',
        employees: '15-25'
      }
    ],
    'fintech': [
      {
        id: 'pay-swift',
        name: 'PaySwift',
        description: 'Instant cross-border payments',
        score: 88,
        funding: '$25M Series B',
        employees: '80-100'
      },
      {
        id: 'credit-wise',
        name: 'CreditWise',
        description: 'AI-powered credit scoring',
        score: 84,
        funding: '$15M Series A',
        employees: '40-55'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-900">DealScoreNexus</h1>
            </Link>
            <div className="flex space-x-4">
              <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                Industries
              </Button>
              <Link to="/pitch-analyzer">
                <Button variant="ghost">Pitch Analyzer</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trending Industries</h1>
          <p className="text-xl text-gray-600">Discover the fastest-growing industries and emerging opportunities</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Industries List */}
          <div className="lg:col-span-1 space-y-4">
            {industries.map((industry) => (
              <Card
                key={industry.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedIndustry === industry.id ? 'ring-2 ring-indigo-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedIndustry(industry.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${industry.color}`} />
                    <Badge variant="secondary" className="text-green-700 bg-green-100">
                      {industry.growth}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Market Size</span>
                    <span className="font-semibold">{industry.marketSize}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">Trend Score</span>
                    <span className="font-semibold">{industry.score}/100</span>
                  </div>
                  <Progress value={industry.score} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Industry Details */}
          <div className="lg:col-span-2">
            {selectedIndustry ? (
              <div className="space-y-6">
                {/* Market Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building className="h-5 w-5" />
                      <span>Market Statistics</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">
                          {industries.find(i => i.id === selectedIndustry)?.marketSize}
                        </div>
                        <div className="text-sm text-gray-600">Market Size</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {industries.find(i => i.id === selectedIndustry)?.growth}
                        </div>
                        <div className="text-sm text-gray-600">YoY Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">2.3k</div>
                        <div className="text-sm text-gray-600">Active Startups</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600 mb-1">$45B</div>
                        <div className="text-sm text-gray-600">Total Funding</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emerging Startups */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Emerging Startups</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {startups[selectedIndustry as keyof typeof startups]?.map((startup) => (
                        <Link key={startup.id} to={`/startup/${startup.id}`}>
                          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">{startup.name}</h3>
                              <p className="text-sm text-gray-600 mb-2">{startup.description}</p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span className="flex items-center space-x-1">
                                  <DollarSign className="h-3 w-3" />
                                  <span>{startup.funding}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Users className="h-3 w-3" />
                                  <span>{startup.employees}</span>
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="text-right">
                                <div className="text-lg font-bold text-indigo-600">{startup.score}</div>
                                <div className="text-xs text-gray-500">Score</div>
                              </div>
                              <ChevronRight className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </Link>
                      )) || (
                        <div className="text-center py-8 text-gray-500">
                          Select an industry to view emerging startups
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select an industry to view detailed insights</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
