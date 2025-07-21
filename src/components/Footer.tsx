import { Github, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img
              src="/lovable-uploads/18308840-e4d1-44a9-9087-dc72d337f14c.png"
              alt="Laika Bot"
              className="h-8 w-8 rounded-full opacity-80"
            />
            <div>
              <span className="text-lg font-space font-bold text-gradient-primary">
                Laika Media
              </span>
              <p className="text-sm text-muted-foreground">
                © 2025 Laika Media. All rights reserved.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex items-center space-x-6 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;