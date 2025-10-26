import Navigation from '../components/Navigation'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
              Contact
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate and create something amazing together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-light text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in new opportunities and creative collaborations. 
                  Whether you have a project in mind or just want to chat about design and 
                  development, I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="mailto:himanxusharmaa@gmail.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Mail size={20} />
                  <span>himanxusharmaa@gmail.com</span>
                </a>
                
                <a
                  href="https://github.com/Himanxusharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>github.com/Himanxusharma</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/himanshusharma08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Linkedin size={20} />
                  <span>linkedin.com/in/himanshusharma08</span>
                </a>
              </div>
            </div>
            
            {/* Contact Form Placeholder */}
            <div className="space-y-6">
              <h2 className="text-xl font-light text-foreground">Send a Message</h2>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 resize-none"
                  />
                </div>
                <button className="w-full px-6 py-3 bg-foreground text-background font-light hover:bg-primary transition-colors duration-200">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
