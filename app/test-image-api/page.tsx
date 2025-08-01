'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ImageData {
  url: string;
}

interface ApiResponse {
  images: ImageData[];
  timings: {
    inference: number;
  };
  seed: number;
  shared_id: string;
  data: ImageData[];
  created: number;
}

export default function TestImageApiPage() {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  // Test data
  const testData: ApiResponse = {
    "images": [
      {
        "url": "https://sc-maas.oss-cn-shanghai.aliyuncs.com/outputs%2F20250714%2Fjie7a42gp7.jpeg?Expires=1752512038&OSSAccessKeyId=LTAI5tQnPSzwAnR8NmMzoQq4&Signature=8SyovRpjW0eKEokDUd7WwgrBVYI%3D"
      }
    ],
    "timings": {
      "inference": 0.272
    },
    "seed": 2033113628,
    "shared_id": "0",
    "data": [
      {
        "url": "https://sc-maas.oss-cn-shanghai.aliyuncs.com/outputs%2F20250714%2Fjie7a42gp7.jpeg?Expires=1752512038&OSSAccessKeyId=LTAI5tQnPSzwAnR8NmMzoQq4&Signature=8SyovRpjW0eKEokDUd7WwgrBVYI%3D"
      }
    ],
    "created": 1752508439
  };

  const loadTestData = () => {
    setLoading(true);
    setTimeout(() => {
      setApiResponse(testData);
      setLoading(false);
    }, 1000);
  };

  const clearData = () => {
    setApiResponse(null);
  };

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString('zh-CN');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Image Generation API Test Page
          </h1>
          <p className="text-lg text-gray-600">
            Test image generation API response data and image display functionality
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <Button 
            onClick={loadTestData} 
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {loading ? 'Loading...' : 'Load Test Data'}
          </Button>
          <Button 
            onClick={clearData} 
            variant="outline"
            disabled={!apiResponse}
          >
            Clear Data
          </Button>
        </div>

        {apiResponse && (
          <div className="space-y-6">
            {/* API Response Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>API Response Info</span>
                  <Badge variant="secondary">Success</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Inference Time</p>
                    <p className="text-lg font-semibold">{apiResponse.timings.inference}s</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Seed Value</p>
                    <p className="text-lg font-semibold">{apiResponse.seed}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Share ID</p>
                    <p className="text-lg font-semibold">{apiResponse.shared_id}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Created Time</p>
                    <p className="text-lg font-semibold">{formatTimestamp(apiResponse.created)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generated Images */}
            <Card>
              <CardHeader>
                <CardTitle>Generated Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {apiResponse.images.map((image, index) => (
                    <div key={index} className="space-y-4">
                      <div className="relative group">
                        <img
                          src={image.url}
                          alt={`Generated Image ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">
                          Image {index + 1}
                        </p>
                        <p className="text-xs text-gray-500 break-all">
                          {image.url}
                        </p>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => window.open(image.url, '_blank')}
                          className="w-full"
                        >
                          Open in New Window
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Raw JSON Data */}
            <Card>
              <CardHeader>
                <CardTitle>Raw JSON Response</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              </CardContent>
            </Card>
          </div>
        )}

        {!apiResponse && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="space-y-4">
                <div className="text-6xl">🖼️</div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Click the button above to load test data
                </h3>
                <p className="text-gray-500">
                  Image generation API response data and generated images will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}