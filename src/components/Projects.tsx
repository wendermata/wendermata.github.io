import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "Complete e-commerce platform with admin panel, payment system, and inventory management. Developed with modern and scalable architecture.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/user/ecommerce-platform",
      demo: "https://demo-ecommerce.com",
      stars: 128,
      forks: 34,
      featured: true
    },
    {
      name: "Task Management App",
      description: "Task management application with real-time collaboration, push notifications, and external calendar integration.",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      github: "https://github.com/user/task-manager",
      demo: "https://task-app-demo.com",
      stars: 85,
      forks: 22
    },
    {
      name: "Weather Dashboard",
      description: "Weather dashboard with detailed forecasts, interactive maps, and personalized alerts. Responsive and modern interface.",
      technologies: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"],
      github: "https://github.com/user/weather-dashboard",
      demo: "https://weather-demo.com",
      stars: 67,
      forks: 18
    },
    {
      name: "Blog CMS",
      description: "Content management system for blogs with rich text editor, comment system, and SEO optimization.",
      technologies: ["Next.js", "Markdown", "Tailwind CSS", "Vercel"],
      github: "https://github.com/user/blog-cms",
      demo: "https://blog-cms-demo.com",
      stars: 45,
      forks: 12
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            GitHub Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of my most relevant projects, demonstrating different technologies 
            and development approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-0 shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-accent/10 text-accent border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/20 text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 text-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View all projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;