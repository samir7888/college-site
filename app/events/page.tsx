import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Science Fair 2024",
      date: "2024-04-15",
      time: "9:00 AM - 5:00 PM",
      location: "Main Campus Auditorium",
      category: "Academic",
      description:
        "Students will showcase their innovative science projects and experiments.",
      image:
        "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=500",
      attendees: "200+ Expected",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Career Guidance Workshop",
      date: "2024-04-20",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Hall",
      category: "Workshop",
      description:
        "Industry experts will guide students about career opportunities and job market trends.",
      image:
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500",
      attendees: "150+ Expected",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Inter-College Sports Tournament",
      date: "2024-04-25",
      time: "8:00 AM - 6:00 PM",
      location: "Sports Ground",
      category: "Sports",
      description:
        "Annual sports competition between different colleges with various sporting events.",
      image:
        "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=500",
      attendees: "500+ Expected",
      status: "upcoming",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Graduation Ceremony 2023",
      date: "2023-12-15",
      time: "10:00 AM - 2:00 PM",
      location: "Main Auditorium",
      category: "Academic",
      description:
        "Celebration of academic achievements with certificate distribution to graduates.",
      image:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=500",
      attendees: "300+ Attended",
      status: "completed",
    },
    {
      id: 5,
      title: "Cultural Festival 2023",
      date: "2023-11-20",
      time: "6:00 PM - 10:00 PM",
      location: "Campus Ground",
      category: "Cultural",
      description:
        "Students showcased their cultural talents through dance, music, and drama performances.",
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500",
      attendees: "400+ Attended",
      status: "completed",
    },
    {
      id: 6,
      title: "Tech Symposium 2023",
      date: "2023-10-10",
      time: "9:00 AM - 5:00 PM",
      location: "Computer Lab",
      category: "Technology",
      description:
        "Technology showcase and presentations by computer engineering students.",
      image:
        "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=500",
      attendees: "180+ Attended",
      status: "completed",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: "bg-blue-900 text-blue-200",
      Workshop: "bg-green-900 text-green-200",
      Sports: "bg-orange-900 text-orange-200",
      Cultural: "bg-purple-900 text-purple-200",
      Technology: "bg-indigo-900 text-indigo-200",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-900 text-gray-200"
    );
  };

  return (
    <div>
      <section className="min-h-[500px] text-white py-16 flex items-center justify-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: "cover", backgroundPosition: "top" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Calendar className="h-16 w-16 text-blue-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Events
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Stay updated with our upcoming events and explore highlights from
            past celebrations
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-mono font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Don&apos;t miss out on these exciting upcoming events at Western
              Mega College
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="group bg-gray-200 bg-opacity-80  hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    width={500}
                    height={300}
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">Upcoming</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-mono group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-800">{event.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-mono font-bold mb-4">Past Events</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Take a look at some of our successful past events and celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="group bg-gray-200 bg-opacity-80  hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                  width={500}
                  height={300}
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gray-500 text-white">Completed</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-mono group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700">{event.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-gray-600 hover:bg-gray-700 hover:text-gray-100"
                  >
                    View Gallery
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-black font-mono font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming events
            and important announcements
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
}
