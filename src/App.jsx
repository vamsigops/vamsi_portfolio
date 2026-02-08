import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronUp,
  Download,
  ArrowRight,
  Code,
  GraduationCap,
  Briefcase,
  Zap,
  Database,
  Globe,
  Lightbulb,
  Menu,
  X,
  FileText,
  User,
  Cloud,
  Server,
} from "lucide-react";

// --- Configuration Data ---
const CONFIG = {
  NAME: "Vamsi Krishna",
  TITLE: "Site Reliability & DevOps Engineer",
  TAGLINE:
    "Automating deployments, managing cloud infrastructure, and improving system reliability with CI/CD, Kubernetes, and AWS.",
  CONTACT: {
    email: "vamsig.ops@gmail.com",
    phone: "+91 9494848038",
    location: "Bangalore, Karnataka",
    linkedin: "https://linkedin.com/in/vamsi-krishna-895a652a3",
    github: "https://github.com/vamsikrishna", // Assuming GitHub handle
    resumeUrl: "#",
  },
  ABOUT_PARAGRAPH:
    "Site Reliability & DevOps Engineer with 2 years of experience automating deployments, managing cloud infrastructure, and improving system reliability. Skilled in CI/CD, Kubernetes, Infrastructure-as-Code, and Observability with hands-on AWS. Proven track record of reducing manual work, accelerating releases, and strengthening monitoring.",
};

const TECH_ICONS = [
  { name: "Python", color: "text-blue-500" },
  { name: "Bash", color: "text-green-500" },
  { name: "Jenkins", color: "text-orange-500" },
  { name: "Docker", color: "text-blue-400" },
  { name: "Kubernetes", color: "text-indigo-500" },
  { name: "Terraform", color: "text-purple-500" },
  { name: "AWS", color: "text-yellow-500" },
];

const SKILLS = [
  {
    category: "Programming & Scripting",
    icon: Code,
    items: ["Python", "Bash"],
  },
  {
    category: "CI/CD & Automation",
    icon: Zap,
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"],
  },
  {
    category: "Container & Orchestration",
    icon: Database,
    items: ["Docker", "Kubernetes", "Helm"],
  },
  {
    category: "IaC & Provisioning",
    icon: Cloud,
    items: ["Terraform", "Ansible", "AWS CloudFormation (basics)"],
  },
  {
    category: "Cloud Platforms",
    icon: Globe,
    items: [
      "AWS (EC2, RDS, S3, Auto Scaling, Elastic Beanstalk, IAM)",
      "GCP (GKE, Cloud Run)",
      "Azure (basics)",
    ],
  },
  {
    category: "Monitoring & Observability",
    icon: Lightbulb,
    items: ["Datadog", "Prometheus", "Grafana", "ELK/EFK", "OpenTelemetry"],
  },
  {
    category: "Security & Ops",
    icon: Server,
    items: [
      "IAM",
      "Secrets Management",
      "SSL/TLS",
      "RBAC",
      "Network Policies",
      "Linux",
      "Networking",
      "Incident Management",
      "On-call Ops",
    ],
  },
  {
    category: "Soft Skills",
    icon: User,
    items: [
      "Problem Solving",
      "Collaboration",
      "Time Management",
      "Root Cause Analysis",
    ],
  },
];

