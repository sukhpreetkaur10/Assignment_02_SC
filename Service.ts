import express, { Request, Response } from 'express';

const router = express.Router();

// Example: Insecure handling of user input
router.get('/greet', (req: Request, res: Response) => {
  const name = req.query.name;
  res.send(<h1>Hello, ${name}</h1>); //  Vulnerable to XSS
});

// Safe version (escape output)
router.get('/safe-greet', (req: Request, res: Response) => {
  const name = req.query.name as string;
  const safeName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  res.send(<h1>Hello, ${safeName}</h1>); // Safer
});

export default router;
