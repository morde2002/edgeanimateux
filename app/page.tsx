"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Award,
  Target,
  Check,
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackToTopButton } from "@/components/back-to-top"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedCounter } from "@/components/animated-counter"
import { submitContactForm } from "@/lib/actions"

// Services data for Xelerated Tech
const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "SEO Integration"],
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android Apps", "Cross-Platform Development", "UI/UX Design", "App Store Optimization"],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Comprehensive digital transformation strategies to accelerate your business growth.",
    features: ["Digital Consulting", "Technology Roadmaps", "Process Automation", "Digital Marketing"],
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services to power your digital transformation.",
    features: ["Cloud Migration", "Infrastructure Setup", "DevOps Implementation", "Security & Compliance"],
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive digital experiences.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: Award,
    title: "Consulting Services",
    description: "Expert technology consulting to help you make informed decisions and optimize operations.",
    features: ["Technology Assessment", "Architecture Planning", "Team Training", "Project Management"],
    gradient: "from-indigo-500 to-indigo-600",
  },
]

// Portfolio items for Xelerated Tech
const portfolioItems = [
  {
    title: "Hisia Youth Website",
    description: "Community-focused platform for Hisia Youth Guiding and Counselling CBO, empowering youth development and mentorship programs in Likoni sub-county.",
    image: "/images/hisia-youth.png",
    category: "Non-Profit Website",
    technologies: ["Next.js", "React", "Tailwind CSS", "CMS"],
    url: "https://hisiayouth.org",
    gradient: "from-green-500 to-green-600",
  },
  {
    title: "Baraka Mining Portal",
    description: "Professional mining company website showcasing sustainable gem mining operations and rare mineral exploration services across Kenya.",
    image: "/images/baraka-mining.png",
    category: "Business Website",
    technologies: ["React", "Node.js", "MongoDB", "Responsive Design"],
    url: "https://barakaminingltd.co.ke",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Harun Floor Trading Platform",
    description: "Comprehensive Forex trading education platform providing complete trading courses and mentorship programs for aspiring traders.",
    image: "/images/harun-floor.png",
    category: "Educational Platform",
    technologies: ["Vue.js", "Express.js", "MySQL", "Payment Integration"],
    url: "https://harunfloor.com",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "Airbnb Clone Application",
    description: "Full-featured vacation rental platform with property listings, booking system, user authentication, and seamless payment processing.",
    image: "/images/airbnb.png",
    category: "Web Application",
    technologies: ["Next.js", "MongoDB", "Prisma", "NextAuth"],
    url: "https://airbnb-roomrho.vercel.app/",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    title: "Construction Company Website",
    description: "Professional construction business website featuring project galleries, service portfolios, and client testimonials with modern responsive design.",
    image: "/images/construction.png",
    category: "Corporate Website",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    url: "https://construction-website254.vercel.app/",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    title: "Safaris Adventure Platform",
    description: "Comprehensive road transport and safari booking platform offering celebration packages, adventure tours, and customized travel solutions.",
    image: "/images/safaris-adventure.png",
    category: "Travel & Tourism",
    technologies: ["Next.js", "React", "Stripe", "Google Maps API"],
    url: "https://safaris-adventure.vercel.app/",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern developer portfolio showcasing skills, projects, and professional experience with interactive animations and responsive design.",
    image: "/images/portfolio.png",
    category: "Portfolio Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    url: "https://morde2002.github.io/mordecaiportfolio.github.io/",
    gradient: "from-indigo-500 to-indigo-600",
  },
]

