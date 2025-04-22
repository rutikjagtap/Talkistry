import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { auth } from "@/firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password: string) => password.length >= 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email address");
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    try {
      // Firebase Sign-up
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
      navigate("/login"); // Redirect to login page
    } catch (error: any) {
      toast.error(error.message || "Signup failed, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left panel - Image */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-bl from-indigo-50 to-blue-100 animate-slide-in">
        <div className="h-full flex items-center justify-center p-8">
          <div className="glass-panel p-8 max-w-md">
            <div className="shimmer rounded-xl overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="Student with laptop" 
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
            <p className="text-muted-foreground mb-4">
              Connect with thousands of students, access exclusive resources, and enhance your learning experience.
            </p>
          </div>
        </div>
      </div>

      {/* Right panel - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 animate-fade-in">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Create an account</h1>
            <p className="text-muted-foreground">Join our student platform today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-input-wrapper">
              <div className="relative">
                <User className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text"
                  placeholder="Full name"
                  className="form-input pl-12"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-input-wrapper">
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="email"
                  placeholder="Email address"
                  className="form-input pl-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-input-wrapper">
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="password"
                  placeholder="Password"
                  className="form-input pl-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Password must be at least 8 characters long
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full py-3 h-12 animated-button bg-primary hover:bg-primary/90 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
              ) : (
                <>
                  Create Account <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>

            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
