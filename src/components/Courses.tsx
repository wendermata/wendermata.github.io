import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Award, Calendar } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Advanced React Patterns",
      provider: "Frontend Masters",
      duration: "40 hours",
      year: "2023",
      status: "Completed",
      description: "Advanced React patterns including render props, compound components, higher-order components, and custom hooks.",
      skills: ["React", "TypeScript", "Performance", "Design Patterns"],
      category: "Frontend"
    },
    {
      title: "Node.js: The Complete Guide",
      provider: "Udemy",
      duration: "60 hours",
      year: "2023",
      status: "Completed",
      description: "Complete Node.js course covering Express, MongoDB, authentication, RESTful APIs, and GraphQL.",
      skills: ["Node.js", "Express", "MongoDB", "GraphQL", "JWT"],
      category: "Backend"
    },
    {
      title: "AWS Solutions Architect",
      provider: "AWS Training",
      duration: "80 hours",
      year: "2022",
      status: "Certified",
      description: "AWS solutions architecture, including EC2, S3, RDS, Lambda, and networking services.",
      skills: ["AWS", "Cloud Computing", "Architecture", "DevOps"],
      category: "Cloud"
    },
    {
      title: "Machine Learning Fundamentals",
      provider: "Coursera - Stanford",
      duration: "50 hours",
      year: "2022",
      status: "Completed",
      description: "Machine learning fundamentals, classification algorithms, regression, and neural networks.",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Science"],
      category: "AI/ML"
    },
    {
      title: "Docker & Kubernetes",
      provider: "Linux Academy",
      duration: "35 hours",
      year: "2021",
      status: "Certified",
      description: "Containerization with Docker and orchestration with Kubernetes for production applications.",
      skills: ["Docker", "Kubernetes", "DevOps", "Microservices"],
      category: "DevOps"
    },
    {
      title: "PostgreSQL Advanced",
      provider: "Pluralsight",
      duration: "25 hours",
      year: "2021",
      status: "Completed",
      description: "Advanced PostgreSQL administration, query optimization, and data modeling.",
      skills: ["PostgreSQL", "Database", "Performance", "SQL"],
      category: "Database"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Frontend": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      "Backend": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      "Cloud": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      "AI/ML": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
      "DevOps": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
      "Database": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
    };
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
  };

  const getStatusColor = (status: string) => {
    return status === "Certified" 
      ? "bg-accent/20 text-accent border-accent/20" 
      : "bg-primary/20 text-primary border-primary/20";
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Courses & Specializations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous investment in knowledge through specialized courses and certifications 
            to stay updated with the latest market technologies.
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
                    {course.status === "Certified" && <Award className="w-3 h-3 mr-1" />}
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
              Continuous Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe that learning is a continuous process. I am always seeking new 
              knowledge and opportunities to develop professionally. Currently, 
              I am studying serverless architectures and mobile development with React Native.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;