// Testimonials for Xelerated Tech
const testimonials = [
  {
    name: "Salma Ali",
    company: "Hisia Youth Guiding and Counselling CBO",
    content:
      "Xelerated Tech created an amazing platform that perfectly captures our mission of empowering youth in Likoni sub-county. The website has significantly increased our reach and helped us connect with more young people who need our guidance and mentorship programs.",
    rating: 5,
    gradient: "from-green-500 to-green-600",
  },
  {
    name: "Liz Wanjiru",
    company: "Baraka Mining Ltd",
    content:
      "The team at Xelerated Tech delivered a professional website that perfectly showcases our sustainable gem mining operations. Their attention to detail in representing our rare mineral exploration services has helped us establish credibility with international clients.",
    rating: 5,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Victor",
    role: "CEO & Founder",
    company: "Safaris Adventure",
    content:
      "Working with Xelerated Tech was exceptional. They built us a comprehensive platform that handles our road transport bookings, safari packages, and celebration tours seamlessly. Our bookings have increased by 200% since the platform launch.",
    rating: 5,
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Harun ",
    role: "Founder",
    company: "Harun Floor Trading",
    content:
      "Xelerated Tech transformed our Forex education business with an outstanding platform. The course delivery system and mentorship features they built have helped us reach hundreds of aspiring traders across Kenya.",
    rating: 5,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Kevin Mwangi",
    role: "Project Manager",
    company: "Jenwa Construction Ltd",
    content:
      "The construction website Xelerated Tech built for us is simply outstanding. The project galleries and service portfolios are beautifully presented, and we've seen a 150% increase in client inquiries since the launch.",
    rating: 5,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    name: "Faith Njeri",
    role: "Tech Entrepreneur",
    company: "Independent Developer",
    content:
      "Xelerated Tech's work on web applications is impressive. Their Airbnb clone demonstration shows their capability to build complex systems with user authentication, booking systems, and payment processing. Truly professional work.",
    rating: 5,
    gradient: "from-pink-500 to-pink-600",
  },
  {
    name: "Daniel Kipchoge",
    role: "Digital Marketing Consultant",
    company: "Tech Hub",
    content:
      "I've seen many portfolio websites, but Xelerated Tech's approach to creating modern, interactive portfolios sets them apart. Their use of animations and responsive design creates truly engaging user experiences.",
    rating: 5,
    gradient: "from-indigo-500 to-indigo-600",
  },
]

