<h1>Node.js JWT Authentication REST API (TypeScript)</h1>

<p>This project is a RESTful API for authentication using JSON Web Tokens (JWT), developed with Node.js and TypeScript. It provides a foundational setup for implementing authentication in backend applications.</p>

<h2>Features</h2>

<h3>- User Registration:</h3> 
<p>Allows new users to sign up.</p>

<h3>- Login:</h3> 
<p>Authenticates users via email and password, generating a JWT.</p>

<h3>- Route Protection:</h3> 
<p>Secures routes by verifying tokens.</p>

<h3>- Token Renewal:</h3> 
<p>Supports token renewal to keep sessions active.</p>

<h2>Technologies Used</h2>

<h3>- Node.js:</h3> 
<p>JavaScript runtime for server-side programming.</p>

<h3>- TypeScript:</h3> 
<p>A statically typed superset of JavaScript.</p>

<h3>- Express:</h3> 
<p>Minimalist web framework for Node.js.</p>

<h3>- JWT (JSON Web Tokens):</h3> 
<p>Token-based authentication.</p>

<h3>- bcrypt:</h3> 
<p>For password hashing.</p>

<h2>Prerequisites</h2>

<p><strong>Node.js version 14 or higher</strong></p>
<p><strong>npm or yarn for package management</strong></p>

<h2>Installation</h2>

<h4>Step 1: Clone the Repository</h4>
<pre><code>git clone https://github.com/FedericoGoffi/node-auth-jwt-rest-typescript.git
cd node-auth-jwt-rest-typescript
</code></pre>

<h4>Step 2: Install Dependencies</h4>
<pre><code>npm install
# or if you use yarn
yarn install
</code></pre>

<h4>Step 3: Set up Environment Variables</h4>
<p>Create a <code>.env</code> file in the root of the project and add the following values:</p>
<pre><code>PORT=3000
JWT_SECRET=your_jwt_secret
</code></pre>

<h4>Step 4: Start the Server</h4>
<pre><code>npm run dev
# or
yarn dev
</code></pre>

<p>The server should now be running at <a href="http://localhost:3000">http://localhost:3000</a>.</p>

<h2>Usage</h2>

<p>Once the server is running, you can use tools like Postman or curl to interact with the API.</p>

<h3>Main Endpoints</h3>
<ul>
    <li><strong>POST /register</strong> - Registers a new user.</li>
    <li><strong>POST /login</strong> - Authenticates a user and returns a JWT.</li>
    <li><strong>GET /protected</strong> - Example of a protected route that requires a JWT token.</li>
</ul>

<h2>Project Structure</h2>

<pre><code>node-auth-jwt-rest-typescript/
├── src/
│   ├── controllers/   # Endpoint controllers
│   ├── middlewares/   # Authentication middleware
│   ├── models/        # Data models
│   ├── routes/        # Route definitions
│   ├── utils/         # Utilities and helpers
│   └── index.ts       # Main application entry point
├── .env.example       # Example configuration file
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
</code></pre>

<h2>Contributions</h2>
<p>Contributions are welcome!</p>
