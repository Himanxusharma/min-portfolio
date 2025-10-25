import Navigation from '../components/Navigation'

export default function Journey() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
              Journey
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My path as a designer and developer, the challenges and milestones
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="text-center py-20">
              <p className="text-muted-foreground">Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
