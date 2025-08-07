import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contato@seudominio.com",
      link: "mailto:contato@seudominio.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telefone",
      value: "+55 11 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@seuusuario",
      link: "https://github.com/seuusuario",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "/in/seuperfil",
      link: "https://linkedin.com/in/seuperfil",
      color: "hover:text-blue-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "Enviar mensagem",
      link: "https://wa.me/5511999999999",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato para discutirmos como posso contribuir para seu próximo projeto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-lg text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-white font-medium hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/20 pt-6 mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Redes Sociais
                  </h4>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                      >
                        <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                          {social.icon}
                        </div>
                        <div>
                          <p className="text-sm text-white/70">{social.label}</p>
                          <p className="font-medium">{social.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Pronto para começar?
                </h3>
                
                <p className="text-white/90 leading-relaxed mb-8">
                  Tenho experiência em desenvolver soluções personalizadas que atendem 
                  às necessidades específicas de cada projeto. Seja para criar uma nova 
                  aplicação do zero ou melhorar um sistema existente, posso ajudar a 
                  transformar suas ideias em realidade.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-white/90 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:contato@seudominio.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Enviar um Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    asChild
                  >
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
                
                <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-white/80 text-sm text-center">
                    <strong>Tempo de resposta:</strong> Normalmente respondo em até 24 horas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;