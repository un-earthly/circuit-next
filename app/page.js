"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CircuitAnimation } from "@/components/circuit-animation"
import { LogoScroller } from "@/components/logo-scroller"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts'


export default function LandingPage() {
  const [teamSize, setTeamSize] = useState(5)
  const [avgSalary, setAvgSalary] = useState(100000)
  const [meetingsPerWeek, setMeetingsPerWeek] = useState(10)

  const calculateRunwayWaste = () => {
    const hourlyRate = avgSalary / (52 * 40)
    const weeklyWaste = meetingsPerWeek * 1 * teamSize * hourlyRate
    return (weeklyWaste * 4).toFixed(2)
  }


  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white font-inter">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <CircuitAnimation className="absolute inset-0 z-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-jetbrains-mono mb-4">
            Bridge The Gap Between Tech & Business
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Protect Your Startup's Runway with Automated Technical Translation
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#B87333] hover:bg-[#A66323] text-white">
              Start Saving Runway
            </Button>
            <Button variant="outline" className="border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white">
              Book Demo
            </Button>
          </div>
          <div className="mt-8 p-4 bg-[#4CAF50]/20 rounded-lg inline-block">
            <p className="text-lg">Average runway extension: 3.2 months</p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-[#1E1E1E]/90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">The Hidden Cost of Miscommunication</h2>
          <div className="max-w-2xl mx-auto bg-[#2A2A2A] p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <Label htmlFor="teamSize">Team Size</Label>
                <Input
                  id="teamSize"
                  type="number"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="bg-[#3A3A3A] border-[#B87333]"
                />
              </div>
              <div>
                <Label htmlFor="avgSalary">Average Salary ($)</Label>
                <Input
                  id="avgSalary"
                  type="number"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="bg-[#3A3A3A] border-[#B87333]"
                />
              </div>
              <div>
                <Label htmlFor="meetingsPerWeek">Meetings/Week</Label>
                <Input
                  id="meetingsPerWeek"
                  type="number"
                  value={meetingsPerWeek}
                  onChange={(e) => setMeetingsPerWeek(Number(e.target.value))}
                  className="bg-[#3A3A3A] border-[#B87333]"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Monthly Runway Waste</p>
              <p className="text-4xl font-bold text-[#B87333]">${calculateRunwayWaste()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-12 bg-[#4CAF50]/10">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6">Used by 200+ funded startups</h3>
          <div className="flex justify-center gap-4 mb-8">
            <span className="bg-[#B87333] text-white px-4 py-2 rounded-full">Seed</span>
            <span className="bg-[#B87333] text-white px-4 py-2 rounded-full">Series A</span>
          </div>
          <LogoScroller />
        </div>
      </section>
      <section className="py-20 bg-[#1E1E1E]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Your Technical-Business Neural Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Automated Translation",
                features: ["Tech to business language", "Real-time updates"],
              },
              {
                title: "Progress Tracking",
                features: ["Milestone visualization", "Resource allocation"],
              },
              {
                title: "Alert System",
                features: ["Early warning system", "Risk identification"],
              },
              {
                title: "Integration Hub",
                features: ["Popular PM tools", "Custom workflows"],
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-[#2A2A2A] border-[#B87333]">
                <CardHeader>
                  <CardTitle className="text-[#B87333]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    {feature.features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Runway Protection Showcase */}
      <section className="py-20 bg-[#1E1E1E]/90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Runway Protection Showcase</h2>
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="timeline">Timeline Comparison</TabsTrigger>
              <TabsTrigger value="meetings">Meeting Reduction</TabsTrigger>
              <TabsTrigger value="velocity">Development Velocity</TabsTrigger>
              <TabsTrigger value="resources">Resource Optimization</TabsTrigger>
            </TabsList>
            <TabsContent value="timeline">
              <Card>
                <CardHeader>
                  <CardTitle>Traditional vs CircuitNext</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                      data={[
                        { name: 'Month 1', Traditional: 100, CircuitNext: 100 },
                        { name: 'Month 2', Traditional: 80, CircuitNext: 95 },
                        { name: 'Month 3', Traditional: 60, CircuitNext: 90 },
                        { name: 'Month 4', Traditional: 40, CircuitNext: 85 },
                        { name: 'Month 5', Traditional: 20, CircuitNext: 80 },
                        { name: 'Month 6', Traditional: 0, CircuitNext: 75 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="Traditional" stroke="#B87333" />
                      <Line type="monotone" dataKey="CircuitNext" stroke="#4CAF50" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="meetings">
              <Card>
                <CardHeader>
                  <CardTitle>Meeting Reduction Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      data={[
                        { name: 'Week 1', meetings: 10 },
                        { name: 'Week 2', meetings: 8 },
                        { name: 'Week 3', meetings: 6 },
                        { name: 'Week 4', meetings: 4 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="meetings" fill="#B87333" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="velocity">
              <Card>
                <CardHeader>
                  <CardTitle>Development Velocity Increase</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                      data={[
                        { sprint: 'Sprint 1', velocity: 20 },
                        { sprint: 'Sprint 2', velocity: 25 },
                        { sprint: 'Sprint 3', velocity: 30 },
                        { sprint: 'Sprint 4', velocity: 40 },
                        { sprint: 'Sprint 5', velocity: 45 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sprint" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="velocity" stroke="#4CAF50" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      data={[
                        { resource: 'Development', before: 70, after: 85 },
                        { resource: 'Meetings', before: 20, after: 10 },
                        { resource: 'Documentation', before: 10, after: 5 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="resource" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="before" fill="#B87333" name="Before CircuitNext" />
                      <Bar dataKey="after" fill="#4CAF50" name="After CircuitNext" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technical Integration Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Seamless Integration, Maximum Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Integration Partners</h3>
              <div className="grid grid-cols-3 gap-4">
                {/* Add integration partner logos here */}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">API Preview</h3>
              <pre className="bg-[#2A2A2A] p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
                  {`
// Example API usage
const circuitNext = new CircuitNext({
  apiKey: 'your-api-key'
});

const translation = await circuitNext.translate({
  from: 'technical',
  to: 'business',
  text: 'Implementing OAuth 2.0 for secure API access'
});

console.log(translation);
// Output: "Enhancing security measures for seamless third-party integrations"
                  `}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <footer className="bg-[#2A2A2A] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Extend Your Runway?</h2>
              <p className="text-lg mb-4">Join 200+ funded startups saving time and resources.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#B87333] hover:bg-[#A66323] text-white">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}