"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white py-20">
        {/* Animated Dot Pattern Background */}
        <AnimatedDotPattern className="opacity-40" />

        <div className="relative z-10 w-full max-w-md px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-light tracking-tight text-gray-900">
                Client Portal
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Access your institutional dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-4 text-sm transition focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="your.email@institution.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-4 text-sm transition focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Sign In
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-center text-sm text-gray-600">
                Don't have access?{" "}
                <a href="/contact" className="font-medium text-gray-900 hover:text-gray-700">
                  Request institutional access
                </a>
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs text-gray-500">
                <strong className="text-gray-700">Security Notice:</strong> This portal is exclusively for
                qualified institutional investors and authorized personnel. All access is monitored and logged.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
