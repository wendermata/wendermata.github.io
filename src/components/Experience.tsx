import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading the development of scalable web applications using React, Node.js, and AWS. Implemented microservices architectures that reduced API response time by 40%.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
    },
    {
      company: "Innovative Startup",
      position: "Frontend Developer",
      period: "2020 - 2022",
      location: "Remote",
      description: "Built a SaaS platform from scratch serving over 10,000 users. Created reusable components and implemented automated testing.",
      technologies: ["React", "JavaScript", "Sass", "Jest", "Cypress", "Firebase"]
    },
    {
      company: "Creative Digital Agency",
      position: "Web Developer",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Created responsive and optimized websites for various clients. Focused on performance and SEO, achieving 95+ scores on PageSpeed Insights.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey built with dedication, continuous learning, and challenging projects 
            that contributed to my professional growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-hover transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Building className="w-5 h-5" />
                      <span className="font-medium text-lg">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;