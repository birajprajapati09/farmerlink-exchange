
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Auth = () => {
  const [userRole, setUserRole] = useState<"farmer" | "consumer">("consumer");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-stone-900">Welcome to FarmerLink</h2>
            <p className="mt-2 text-stone-600">Sign in or create an account to continue</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                    Enter your email and password to login
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Login</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>
                    Enter your details to create an account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>I am a</Label>
                    <RadioGroup 
                      defaultValue="consumer" 
                      className="flex space-x-4"
                      onValueChange={(value) => setUserRole(value as "farmer" | "consumer")}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="consumer" id="consumer" />
                        <Label htmlFor="consumer">Consumer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="farmer" id="farmer" />
                        <Label htmlFor="farmer">Farmer</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-register">Email</Label>
                    <Input id="email-register" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-register">Password</Label>
                    <Input id="password-register" type="password" />
                  </div>
                  {userRole === "farmer" && (
                    <div className="space-y-2">
                      <Label htmlFor="farm-name">Farm Name</Label>
                      <Input id="farm-name" placeholder="Your farm name" />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Your city" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Create Account</Button>
                </CardFooter>
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
