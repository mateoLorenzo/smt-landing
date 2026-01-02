"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const ContactUs = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center snap-start bg-white py-20"
      id="contact"
    >
      <div className="max-w-[700px] mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-[#38777C] mb-4 font-medium">
            CONTACT US
          </p>
          <h2 className="text-5xl md:text-4xl font-normal text-[#0a3041] tracking-[-2px]">
            Let&apos;s create the future
          </h2>
        </div>

        {/* Contact Form */}
        <form className="space-y-8">
          {/* First Name */}
          <div className="space-y-3">
            <Label
              htmlFor="firstName"
              className="text-[#0a3041] text-base font-normal"
            >
              Your first name
            </Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              className="h-12 px-4 text-sm rounded-lg border-gray-200 focus-visible:ring-[#38777C]"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-3">
            <Label
              htmlFor="lastName"
              className="text-[#0a3041] text-base font-normal"
            >
              Your last name
            </Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              className="h-12 px-4 text-sm rounded-lg border-gray-200 focus-visible:ring-[#38777C]"
            />
          </div>

          {/* Message */}
          <div className="space-y-3">
            <Label
              htmlFor="message"
              className="text-[#0a3041] text-base font-normal"
            >
              Your message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about what you want to build"
              className="px-4 py-3 text-sm rounded-lg border-gray-200 resize-none focus-visible:ring-[#38777C]"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-[#0a3041] text-white rounded-lg text-sm font-medium hover:bg-[#0a4051] transition-all duration-200 cursor-pointer hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              console.log("Form submitted");
            }}
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
};
