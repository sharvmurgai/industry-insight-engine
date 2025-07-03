
import { useState } from 'react';
import { Upload, FileText, TrendingUp, Target, BarChart3, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

const PitchAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setResults(null);
    }
  };

  const analyzePitch = () => {
    if (!file) return;
    
    setAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setResults({
        overallScore: 78,
        scores: {
          problem: 85,
          solution: 82,
          market: 75,
          business: 73,
          team: 80,
          financials: 68,
          traction: 77,
          competition: 71
        },
        strengths: [
          'Clear problem statement with strong market validation',
          'Innovative solution with unique value proposition',
          'Experienced team with relevant industry background',
          'Strong early traction metrics'
        ],
        improvements: [
          'Financial projections need more detail and justification',
          'Competitive analysis could be more comprehensive',
          'Go-to-market strategy requires clearer execution plan',
          'Revenue model scalability concerns'
        ],
        recommendation: 'Strong potential with some refinements needed'
      });
      setAnalyzing(false);
    }, 3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 70) return 'bg-blue-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-emerald-600" />
              <h1 className="text-xl font-bold text-gray-900">IndustryScope</h1>
            </Link>
            <div className="flex space-x-4">
              <Link to="/industries">
                <Button variant="ghost">Industries</Button>
              </Link>
              <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Upload Pitch Deck</span>
                </CardTitle>
                <CardDescription>
                  Upload your PDF pitch deck for comprehensive analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors">
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Drag and drop your file here, or click to browse
                      </p>
                      <input
                        type="file"
                        accept=".pdf,.ppt,.pptx"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button variant="outline" className="cursor-pointer" asChild>
                          <span>Choose File</span>
                        </Button>
                      </label>
                    </div>
                  </div>

                  {file && (
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-800">{file.name}</span>
                      </div>
                      <p className="text-xs text-emerald-600 mt-1">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  )}

                  <Button 
                    onClick={analyzePitch} 
                    disabled={!file || analyzing}
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                  >
                    {analyzing ? 'Analyzing...' : 'Analyze Pitch Deck'}
                  </Button>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Supported formats: PDF, PPT, PPTX</p>
                    <p>• Maximum file size: 50MB</p>
                    <p>• Analysis takes 30-60 seconds</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {analyzing && (
              <Card>
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
                    <h3 className="text-lg font-semibold">Analyzing Your Pitch Deck</h3>
                    <p className="text-gray-600">Our AI is evaluating your presentation across multiple dimensions...</p>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Processing slides...</div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {results && (
              <div className="space-y-6">
                {/* Overall Score */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Overall Assessment</span>
                      <Badge 
                        variant="secondary" 
                        className={`text-lg px-3 py-1 ${getScoreBg(results.overallScore)} ${getScoreColor(results.overallScore)}`}
                      >
                        {results.overallScore}/100
                      </Badge>
                    </CardTitle>
                    <CardDescription>{results.recommendation}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={results.overallScore} className="h-3" />
                  </CardContent>
                </Card>

                {/* Detailed Scores */}
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Scoring</CardTitle>
                    <CardDescription>
                      Individual assessment of each pitch deck section
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(results.scores).map(([category, score]) => (
                        <div key={category} className="text-center p-4 border rounded-lg">
                          <div className={`text-2xl font-bold mb-1 ${getScoreColor(score as number)}`}>
                            {score}
                          </div>
                          <div className="text-sm text-gray-600 capitalize">
                            {category}
                          </div>
                          <Progress value={score as number} className="h-1 mt-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Strengths & Improvements */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        <span>Strengths</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {results.strengths.map((strength: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-orange-600">
                        <AlertCircle className="h-5 w-5" />
                        <span>Areas for Improvement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {results.improvements.map((improvement: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Action Buttons */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Detailed Report
                      </Button>
                      <Button variant="outline">
                        <Target className="h-4 w-4 mr-2" />
                        Industry Benchmark
                      </Button>
                      <Button variant="outline">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Track Progress
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {!analyzing && !results && (
              <Card className="h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Upload a pitch deck to see detailed analysis and scoring</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchAnalyzer;
