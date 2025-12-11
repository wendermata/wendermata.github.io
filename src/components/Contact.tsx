import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "wender.mata@live.com",
      link: "mailto:wender.mata@live.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+55 (11) 99199-4171",
      link: "tel:+5511991994171"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "São Paulo, SP - Brazil",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@wendermata",
      link: "https://github.com/wendermata",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "/in/wendermata",
      link: "https://linkedin.com/in/wendermata",
      color: "hover:text-blue-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "Send message",
      link: "https://wa.me/5511991994171",
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
            Let's Talk?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            I am always open to new opportunities and interesting projects. 
            Get in touch to discuss how I can contribute to your next project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
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
                    Social Media
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
                  Ready to get started?
                </h3>
                
                <p className="text-white/90 leading-relaxed mb-8">
                  I have experience developing customized solutions that meet 
                  the specific needs of each project. Whether creating a new 
                  application from scratch or improving an existing system, I can help 
                  transform your ideas into reality.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@yourdomain.com"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                    Send an Email
                  </a>
                  
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
                
                <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-white/80 text-sm text-center">
                    <strong>Response time:</strong> I usually respond within 24 hours
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