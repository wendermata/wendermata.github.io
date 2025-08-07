import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Award, Calendar } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Advanced React Patterns",
      provider: "Frontend Masters",
      duration: "40 horas",
      year: "2023",
      status: "Concluído",
      description: "Padrões avançados de React incluindo render props, compound components, higher-order components e hooks customizados.",
      skills: ["React", "TypeScript", "Performance", "Design Patterns"],
      category: "Frontend"
    },
    {
      title: "Node.js: The Complete Guide",
      provider: "Udemy",
      duration: "60 horas",
      year: "2023",
      status: "Concluído",
      description: "Curso completo de Node.js cobrindo Express, MongoDB, autenticação, APIs RESTful e GraphQL.",
      skills: ["Node.js", "Express", "MongoDB", "GraphQL", "JWT"],
      category: "Backend"
    },
    {
      title: "AWS Solutions Architect",
      provider: "AWS Training",
      duration: "80 horas",
      year: "2022",
      status: "Certificado",
      description: "Arquitetura de soluções na AWS, incluindo EC2, S3, RDS, Lambda e serviços de networking.",
      skills: ["AWS", "Cloud Computing", "Architecture", "DevOps"],
      category: "Cloud"
    },
    {
      title: "Machine Learning Fundamentals",
      provider: "Coursera - Stanford",
      duration: "50 horas",
      year: "2022",
      status: "Concluído",
      description: "Fundamentos de machine learning, algoritmos de classificação, regressão e redes neurais.",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Science"],
      category: "AI/ML"
    },
    {
      title: "Docker & Kubernetes",
      provider: "Linux Academy",
      duration: "35 horas",
      year: "2021",
      status: "Certificado",
      description: "Containerização com Docker e orquestração com Kubernetes para aplicações em produção.",
      skills: ["Docker", "Kubernetes", "DevOps", "Microservices"],
      category: "DevOps"
    },
    {
      title: "PostgreSQL Advanced",
      provider: "Pluralsight",
      duration: "25 horas",
      year: "2021",
      status: "Concluído",
      description: "Administração avançada de PostgreSQL, otimização de queries e modelagem de dados.",
      skills: ["PostgreSQL", "Database", "Performance", "SQL"],
      category: "Database"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Frontend": "bg-blue-100 text-blue-800",
      "Backend": "bg-green-100 text-green-800",
      "Cloud": "bg-purple-100 text-purple-800",
      "AI/ML": "bg-orange-100 text-orange-800",
      "DevOps": "bg-red-100 text-red-800",
      "Database": "bg-indigo-100 text-indigo-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status: string) => {
    return status === "Certificado" 
      ? "bg-accent/20 text-accent border-accent/20" 
      : "bg-primary/20 text-primary border-primary/20";
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cursos e Especializações
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Investimento contínuo em conhecimento através de cursos especializados e certificações 
            para manter-me atualizado com as tecnologias mais recentes do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant="secondary"
                    className={getCategoryColor(course.category)}
                  >
                    {course.category}
                  </Badge>
                  <Badge 
                    variant="outline"
                    className={getStatusColor(course.status)}
                  >
                    {course.status === "Certificado" && <Award className="w-3 h-3 mr-1" />}
                    {course.status}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-2 text-primary mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-medium">{course.provider}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{course.year}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-muted text-muted-foreground border-0 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-card rounded-lg p-8 max-w-2xl mx-auto shadow-elegant">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Aprendizado Contínuo
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Acredito que o aprendizado é um processo contínuo. Estou sempre em busca de novos 
              conhecimentos e oportunidades para me desenvolver profissionalmente. Atualmente, 
              estou estudando sobre arquiteturas serverless e desenvolvimento mobile com React Native.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;