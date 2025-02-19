# Duolingo Clone

This project is a clone of Duolingo, built using modern web technologies. It features a comprehensive set of functionalities including an admin dashboard, Stripe integration for premium features, and SSO authentication with Google.

## Features

- **Frontend**: Next.js, TypeScript, TailwindCSS, ShadCN UI
- **Backend**: Drizzle, Neon (PostgreSQL)
- **State Management**: Zustand
- **HTTP Requests**: Axios
- **Admin Dashboard**: `react-admin`
- **Payments**: Stripe integration
- **Authentication**: Google SSO

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RikhiSingh/Duolingo-Clone.git
   cd Duolingo-Clone
   
2. **Install Dependencies**
   ```bash
   npm install
   
3. **Set up environment variables** <br/>
   Create a .env file in the root directory and add the necessary environment variables.
   *Namely*
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY 
   CLERK_SECRET_KEY 
   DATABASE_URL
   STRIPE_API_KEY
   NEXT_PUBLIC_APP_URL
   STRIPE_WEBHOOK_SECRET

4. **Run the development server**
   ```bash
   npm run dev

5. **Access the Application** <br />
   Open http://localhost:3000 in your browser.

## License
This project is licensed under the MIT License.

```Note: I chose the MIT License because it is a permissive open source license that allows others to freely use, modify, and distribute the code with minimal restrictions.```

## Usage
- Register or log in using Google SSO.
- Explore language courses and track your progress.
- Admins can manage content through the admin dashboard.
- Upgrade to premium for additional features using Stripe.
  
## Contributing <br />
Contributions are welcome! Please follow these steps: <br />

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your branch.
5. Open a pull request.
