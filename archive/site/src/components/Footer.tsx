import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Image src="/laika-bot.png" alt="Laika Bot" width={32} height={32} />
            <p className="text-neutral-400">&copy; {new Date().getFullYear()} Laika Media. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 