// FAQ data
const faqs = [
  {
    question: "What services does Xelerated Tech offer?",
    answer:
      "We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, cloud solutions, digital strategy consulting, and technology consulting services.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications or mobile apps can take 2-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally. This includes security updates, performance monitoring, and feature enhancements.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies including React, Next.js, Vue.js, Node.js, Python, React Native, Flutter, AWS, Google Cloud, and many others. We choose the best technology stack for each project's specific requirements.",
  },
  {
    question: "Can you help with digital transformation?",
    answer:
      "We specialize in digital transformation strategies, helping businesses modernize their operations, improve efficiency, and leverage technology for growth. Our consulting services cover everything from technology assessment to implementation.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes, we work with businesses of all sizes, from startups to large enterprises. We offer flexible solutions and pricing models to accommodate different budgets and requirements.",
  },
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 10 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 10 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"

    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden transition-colors duration-300">

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative mr-3" style={{ width: '180px', height: '180px' }}>
              <Image
                src="/images/xelerated-logo-dark.png"
                alt="Xelerated Tech Logo"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/images/xelerated-logo-light.png"
                alt="Xelerated Tech Logo"
                fill
                className="object-contain hidden dark:block"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {["home", "about", "services", "portfolio", "testimonials", "contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors relative cursor-pointer ${
                  activeSection === item ? "text-orange-500" : "text-foreground hover:text-orange-500"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"
                  />
                )}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground p-2 cursor-pointer"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                {["home", "about", "services", "portfolio", "testimonials", "contact"].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-foreground hover:text-orange-500 transition-colors py-2 text-base cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.button>
                ))}
                <div className="pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <FloatingElements />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-background/20 to-orange-100/30 dark:from-orange-950/30 dark:via-background/20 dark:to-orange-900/30"
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 text-sm font-medium mb-6">
                Digital Solutions That Drive Results
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight font-heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Accelerate Your{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                Digital
              </span>{" "}
              Transformation
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              We partner with businesses to create innovative web solutions, mobile applications, and digital strategies
              that drive growth and deliver exceptional user experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-border text-foreground hover:bg-muted px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                { number: 100, label: "Projects Completed", suffix: "+" },
                { number: 95, label: "Client Satisfaction", suffix: "%" },
                { number: 24, label: "Support Hours", suffix: "/7" },
                { number: 5, label: "Years Experience", suffix: "+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text font-heading">
                    <AnimatedCounter end={stat.number} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="text-muted-foreground h-8 w-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 text-sm font-medium mb-6">
              About Xelerated Tech
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-heading">
              Your Trusted{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                Technology Partner
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Xelerated Tech, we specialize in transforming businesses through innovative digital solutions. Our team
              of experienced developers, designers, and strategists work collaboratively to deliver cutting-edge
              technology solutions that drive growth and success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From startups to enterprises, we've helped businesses across various industries establish powerful digital
              presences, streamline operations, and achieve their technology goals with precision and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To accelerate business growth through innovative technology solutions that deliver measurable results and exceptional user experiences.",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                icon: Users,
                title: "Our Approach",
                description:
                  "We believe in collaborative partnerships, understanding your unique needs, and delivering solutions that exceed expectations through agile methodologies.",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: Award,
                title: "Our Promise",
                description:
                  "We deliver high-quality, scalable solutions on time and within budget, with ongoing support to ensure your continued success.",
                gradient: "from-purple-500 to-purple-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center group p-6"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-heading">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 text-sm font-medium mb-6">
              Our Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-heading">
              Comprehensive{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                Digital Solutions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology services that transform your business and
              accelerate your digital journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-card border-border hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 h-full shadow-sm hover:shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-card-foreground text-xl mb-3 font-heading">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-base text-muted-foreground text-center mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-4 py-2 text-sm font-medium mb-6">
              Our Portfolio
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Featured{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries achieve their digital transformation goals
              with innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${item.gradient} text-white text-xs`}>{item.category}</Badge>
                    </div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Button
                        asChild
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      >
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-gray-900 dark:text-white text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300 font-heading">
                      {item.title}
                    </CardTitle>
                    <p className="text-base text-gray-600 dark:text-gray-400">{item.description}</p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 text-sm font-medium mb-6">
              Client Testimonials
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              What Our{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                Clients Say
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with
              Xelerated Tech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 h-full shadow-sm hover:shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.gradient} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-700 dark:text-gray-300 font-heading">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <svg className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        </motion.div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <blockquote className="text-base text-gray-600 dark:text-gray-400 text-center mb-4 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 dark:text-white font-heading">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-4 py-2 text-sm font-medium mb-6">
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Frequently Asked{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 px-4 py-2 text-sm font-medium mb-6">
              Get In Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Ready to{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                Get Started?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Let's discuss your project and bring your vision to life. We're here to help you succeed in the digital
              world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader className="p-6">
                  <CardTitle className="text-gray-900 dark:text-white text-2xl font-heading">
                    Send us a message
                  </CardTitle>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                            formErrors.name
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                          }`}
                        />
                        {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                            formErrors.email
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                          }`}
                        />
                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                          formErrors.subject
                            ? "border-red-500"
                            : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        }`}
                      />
                      {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                    </div>

                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none ${
                          formErrors.message
                            ? "border-red-500"
                            : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        }`}
                      />
                      {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg"
                      >
                        {submitMessage}
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg"
                      >
                        {submitMessage}
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ready to transform your business with cutting-edge digital solutions? Our team of experts is here to
                  help you achieve your goals and exceed your expectations.
                </p>
              </div>

              <div className="space-y-1">
                {/* Location - Opens Google Maps */}
                <a 
                  href="https://www.google.com/maps/place/Nairobi,+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-heading group-hover:text-orange-500 transition-colors">Our Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
                  </div>
                </a>

                {/* Email - Opens email client */}
                <a 
                  href="mailto:xeleratedtech@gmail.com?subject=Business%20Inquiry%20-%20Digital%20Solutions&body=Hello%20Xelerated%20Tech%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20your%20digital%20solutions%20and%20would%20like%20to%20discuss%20my%20project%20requirements.%0D%0A%0D%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0D%0A%0D%0AThank%20you!"
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-heading group-hover:text-orange-500 transition-colors">Email Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">xeleratedtech@gmail.com</p>
                  </div>
                </a>

                {/* Phone - Opens phone dialer with SMS option */}
                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-heading group-hover:text-orange-500 transition-colors">Call Us</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">+254 115 588 218</p>
                    <div className="flex space-x-2">
                      <a 
                        href="tel:+254115588218"
                        className="px-3 py-1 bg-orange-500 text-white text-xs rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        Call Now
                      </a>
                      <a 
                        href="sms:+254115588218?body=Hello%20Xelerated%20Tech!%20I%20am%20interested%20in%20your%20digital%20solutions.%20Please%20contact%20me%20to%20discuss%20my%20project%20requirements.%20Thank%20you!"
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        Send SMS
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Option */}
                <a 
                  href="https://wa.me/254115588218?text=Hello%20Xelerated%20Tech!%20I%20am%20interested%20in%20your%20digital%20solutions%20and%20would%20like%20to%20discuss%20my%20project%20requirements.%20Please%20contact%20me%20at%20your%20earliest%20convenience.%20Thank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 mt-0 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-heading group-hover:text-green-500 transition-colors">WhatsApp Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">Quick Response Guaranteed</p>
                  </div>
                </a>
              </div>
   

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-heading">
                  Why Choose Xelerated Tech?
                </h4>
                <ul className="space-y-3">
                  {[
                    "Expert team with 5+ years of experience",
                    "Cutting-edge technology solutions",
                    "24/7 support and maintenance",
                    "Proven track record of success",
                    "Competitive pricing and flexible packages",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                      <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative" style={{ width: '220px', height: '60px' }}>
                  <Image
                    src="/images/xelerated-logo-light.png"
                    alt="Xelerated Tech Logo"
                    fill
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses through innovative technology solutions and digital excellence.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-base font-heading">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-base font-heading">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Web Development</li>
                <li>Mobile Applications</li>
                <li>Digital Strategy</li>
                <li>Cloud Solutions</li>
                <li>UI/UX Design</li>
                <li>Technology Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-base font-heading">Contact Info</h4>
              <div className="space-y-3 text-sm text-gray-400">
                {/* Location - Clickable */}
                <a 
                  href="https://www.google.com/maps/place/Nairobi,+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-orange-400 transition-colors cursor-pointer group"
                >
                  <MapPin size={16} className="text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Nairobi, Kenya</span>
                </a>
                
                {/* Phone - Clickable with multiple options */}
                <div className="group">
                  <div className="flex items-center space-x-2 mb-1">
                    <Phone size={16} className="text-orange-400 flex-shrink-0" />
                    <span>+254 115 588 218</span>
                  </div>
                  <div className="flex space-x-2 ml-6">
                    <a 
                      href="tel:+254115588218"
                      className="text-xs px-2 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                    >
                      Call
                    </a>
                    <a 
                      href="sms:+254115588218?body=Hello%20Xelerated%20Tech!%20I%20am%20interested%20in%20your%20digital%20solutions.%20Please%20contact%20me.%20Thank%20you!"
                      className="text-xs px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                    >
                      SMS
                    </a>
                  </div>
                </div>
                
                {/* Email - Clickable with pre-filled content */}
                <a 
                  href="mailto:xeleratedtech@gmail.com?subject=Business%20Inquiry%20-%20Digital%20Solutions&body=Hello%20Xelerated%20Tech%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20your%20digital%20solutions%20and%20would%20like%20to%20discuss%20my%20project%20requirements.%0D%0A%0D%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0D%0A%0D%0AThank%20you!"
                  className="flex items-center space-x-2 hover:text-orange-400 transition-colors cursor-pointer group"
                >
                  <Mail size={16} className="text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>xeleratedtech@gmail.com</span>
                </a>
              </div>
              
              {/* Social Media with real links */}
              <div className="flex space-x-3 mt-6">
                {[
                  { name: "Facebook", href: "https://facebook.com/xeleratedtech", icon: Facebook },
                  { name: "Twitter", href: "https://twitter.com/xeleratedtech", icon: Twitter },
                  { name: "LinkedIn", href: "https://linkedin.com/company/xelerated-tech", icon: Linkedin },
                  { name: "Instagram", href: "https://instagram.com/xeleratedtech", icon: Instagram },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <IconComponent size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Xelerated Tech. All rights reserved. | Crafted with precision in Kenya
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
      whileHover={{ scale: 1.01 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-heading">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 ml-4"
          >
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
