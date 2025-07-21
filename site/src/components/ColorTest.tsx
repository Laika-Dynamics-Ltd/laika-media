export default function ColorTest() {
  return (
    <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border">
      <h3 className="text-sm font-bold mb-2">Color Test</h3>
      <div className="space-y-2">
        <div className="w-8 h-8 bg-primary-600 rounded"></div>
        <div className="w-8 h-8 bg-secondary-600 rounded"></div>
        <div className="w-8 h-8 bg-accent-600 rounded"></div>
        <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded"></div>
      </div>
    </div>
  );
} 