const initialProjects = [
  {
    name: "Automated Monitoring & Deployment Pipeline",
    description:
      "CI/CD with Jenkins, GitHub Actions, Docker, Terraform; integrated Prometheus & Grafana for daily deployments.",
    stack: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Terraform",
      "Prometheus",
      "Grafana",
    ],
    liveLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    futureIdeas: [
      {
        title: "Advanced GitOps Integration",
        description:
          "Enhance with ArgoCD for declarative deployments and automated rollbacks, reducing human error by 40%.",
      },
      {
        title: "Multi-Cloud Observability",
        description:
          "Extend monitoring to GCP and Azure using OpenTelemetry for unified dashboards across environments.",
      },
      {
        title: "AI-Driven Anomaly Detection",
        description:
          "Incorporate ML models in Prometheus for predictive alerting on potential incidents.",
      },
    ],
  },
  {
    name: "High Availability Web App on AWS",
    description:
      "Deployed PHP + MySQL app with EC2, RDS, Auto Scaling, Beanstalk; secured with IAM and SSL.",
    stack: [
      "AWS EC2",
      "RDS",
      "Auto Scaling",
      "Elastic Beanstalk",
      "IAM",
      "SSL",
    ],
    liveLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    futureIdeas: [
      {
        title: "Serverless Migration",
        description:
          "Refactor to AWS Lambda and API Gateway for cost optimization and auto-scaling without servers.",
      },
      {
        title: "Enhanced Security Layers",
        description:
          "Add WAF and Shield for DDoS protection, integrating with CloudWatch for real-time threat monitoring.",
      },
      {
        title: "CI/CD Pipeline Automation",
        description:
          "Integrate GitHub Actions for blue-green deployments to minimize downtime during updates.",
      },
    ],
  },
  {
    name: "Kubernetes Microservices on GCP",
    description:
      "Deployed microservices on GKE with Helm; configured Ingress, RBAC, monitoring with Stackdriver and OpenTelemetry.",
    stack: [
      "GCP GKE",
      "Helm",
      "Ingress",
      "RBAC",
      "Stackdriver",
      "OpenTelemetry",
    ],
    liveLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1551836022-4d8bbacfdc9a?w=800&q=80",
    futureIdeas: [
      {
        title: "Hybrid Cloud Setup",
        description:
          "Integrate with AWS for multi-cloud resilience, using Istio for service mesh across providers.",
      },
      {
        title: "Advanced Monitoring with EFK",
        description:
          "Add Elasticsearch, Fluentd, Kibana stack for centralized logging and search capabilities.",
      },
      {
        title: "GitOps with ArgoCD",
        description:
          "Implement continuous delivery using Git as the source of truth for cluster state.",
      },
    ],
  },
];

const EXPERIENCE = [
  {
    title: "Site Reliability Engineer",
    company: "Nextiva (Acquired Simplify360)",
    duration: "Dec 2023 – Present",
    location: "Bangalore",
    description: [
      "Began with responsibilities in a startup-like environment, handling client issue debugging across UI, backend, and database logs, coordinating with QA and Development teams for fixes.",
      "Performed manual deployments and server maintenance (disk checks, log monitoring, uptime verification), ensuring smooth product operations.",
      "Took ownership of incident management, resolving issues quickly and reducing average ticket resolution time by 25%.",
      "After company acquisition, drove automation initiatives by building CI/CD pipelines with Jenkins & GitHub Actions, reducing deployment time by 70%.",
      "Automated infrastructure provisioning using Terraform modules & Ansible, enabling consistent environment setup.",
      "Migrated applications to Docker + Kubernetes, deploying with Helm, managing RBAC, Ingress, and secrets.",
      "Implemented observability using Datadog, Prometheus, Grafana, setting up alerts and dashboards for proactive monitoring.",
      "Managed AWS infrastructure (EC2, RDS, S3, Auto Scaling, Elastic Beanstalk, IAM), maintaining 99.9% uptime SLA.",
      "Enhanced cloud and platform security with IAM least-privilege policies, SSL/TLS, and AWS Secrets Manager.",
      "Led root cause analysis and post-mortems, reducing repeat incidents by 30%.",
    ],
  },
];

const EDUCATION = [
  {
    institution: "Jain University, Bangalore",
    degree: "B.Tech in Electronics & Communication Engineering",
    duration: "Aug 2018 – Sep 2022",
  },
];

const CERTIFICATIONS = [
  {
    name: "Cloud & DevOps Certification",
    issuer: "Intellipaat",
    year: "2024",
    certificateImage:
      "https://via.placeholder.com/800x600/1E40AF/FFFFFF?text=Cloud+%26+DevOps+Certification+-+Intellipaat+2024",
  },
  {
    name: "Docker, Kubernetes, Terraform, AWS",
    issuer: "LinkedIn Learning",
    year: "2024",
    certificateImage:
      "https://via.placeholder.com/800x600/059669/FFFFFF?text=Docker%2C+Kubernetes%2C+Terraform%2C+AWS+-+LinkedIn+Learning+2024",
  },
];

// --- Custom Hooks ---
const useInView = (threshold = 0.2) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentElement = ref.current;
    if (currentElement) observer.observe(currentElement);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

// --- Components ---
const MobileMenu = ({ isOpen, onClose, navItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300">
        <div className="p-6 flex justify-between items-center border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Menu</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
                onClose();
              }}
              className="w-full text-left py-3 px-4 text-base font-medium text-slate-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

