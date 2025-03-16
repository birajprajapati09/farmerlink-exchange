
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Lock, Mail, MapPin, Home } from "lucide-react";

// Define schemas for form validation
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const registerSchema = z.object({
  role: z.enum(["farmer", "consumer"], {
    required_error: "Please select a role",
  }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  farmName: z.string().optional(),
  location: z.string().min(2, { message: "Location is required" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

const Auth = () => {
  const [userRole, setUserRole] = useState<"farmer" | "consumer">("consumer");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Login form
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  // Register form
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "consumer",
      name: "",
      email: "",
      password: "",
      farmName: "",
      location: "",
    }
  });

  // Handle login submission
  const onLoginSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      console.log("Login data:", data);
      // Here you would typically connect to an authentication service
      
      toast({
        title: "Login Successful",
        description: "Welcome back to FarmerLink!",
      });
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle register submission
  const onRegisterSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    try {
      console.log("Register data:", data);
      // Here you would typically connect to an authentication service
      
      toast({
        title: "Account Created",
        description: "Welcome to FarmerLink! Your account has been created successfully.",
      });
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "There was an error creating your account. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sage-50 to-stone-100">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-700">Welcome to FarmerLink</h2>
            <p className="mt-2 text-sage-600">Connect with local farmers and fresh produce</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-6 bg-sage-100">
              <TabsTrigger value="login" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700">Login</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card className="border-sage-200 bg-white/80 backdrop-blur-sm shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-amber-600">Login to your account</CardTitle>
                  <CardDescription className="text-sage-600">
                    Enter your email and password to access your account
                  </CardDescription>
                </CardHeader>
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
                    <CardContent className="space-y-5 pt-4">
                      <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sage-700">Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-sage-500" />
                                <Input placeholder="your@email.com" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-sage-700">Password</FormLabel>
                          <Link to="/forgot-password" className="text-sm text-amber-600 hover:text-amber-700">
                            Forgot password?
                          </Link>
                        </div>
                        <FormField
                          control={loginForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="relative">
                                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-sage-500" />
                                  <Input type="password" className="pl-10" {...field} />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-amber-600 hover:bg-amber-700"
                        disabled={isLoading}
                      >
                        {isLoading ? "Logging in..." : "Login"}
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card className="border-sage-200 bg-white/80 backdrop-blur-sm shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-amber-600">Create an account</CardTitle>
                  <CardDescription className="text-sage-600">
                    Join FarmerLink to connect with local producers
                  </CardDescription>
                </CardHeader>
                <Form {...registerForm}>
                  <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)}>
                    <CardContent className="space-y-4 pt-4">
                      <FormField
                        control={registerForm.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-sage-700">I am a</FormLabel>
                            <FormControl>
                              <RadioGroup 
                                value={field.value} 
                                onValueChange={(value) => {
                                  field.onChange(value);
                                  setUserRole(value as "farmer" | "consumer");
                                }}
                                className="flex space-x-4"
                              >
                                <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-sage-50 border border-sage-200">
                                  <RadioGroupItem value="consumer" id="consumer" className="text-amber-600" />
                                  <Label htmlFor="consumer" className="cursor-pointer">Consumer</Label>
                                </div>
                                <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-sage-50 border border-sage-200">
                                  <RadioGroupItem value="farmer" id="farmer" className="text-amber-600" />
                                  <Label htmlFor="farmer" className="cursor-pointer">Farmer</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sage-700">Full Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-2.5 h-5 w-5 text-sage-500" />
                                <Input placeholder="Your full name" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sage-700">Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-sage-500" />
                                <Input type="email" placeholder="your@email.com" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sage-700">Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-sage-500" />
                                <Input type="password" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {userRole === "farmer" && (
                        <FormField
                          control={registerForm.control}
                          name="farmName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sage-700">Farm Name</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Home className="absolute left-3 top-2.5 h-5 w-5 text-sage-500" />
                                  <Input placeholder="Your farm name" className="pl-10" {...field} />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      
                      <FormField
                        control={registerForm.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sage-700">Location</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-sage-500" />
                                <Input placeholder="Your city" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-amber-600 hover:bg-amber-700"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Auth;
