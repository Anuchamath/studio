
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="py-12 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-headline text-primary mb-4">Swarna Panhida</h3>
            <p className="text-muted-foreground">Innovate. Create. Inspire.</p>
          </div>
          <div>
            <h4 className="text-lg font-headline text-primary mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@swarnapanhida.com" className="hover:text-primary transition-colors">info@swarnapanhida.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-headline text-primary mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Swarna Panhida. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