const Modal = ({ title, content, onClose }) => {
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-3 border-slate-200">
          {title}
        </h3>
        <div className="text-sm text-slate-600 space-y-4">{content}</div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-slate-800">
            {certificate.name} Certificate
          </h3>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center">
          <img
            src={certificate.certificateImage}
            alt={certificate.name}
            className="max-w-full max-h-96 object-contain rounded-lg shadow-lg mx-auto"
          />
          <div className="mt-4 text-sm text-slate-600">
            <p>Issuer: {certificate.issuer}</p>
            <p>Year: {certificate.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GradientButton = ({
  children,
  onClick,
  icon: Icon,
  href,
  download,
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]";

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
        className={`${baseClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );
};

const SectionWrapper = ({ id, title, children, className = "" }) => {
  const [ref, inView] = useInView();

  return (
    <section id={id} ref={ref} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-slate-800">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-blue-100"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Profile Image */}
          <div
            className={`flex-shrink-0 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80" // DevOps-related image: developer working on cloud setup
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p
              className={`text-lg font-medium text-slate-600 mb-3 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              Hello, I'm
            </p>
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent transition-all duration-700 delay-200 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {CONFIG.NAME}
            </h1>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-slate-700 transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {CONFIG.TITLE}
            </h2>
            <p
              className={`max-w-3xl text-lg sm:text-xl text-slate-600 mb-10 transition-all duration-700 delay-500 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {CONFIG.TAGLINE}
            </p>

            <div
              className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 transition-all duration-700 delay-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <a href="#projects">
                <GradientButton icon={ArrowRight}>View My Work</GradientButton>
              </a>
              <GradientButton
                icon={Download}
                href={CONFIG.CONTACT.resumeUrl}
                download
              >
                Download Resume
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- About Section ---
const AboutSection = () => {
  const [ref, inView] = useInView();

  return (
    <SectionWrapper id="about" title="About Me" className="bg-blue-50">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        ref={ref}
      >
        <div
          className={`space-y-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <p className="text-lg text-slate-600 leading-relaxed">
            {CONFIG.ABOUT_PARAGRAPH}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <GradientButton href={CONFIG.CONTACT.linkedin} icon={Linkedin}>
              LinkedIn
            </GradientButton>
            <GradientButton href={CONFIG.CONTACT.github} icon={Github}>
              GitHub
            </GradientButton>
          </div>
        </div>

        <div
          className={`p-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-lg transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-slate-800">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {TECH_ICONS.map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 rounded-xl bg-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(10px)",
                }}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mb-2 ${tech.color}`}
                >
                  <Code className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-slate-700 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- Skills Section ---
const SkillsSection = () => {
  const [ref, inView] = useInView();

  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      className="bg-gradient-to-br from-blue-50 to-green-50"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        ref={ref}
      >
        {SKILLS.map((skillGroup, index) => {
          const IconComponent = skillGroup.icon;
          return (
            <div
              key={skillGroup.category}
              className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-t-4 border-blue-500 hover:scale-[1.02] ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

// --- Projects Section ---
const ProjectsSection = ({ projects, onGenerateIdeas, llmLoading }) => {
  const [ref, inView] = useInView();

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      className="bg-blue-50"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref={ref}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/800x450/1E40AF/FFFFFF?text=Project+Image";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-slate-800">
                {project.name}
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <GradientButton
                    href={project.liveLink}
                    icon={Globe}
                    className="flex-1 text-xs py-2"
                  >
                    Live
                  </GradientButton>
                  <GradientButton
                    href={project.githubLink}
                    icon={Github}
                    className="flex-1 text-xs py-2"
                  >
                    Code
                  </GradientButton>
                </div>
                <GradientButton
                  onClick={() => onGenerateIdeas(project)}
                  icon={Lightbulb}
                  className={`w-full text-xs py-2 ${
                    llmLoading === project.name ? "animate-pulse" : ""
                  }`}
                >
                  {llmLoading === project.name
                    ? "Generating..."
                    : "✨ Future Ideas"}
                </GradientButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// --- Experience Section ---
const ExperienceSection = ({ onViewCertificate, certifications }) => {
  const [ref, inView] = useInView();

  return (
    <SectionWrapper
      id="experience"
      title="Experience & Education"
      className="bg-gradient-to-br from-blue-50 to-green-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={ref}>
        {/* Experience */}
        <div
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800">Experience</h3>
          </div>
          <div className="space-y-8">
            {EXPERIENCE.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:ring-4 before:ring-blue-100"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(10px)",
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <p className="text-sm font-medium text-blue-600 mb-1">
                  {job.duration} • {job.location}
                </p>
                <h4 className="text-xl font-bold text-slate-800">
                  {job.title}
                </h4>
                <p className="font-semibold mb-3 text-slate-600">
                  {job.company}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 mt-2 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div
          className={`space-y-8 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Education</h3>
            </div>
            {EDUCATION.map((edu, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  {edu.degree}
                </h4>
                <p className="font-semibold text-green-600 mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-slate-600 mb-2">{edu.duration}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                Certifications
              </h3>
            </div>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg relative"
              >
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  {cert.name}
                </h4>
                <p className="font-semibold text-emerald-600 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Issued: {cert.year}
                </p>
                <GradientButton
                  onClick={() => onViewCertificate(cert)}
                  icon={FileText}
                  className="w-full text-xs py-2"
                >
                  View Certificate
                </GradientButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- Contact Section ---
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const success = Math.random() > 0.1;

      if (success) {
        setStatus("Message Sent! I will be in touch soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Simulated sending failure.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again or email directly.");
    }
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" className="bg-blue-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-slate-700 break-all">
                {CONFIG.CONTACT.email}
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-100 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-slate-700">{CONFIG.CONTACT.location}</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <span className="text-slate-700">{CONFIG.CONTACT.phone}</span>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap gap-4">
            <GradientButton href={CONFIG.CONTACT.linkedin} icon={Linkedin}>
              LinkedIn
            </GradientButton>
            <GradientButton href={CONFIG.CONTACT.github} icon={Github}>
              GitHub
            </GradientButton>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
            <GradientButton type="submit" className="w-full">
              Send Message
            </GradientButton>
            {status && (
              <p
                className={`text-sm mt-3 font-semibold text-center ${
                  status.includes("Sent") ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- Main App ---
export default function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projects] = useState(initialProjects);
  const [llmOutput, setLlmOutput] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [llmLoading, setLlmLoading] = useState(null);
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleGenerateIdeas = async (project) => {
    setLlmLoading(project.name);
    setLlmOutput(null);
    setModalTitle(`Future Scope Ideas for ${project.name}`);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const content = (
      <ul className="space-y-4">
        {project.futureIdeas.map((idea, index) => (
          <li key={index} className="p-4 bg-slate-50 rounded-xl">
            <h4 className="font-bold mb-2 text-blue-600">
              {index + 1}. {idea.title}
            </h4>
            <p className="text-sm text-slate-600">{idea.description}</p>
          </li>
        ))}
      </ul>
    );
    setLlmOutput(content);
    setLlmLoading(null);
  };

  const closeModal = () => {
    setLlmOutput(null);
    setModalTitle("");
  };

  const handleViewCertificate = (cert) => {
    setSelectedCertificate(cert);
    setShowCertModal(true);
  };

  const closeCertModal = () => {
    setShowCertModal(false);
    setSelectedCertificate(null);
  };

  const observer = useRef(null);
  const sectionIds = [
    "hero",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.current.observe(element);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsSticky(scrollY > 50);
    setShowScrollTop(scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isSticky ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-16 flex justify-between items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent"
          >
            {CONFIG.NAME.split(" ")[0]}
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-blue-500"
                    : "text-slate-600 hover:text-blue-500"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />

      <main className="bg-blue-50 text-slate-800 transition-colors duration-300">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection
          projects={projects}
          onGenerateIdeas={handleGenerateIdeas}
          llmLoading={llmLoading}
        />
        <ExperienceSection
          onViewCertificate={handleViewCertificate}
          certifications={CERTIFICATIONS}
        />
        <ContactSection />
      </main>

      <Modal title={modalTitle} content={llmOutput} onClose={closeModal} />
      <CertificateModal
        isOpen={showCertModal}
        onClose={closeCertModal}
        certificate={selectedCertificate}
      />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-100 to-green-100 py-8 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {CONFIG.NAME}. Built with React &
            Tailwind CSS.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Designed for modern experiences across all devices.
          </p>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
