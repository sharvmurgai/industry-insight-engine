
import { useState } from 'react';
import { Upload, FileText, TrendingUp, Target, Star, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

const PitchAnalyzer = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsAnalyzing(true);
      
      // Simulate analysis delay
      setTimeout(() => {
        setAnalysis({
          overallScore: 87,
          fileName: file.name,
          scores: {
            problemClarity: 92,
            solutionFit: 85,
            marketSize: 88,
            businessModel: 84,
            teamStrength: 89,
            financials: 82
          },
          strengths: [
            'Clear problem definition and market need',
            'Strong team with relevant experience',
            'Compelling value proposition'
          ],
          improvements: [
            'Add more detailed financial projections',
            'Include competitive analysis',
            'Strengthen go-to-market strategy'
          ]
        });
        setIsAnalyzing(false);
      }, 3000);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 80) return 'bg-blue-100 text-blue-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-900">DealScoreNexus</h1>
            </Link>
            <div className="flex space-x-4">
              <Link to="/industries">
                <Button variant="ghost">Industries</Button>
              </Link>
              <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                Pitch Analyzer
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pitch Deck Analyzer</h1>
          <p className="text-xl text-gray-600">Upload your pitch deck and get AI-powered insights and scoring</p>
        </div>

        {!uploadedFile ? (
          // Upload Section
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Upload Your Pitch Deck</CardTitle>
              <CardDescription>
                Supported formats: PDF, PPT, PPTX (Max size: 50MB)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium text-gray-700 mb-2">Click to upload your pitch deck</p>
                  <p className="text-sm text-gray-500">or drag and drop your file here</p>
                </label>
              </div>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Target className="h-6 w-6 mx-auto mb-2 text-indigo-600" />
                  <div className="text-sm font-medium">AI Scoring</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <TrendingUp className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="text-sm font-medium">Market Analysis</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Star className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
                  <div className="text-sm font-medium">Strengths</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <AlertCircle className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                  <div className="text-sm font-medium">Improvements</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* File Info */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-indigo-600" />
                    <div>
                      <CardTitle>{uploadedFile.name}</CardTitle>
                      <CardDescription>
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • Uploaded successfully
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setUploadedFile(null);
                      setAnalysis(null);
                      setIsAnalyzing(false);
                    }}
                  >
                    Upload New File
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {isAnalyzing ? (
              // Loading State
              <Card>
                <CardContent className="py-12">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">Analyzing your pitch deck...</h3>
                    <p className="text-gray-600">This may take a few moments</p>
                  </div>
                </CardContent>
              </Card>
            ) : analysis && (
              // Analysis Results
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Overall Score */}
                <Card className="lg:col-span-1">
                  <CardHeader className="text-center">
                    <CardTitle>Overall Score</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className={`text-6xl font-bold mb-4 ${getScoreColor(analysis.overallScore)}`}>
                      {analysis.overallScore}
                    </div>
                    <Badge className={getScoreBadgeColor(analysis.overallScore)}>
                      {analysis.overallScore >= 90 ? 'Excellent' :
                       analysis.overallScore >= 80 ? 'Good' :
                       analysis.overallScore >= 70 ? 'Average' : 'Needs Work'}
                    </Badge>
                    <Progress value={analysis.overallScore} className="mt-4 h-3" />
                  </CardContent>
                </Card>

                {/* Detailed Scores */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Category Scores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(analysis.scores).map(([category, score]) => (
                        <div key={category} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium capitalize">
                              {category.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className={`font-bold ${getScoreColor(score as number)}`}>
                              {score as number}/100
                            </span>
                          </div>
                          <Progress value={score as number} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Strengths */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-600" />
                      <span>Key Strengths</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysis.strengths.map((strength: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Improvements */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                      <span>Areas for Improvement</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysis.improvements.map((improvement: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PitchAnalyzer;
