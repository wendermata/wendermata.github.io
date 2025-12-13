import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Mottu Company",
      position: "Sr. Software Engineer",
      period: "2024 - Present",
      location: "São Paulo, SP - Brazil",
      description: "Working on backend development for the Warehouse Inventory team, focusing on optimizing stock control, system integrations, and data flow reliability. Collaborating to solve divergences in stock management and enhance overall system performance.",
      technologies: [".NET", "C#", "AWS", "PostgreSQL", "MongoDB", "Docker", "RabbitMQ", "Pub/Sub"]
    },
    {
      company: "XP Inc.",
      position: "Software Engineer",
      period: "2023 - 2024",
      location: "Remote",
      description: "Developing new solutions using best practices such as Clean Architecture and SOLID principles. Working on microservices-based development, utilizing Redis for caching and Kafka for messaging. Experience with MongoDB and configuring and adjusting CI/CD pipelines using Terraform.",
      technologies: ["NET", "MongoDB", "Kafka", "C#", "Azure DevOps", "Redis", "Terraform"]
    },
    {
      company: "Itaú Unibanco",
      position: "Jr. Software Engineer",
      period: "2021 - 2023",
      location: "São Paulo, SP - Brazil",
      description: "Maintaining legacy projects using .NET Full Framework. Expertise in managing ORACLE and MSSQL databases. Responsible for adjusting and optimizing batch routines. Working with Cloud technologies (AWS), including the creation and maintenance of Lambdas, EC2, and RDS. Skilled in ensuring service continuity and operational efficiency of systems.",
      technologies: [".NET", "C#", "VB.NET", "WCF", "Oracle DB", "MSSQL", "AWS", "Python"]
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