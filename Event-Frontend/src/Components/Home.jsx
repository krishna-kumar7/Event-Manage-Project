import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const venues = [
  {
    name: "Hotel Saket",
    rating: 4.7,
    reviews: 545,
    location: "Civil Lines",
    image: "/images/hotel-saket.jpg",
  },
  {
    name: "Sangam Castle",
    rating: 4.6,
    reviews: 387,
    location: "Civil Lines",
    image: "/images/sangam-castle.jpg",
  },
  {
    name: "Divine Vatika",
    rating: 4.6,
    reviews: 374,
    location: "Civil Lines",
    image: "/images/divine-vatika.jpg",
  },
  {
    name: "Palms Resort",
    rating: 4.5,
    reviews: 347,
    location: "Civil Lines",
    image: "/images/palms-resort.jpg",
  },
  {
    name: "Om Sai Resort",
    rating: 4.4,
    reviews: 345,
    location: "Civil Lines",
    image: "/images/om-sai-resort.jpg",
  },
];

const EventPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-3xl font-bold text-red-500">aayojan</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700">Wedding</a>
          <a href="#" className="text-red-500 font-semibold">Parties</a>
          <a href="#" className="text-gray-700">Meetups</a>
          <a href="#" className="text-gray-700">Seminars</a>
          <a href="#" className="text-gray-700">About Us</a>
          <a href="#" className="text-gray-700">Contact Us</a>
        </nav>
        <Button className="bg-red-500 text-white">Plan Your Event</Button>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="/images/party-hero.jpg"
          alt="Party Hero"
          className="w-full h-[600px] object-cover"
        />
      </section>

      {/* Venue Cards */}
      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {venues.map((venue, index) => (
          <Card key={index} className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{venue.name}</h2>
              <p className="text-sm text-gray-600 mb-4">
                ⭐ {venue.rating} ({venue.reviews}) - {venue.location}
              </p>
              <Button className="bg-red-500 w-full">Check In</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="p-10 bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            {[
              "Social Events",
              "Corporate Events",
              "Entertainment Events",
              "Educational Events",
              "Non-Profit Events",
              "Sporting Events",
              "Cultural & Art Events",
              "Religious & Spiritual Events",
              "Trade & Industries Events",
              "Community & Civic Events",
            ].map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Address</h3>
          <p>RK UNIVERSITY, RAJKOT, GUJRAT</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Get in Touch</h3>
          <Input placeholder="Name" className="mb-4" />
          <Input placeholder="E-mail" className="mb-4" />
          <Input placeholder="Message" className="mb-4" />
          <Button className="bg-red-500 w-full">Submit</Button>
        </div>
      </footer>
    </div>
  );
};

export default EventPage;
