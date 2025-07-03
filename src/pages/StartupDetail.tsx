
import { useParams, Link } from 'react-router-dom';
import { ArrowUp, TrendingUp, Users, Mail, Phone, Globe, Building, Calendar, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const StartupDetail = () => {
  const { id } = useParams();

  // Mock data - in real app this would be fetched based on ID
  const startup = {
    id: 'neural-dynamics',
    name: 'Neural Dynamics',
    description: 'Advanced neural network optimization for enterprise AI applications',
    industry: 'AI & Machine Learning',
    founded: '2022',
    employees: '45-60',
    funding: '$12M Series A',
    location: 'San Francisco, CA',
    website: 'neuraldynamics.ai',
    compositeScore: 92,
    scores: {
      trendGrowth: 89,
      anomalyFlag: 95,
      recency: 88,
      signalQuality: 91,
      llmScore: 93
    },
    contact: {
      email: 'contact@neuraldynamics.ai',
      phone: '+1 (555) 123-4567',
      linkedin: 'linkedin.com/company/neural-dynamics'
    },
    metrics: {
      monthlyGrowth: '+23%',
      customerAcquisition: '150/month',
      retention: '94%',
      mrr: '$285k'
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreDescription = (type: string) => {
    const descriptions = {
      trendGrowth: 'Market momentum and growth trajectory',
      anomalyFlag: 'Risk assessment and compliance score',
      recency: 'Recent activity and market presence',
      signalQuality: 'Data source reliability and accuracy',
      llmScore: 'AI-powered comprehensive evaluation'
    };
    return descriptions[type as keyof typeof descriptions];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-900">IndustryScope</h1>
            </Link>
            <div className="flex space-x-4">
              <Link to="/industries">
                <Button variant="ghost">Industries</Button>
              </Link>
              <Link to="/pitch-analyzer">
                <Button variant="ghost">Pitch Analyzer</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/industries" className="hover:text-indigo-600">Industries</Link>
            <span>/</span>
            <span className="text-gray-900">{startup.name}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{startup.name}</CardTitle>
                    <CardDescription className="text-base mb-4">{startup.description}</CardDescription>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {startup.industry}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">{startup.compositeScore}</div>
                    <div className="text-sm text-gray-600">Composite Score</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                    <div className="font-semibold">{startup.founded}</div>
                    <div className="text-xs text-gray-600">Founded</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                    <div className="font-semibold">{startup.employees}</div>
                    <div className="text-xs text-gray-600">Employees</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <DollarSign className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                    <div className="font-semibold">{startup.funding}</div>
                    <div className="text-xs text-gray-600">Funding</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Building className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                    <div className="font-semibold text-xs">{startup.location}</div>
                    <div className="text-xs text-gray-600">Location</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Scores */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Scoring Analysis</CardTitle>
                <CardDescription>
                  Comprehensive evaluation across multiple dimensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(startup.scores).map(([key, score]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {getScoreDescription(key)}
                          </p>
                        </div>
                        <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                          {score}
                        </div>
                      </div>
                      <Progress value={score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {startup.metrics.monthlyGrowth}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {startup.metrics.customerAcquisition}
                    </div>
                    <div className="text-sm text-gray-600">New Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {startup.metrics.retention}
                    </div>
                    <div className="text-sm text-gray-600">Retention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">
                      {startup.metrics.mrr}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-gray-600">{startup.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-gray-600">{startup.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Globe className="h-5 w-5 text-gray-600" />
                  <div>
                    <div className="font-medium">Website</div>
                    <div className="text-sm text-gray-600">{startup.website}</div>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700">
                  Contact Startup
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Add to Watchlist
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Compare Startups
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDetail;
