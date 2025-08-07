import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal de São Paulo",
      period: "2015 - 2019",
      description: "Formação sólida em algoritmos, estruturas de dados, engenharia de software e desenvolvimento de sistemas. Participei de projetos de pesquisa em inteligência artificial.",
      highlights: ["Projeto Final: Sistema de Recomendação usando Machine Learning", "Monitor de Programação Orientada a Objetos"]
    },
    {
      degree: "Técnico em Informática",
      institution: "ETEC de São Paulo",
      period: "2013 - 2015",
      description: "Base técnica em programação, redes de computadores e desenvolvimento web. Primeiro contato com linguagens de programação e conceitos fundamentais.",
      highlights: ["Melhor projeto de TCC da turma", "Desenvolveu sistema web para gestão escolar"]
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", year: "2023" },
    { name: "React Advanced Patterns", year: "2022" },
    { name: "Node.js Professional", year: "2022" },
    { name: "Scrum Master Certified", year: "2021" },
    { name: "Google Analytics Certified", year: "2021" }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Formação Acadêmica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Base educacional sólida complementada por certificações e aprendizado contínuo 
            para estar sempre atualizado com as tecnologias do mercado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-0 shadow-elegant hover:shadow-hover transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <GraduationCap className="w-5 h-5" />
                        <span className="font-medium text-lg">{edu.institution}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Destaques:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Certificações e Cursos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors"
                  >
                    <h4 className="font-medium text-foreground mb-1">{cert.name}</h4>
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;