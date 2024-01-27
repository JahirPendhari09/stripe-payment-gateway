
  <h1>Stripe Payment Gateway</h1>
   <p>Welcome to the Stripe Payment API Server documentation. This server is built using Express.js to handle payments using the Stripe API.</p>

   <h2>Deployed API:</h2>
    <p><a href="https://payment-gatway-qwpa.onrender.com/" target="_blank">https://payment-gatway-qwpa.onrender.com/</a></p>

  <h2>Prerequisites</h2>
    <p>Before running the server, ensure you have set up your environment variables by creating a <code>.env</code> file and adding your Stripe secret key:</p>

  <pre><code>SECRET_KEY = your_stripe_secret_key</code></pre>
  <pre><code> PORT = your port_number</code></pre>
  

  <h2>Installation</h2>
    <p>Follow these steps to set up and run the server:</p>

   <pre><code>npm install</code></pre>
   <pre><code>node index.js</code></pre>
   
   <hr>

   <h2>Endpoints</h2>
   <h3>Create Payment Intent</h3>
   <li>Create a payment intent in Indian Rupees.</li>
   <pre><code>POST /v1/create_intent</code></pre>

   <h3>Capture Payment Intent</h3>
   <li>Capture a payment intent with the specified ID.</li>
   <pre><code>POST /v1/capture_intent/:id</code></pre>
  
   <h3>Create Refund</h3>
   <li>Create a refund for a payment intent with the specified ID.</li>
   <pre><code>POST /v1/create_refund/:id</code></pre>

   <h3>Get Payment Intents</h3>
   <li>Get a list of payment intents.</li>
   <pre><code>GET /v1/get_intents</code></pre>
  
   <h2>Usage</h2>
   <p>Feel free to explore and integrate these endpoints into your application for handling payments using the Stripe API.</p>
   <p>For more information about the Stripe API, refer to the <a href="https://stripe.com/docs" target="_blank">Stripe Documentation</a>.</p>
   <hr>
  
   <p><strong>Note:</strong> Replace <code>your_stripe_secret_key</code> and other placeholders with actual values before using the server in production.</p>

