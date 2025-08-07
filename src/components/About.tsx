import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Users, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Desenvolvimento",
      description: "Especialista em tecnologias modernas como React, Node.js, TypeScript e cloud computing"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Focado em criar aplicações rápidas, escaláveis e com excelente experiência do usuário"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Colaboração",
      description: "Experiência em trabalho em equipe, metodologias ágeis e liderança técnica"
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: "Dedicação",
      description: "Apaixonado por tecnologia e sempre em busca de aprender novas ferramentas e metodologias"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou um desenvolvedor apaixonado por criar soluções tecnológicas que fazem a diferença. 
            Com anos de experiência no mercado, tenho me dedicado a entregar projetos de alta qualidade 
            e a estar sempre atualizado com as últimas tendências do desenvolvimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Minha Jornada
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Iniciei minha carreira em desenvolvimento há mais de 5 anos, sempre com foco 
                    em tecnologias web modernas. Durante esse período, tive a oportunidade de 
                    trabalhar em projetos desafiadores e com equipes multidisciplinares.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Atualmente, atuo como desenvolvedor full stack, contribuindo para o 
                    crescimento de empresas através de soluções tecnológicas inovadoras e 
                    processos de desenvolvimento eficientes.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                    <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS, Next.js</p>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Backend</h4>
                    <p className="text-sm text-muted-foreground">Node.js, Express, PostgreSQL, MongoDB</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">DevOps</h4>
                    <p className="text-sm text-muted-foreground">Docker, AWS, CI/CD, Git</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;