// app/test-iframe/page.tsx (App Router)
// OR
// pages/test-iframe.tsx (Pages Router)

export default function TestIframe() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Pricing Calculator Iframe Test</h1>
      <p>Testing iframe embedding - check if it works in Safari</p>
      
      <iframe 
        src="https://binc-frontend.vercel.app/pricing-calculator/iframe"
        style={{
          width: '100%',
          height: '800px',
          border: '2px solid #ccc',
          borderRadius: '8px',
        }}
        title="Pricing Calculator"
    />
      
      <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Testing Checklist:</h3>
        <ul>
          <li>✅ Iframe loads</li>
          <li>✅ Can enter username</li>
          <li>✅ Fetch data button works</li>
          <li>✅ Calculate price works</li>
          <li>✅ Data saves to database</li>
        </ul>
      </div>
    </div>
  );
}