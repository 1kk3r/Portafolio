"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  BookOpenCheck,
  BrainCircuit,
  CodeXml,
  SquareUserRound,
  ScrollText,
  Github,
  Linkedin,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="absolute inset-0 bg-[url('/path-to-your-pattern.png')] opacity-10"></div>
      <Header isScrolled={isScrolled} />
      <Sidebar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-screen-xl mx-auto space-y-28 md:space-y-36 pt-24 xl:px-0 px-6"
      >
        <AboutMe />
        <Experience />
        <Projects />
        <Certificates />
        <Skills />
      </motion.main>
      <Footer />
    </div>
  );
}

function Header({ isScrolled }) {
  return (
    <motion.header
      className={`sticky top-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="hidden md:flex max-w-screen-md mx-auto items-center justify-center gap-8">
          {[
            "Sobre mi",
            "experiencia",
            "proyectos",
            "certificados",
            "skills",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-sm hover:text-blue-600 transition-colors capitalize"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item);
                  if (element) {
                    const yOffset = item === "Sobre mi" ? -100 : -80;
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

function Sidebar() {
  return (
    <aside className="hidden md:flex fixed right-4 bottom-4 flex-col gap-6 z-20">
      <a
        href="https://github.com/1kk3r"
        className="text-gray-600 hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/iker-farid-castro-s%C3%A1nchez-830259240/"
        className="text-gray-600 hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={24} />
      </a>
    </aside>
  );
}

function AboutMe() {
  return (
    <section id="Sobre mi" className="space-y-8 pt-20 -mt-20">
      <div className="grid gap-3 max-w-2xl md:max-w-full md:flex md:items-center md:gap-6 text-center md:text-left">
        <div className="flex-1 max-w-2xl">
          <a
            href="https://www.linkedin.com/in/iker-farid-castro-s%C3%A1nchez-830259240/"
            className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full w-fit hover:bg-blue-700 hover:scale-105 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Listo para trabajar! 🚀
          </a>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Iker Farid Castro Sánchez
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            <span className="text-sky-500 font-semibold">
              Titulado de la Carrera Ingeniería en Informática.
            </span>
            <span className="text-white">.</span>
            Capacitado, comprometido y con un gran interés por adquirir cada vez
            más conocimientos y habilidades.
          </p>
        </div>
        <div className="flex-shrink-0 md:ml-44 mt-6 md:mt-0 mx-auto">
          <Image
            src="images/profile.png"
            alt="Foto de perfil"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
      <div className="grid gap-6 scroll-mt-20">
        <h3 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
          <SquareUserRound size={38} className="text-blue-600" />
          ¿Quién soy?
        </h3>
        <article className="prose max-w-none text-gray-700 space-y-6">
          <p>
            Soy Iker Castro Sánchez,
            <span className="text-white">.</span>
            <span className="text-sky-500 font-semibold">
              Ingeniero en Informática especializado en desarrollo Full-Stack y
              análisis de datos
            </span>
            <span className="text-white">.</span>
            con experiencia en servicios y herramientas en la nube (Azure, AWS,
            OCI) con conocimiento en el ecosistema de Microsoft (PowerPlatform,
            PowerBI, PowerAutomate). He formado parte de distintos proyectos y
            licitaciones desarrollando soluciones tecnológicas, innovadoras y
            generando alto valor al desarrollar requerimientos y mejoras
            continuas, demostrando el compromiso tanto con el cliente como con
            el usuario ejecutor.
          </p>
          <p>
            <span className="text-sky-500 font-semibold">
              Durante mi formación académica y trayectoria laboral,
            </span>
            <span className="text-white">.</span>
            he desarrollado habilidades técnicas y personales que me permiten
            enfrentar desafíos con confianza y sólidos conocimientos. Me destaco
            por valorar el trabajo en equipo, la comunicación efectiva y el
            compromiso con la excelencia para alcanzar objetivos en proyectos de
            alto impacto, compartiendo e incentivando al equipo a alcanzar un
            mismo objetivo.
          </p>
          <p>
            Además de mi pasión por la tecnología, mantengo un equilibrio entre
            mi vida personal y profesional. Disfruto mantenerme activo
            físicamente practicando diversos deportes.
            <span className="text-white">.</span>
            <span className="text-sky-500 font-semibold">
              También soy un entusiasta de los videojuegos en línea, las series
              de anime y leer mangas de distintos géneros.
            </span>
          </p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic space-y-4">
            <span className="text-sky-500 font-semibold">
              Mi objetivo profesional
            </span>
            <span className="text-white">.</span>
            es contribuir de la mejor manera con mi experiencia y conocimientos
            al desarrollo de soluciones innovadoras que mejoren la experiencia
            tanto en las empresas como la de los usuarios y generar valor en
            proyectos tecnológicos.
            <span className="text-white">.</span>
            <span className="text-sky-500 font-semibold">
              Aspiro a crecer profesionalmente
            </span>
            <span className="text-white">.</span>
            en un entorno dinámico, donde pueda seguir creciendo y aportando de
            una manera funcional y lograr generar un impacto positivo a través
            de mi desempeño, empleando distintas herramientas y tecnologías, y
            consolidar un equipo que genere alto valor a los clientes y
            usuarios.
          </blockquote>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="grid gap-6 scroll-mt-20">
      <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-gray-800">
        <Briefcase size={38} className="text-blue-600" />
        Experiencia
      </h3>
      <div className="space-y-10">
        <ExperienceItem
          date="Marzo 2025 - Presente"
          title={
            <a
              href="https://www.pwc.com/cl/es.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-900"
            >
              Analyst
            </a>
          }
          company="PriceWaterhouseCoopers (PwC)"
          description="Analista TI/Data en el área de Ingeniería, participando en la implementación y optimización de soluciones tecnológicas para la cartera de clientes de la firma, colaborando estrechamente con equipos multidisciplinarios para analizar y mejorar procesos tanto internos como externos, facilitando la integración de sistemas innovadores que impulsan la transformación digital."
          skills={[
            "PowerPlatform",
            "PowerBI",
            "PowerAutomate",
            "Python",
            "MySQL",
            "PostgreSQL",
            "Azure",
            "AWS",
            "OCI",
            "Google Cloud",
            "JavaScript",
            "NextJS",
            "NodeJS",
            "ReactJS",
            "TailwindCSS",
          ]}
        />
      </div>
      <div className="space-y-10">
        <ExperienceItem
          date="Septiembre 2024 - Enero 2025"
          title={
            <a
              href="https://www.koywe.com/es/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-900"
            >
              Full Stack Engineer
            </a>
          }
          company="FACTO - Koywe"
          description="Encargado del desarrollo de la plataforma web e integración de APIs, brindando soporte completo en frontend y backend. Enfocado en la implementación de funcionalidades personalizadas orientadas a mejorar la experiencia del usuario y optimizar la eficiencia operativa. Comprometido con buenas prácticas de desarrollo, escalabilidad del sistema y mejora continua."
          skills={[
            "PHP",
            "jQuery",
            "XML",
            "MySQL",
            "Google Analytics",
            "TailwindCSS",
            "NextJS",
            "NodeJS",
            "Supabase",
            "AWS",
            "Python",
          ]}
        />
      </div>
      <div className="space-y-6">
        <ExperienceItem
          date="Junio 2024 - Agosto 2024"
          title={
            <a
              href="https://facto.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-900"
            >
              Software Engineer Internship
            </a>
          }
          company="FACTO"
          description="Durante mi práctica profesional, apoyé el desarrollo y mantenimiento de la plataforma web, trabajando en frontend y backend. Contribuí a la implementación de funcionalidades para mejorar la experiencia del usuario y optimizar procesos internos. También participé en la integración de sistemas de contabilidad, gestión de inventario y servicios cloud."
          skills={["PHP", "jQuery", "XML", "MySQL", "Google Analytics"]}
        />
      </div>
    </section>
  );
}

function ExperienceItem({ date, title, company, description, skills }) {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-blue-200">
      <div className="absolute left-0 top-2 h-2 w-2 -translate-x-[4.5px] rounded-full bg-blue-600" />
      <div className="group">
        <div className="text-sm text-blue-600 mb-1">{date}</div>
        <h3 className="text-xl font-semibold mb-1 flex items-center gap-2 text-gray-800">
          {title}
          <ChevronRight className="h-4 w-4 text-blue-600 transition-transform group-hover:translate-x-1" />
        </h3>
        <h4 className="text-lg text-gray-600 mb-3">{company}</h4>
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const images = [
    "images/rms/rms.png",
    "images/rms/rms1.png",
    "images/rms/rms2.png",
    "images/rms/rms3.png",
    "images/rms/rms4.png",
    "images/rms/rms5.png",
    "images/rms/rms6.png",
    "images/rms/rms7.png",
    "images/rms/rms8.png",
    "images/rms/rms9.png",
    "images/rms/rms10.png",
  ];

  const images1 = [
    "images/cge/PA1.png",
    "images/cge/PA2.png",
    "images/cge/PA3.png",
    "images/cge/PA4.png",
    "images/cge/PA5.png",
    "images/cge/PA6.png",
    "images/cge/PA7.png",
  ];

  const images2 = [
    "images/scotiabank/PB1.png",
    "images/scotiabank/PB2.png",
    "images/scotiabank/PB3.png",
    "images/scotiabank/PB4.png",
    "images/scotiabank/PB5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const maxLength = Math.max(images.length, images1.length, images2.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % maxLength);
        setFade(true); // fade in
      }, 400); // tiempo del fade out antes del cambio
    }, 3000);

    return () => clearInterval(interval);
  }, [maxLength]);

  // Mostrar última imagen si la galería es más corta
  const getImage = (arr) => {
    if (currentIndex < arr.length) {
      return arr[currentIndex];
    }
    return arr[arr.length - 1];
  };

  return (
    <section id="proyectos" className="grid gap-8 scroll-mt-20">
      <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-gray-800">
        <CodeXml size={38} className="text-blue-600" />
        Proyectos
      </h3>

      {/* Proyecto 1 */}
      <article className="grid gap-8 lg:grid-cols-2 p-6 rounded-lg shadow-md ring-1 ring-white/20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-blue-600">
              Real Stock Manager, Proyecto de Título
            </h3>
            <p className="text-base leading-relaxed text-gray-800">
              Sitio web orientado para tiendas de retail el cual cuenta con
              gestión de inventario e-commerce con SDK de Transbank y
              Mercadopago, lista de tareas y API GeminiAI implementado para
              predicción de tendencias basado en ventas históricas y
              actualización de stock con sugerencias de productos.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["NextJS", "NodeJS", "TailwindCSS", "Supabase"].map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div>
            <ContactButton
              href="https://github.com/1kk3r/RMS-main.git"
              icon={<Github size={20} />}
              text="Ver en GitHub"
            />
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto h-100 md:h-150 rounded-lg shadow-lg overflow-hidden">
          <img
            loading="lazy"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            src={getImage(images)}
            alt={`Imagen ${currentIndex + 1}`}
          />
        </div>
      </article>

      {/* Proyecto 2 */}
      <article className="grid gap-8 lg:grid-cols-2 p-6 rounded-lg shadow-md ring-1 ring-white/20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-blue-600">
              PowerApps Gestión Interna, CGE
            </h3>
            <p className="text-base leading-relaxed text-gray-800">
              Plataforma interna de gestión y organización para envío de
              comunicados, flujos de trabajo, envío de email por Active
              Directory, registro de evolutivos, peticiones automatizadas, etc.;
              procesos internos para mejorar la eficiencia y productividad
              interna y externa de la empresa.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["PowerPlatforms", "PowerApps", "PowerAutomate", "SharePoint"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto h-100 md:h-150 rounded-lg shadow-lg overflow-hidden">
          <img
            loading="lazy"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            src={getImage(images1)}
            alt={`Imagen ${currentIndex + 1}`}
          />
        </div>
      </article>

      {/* Proyecto 3 */}
      <article className="grid gap-8 lg:grid-cols-2 p-6 rounded-lg shadow-md ring-1 ring-white/20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-blue-600">
              PowerBi Dashboard KPI's, NUAM
            </h3>
            <p className="text-base leading-relaxed text-gray-800">
              Dashboard interactivo para monitoreo de KPIs en tiempo real,
              basado en datos internos cargados por los mismos usuarios para
              generar reportes y análisis de rendimiento, facilitando la toma de
              decisiones estratégicas para Scotiabank.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["PowerPlatforms", "PowerBi", "SharePoint", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto h-100 md:h-150 rounded-lg shadow-lg overflow-hidden">
          <img
            loading="lazy"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            src={getImage(images2)}
            alt={`Imagen ${currentIndex + 1}`}
          />
        </div>
      </article>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificados" className="scroll-mt-20">
      <h3 className="text-3xl font-bold mb-12 flex items-center gap-6 text-gray-800">
        <ScrollText size={38} className="text-blue-600" />
        Certificados
      </h3>
      <div className="space-y-12">
        <CertificadosItem
          title={
            <a
              href="https://drive.google.com/file/d/15p2UahDHCPu0pMDe_WpHHL_rfcMsLd6f/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              Titulo Profesional Ingeniero en Informática.
            </a>
          }
          description="Instituto Profesional INACAP."
        />
      </div>
      <div className="space-y-12">
        <CertificadosItem
          title={
            <a
              href="https://drive.google.com/file/d/1WYXQwRJ2qUHTgSQt3yodWnKXTecxfadQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              Titulo Técnico Analista Programador.
            </a>
          }
          description="Instituto Profesional INACAP."
        />
      </div>
      <div className="space-y-12">
        <CertificadosItem
          title={
            <a
              href="https://drive.google.com/file/d/1-_wlnMapSpGwK1meckmFhs2_ZHgDQ6F8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              Titulo Técnico en Telecomunicaciones.
            </a>
          }
          description="Liceo Técnico Eliodoro García Zegers."
        />
      </div>
      <div className="space-y-12">
        <CertificadosItem
          title={
            <a
              href="https://drive.google.com/file/d/1dmz4sRMcXB0OufjnH5fEXNKQwX9L6-sQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              Certificado Oracle AI Foundations Associate.
            </a>
          }
          description="ORACLE"
        />
      </div>
      <div className="space-y-12">
        <CertificadosItem
          title={
            <a
              href="https://drive.google.com/file/d/17D5KxP_ot2UbyeyHHR6OjD9PgqKOBCKS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              Certificado Oracle Foundations Associate.
            </a>
          }
          description="ORACLE"
        />
      </div>
      <div className="space-y-12">
        <CertificadosItem
          title={
            <a
              href="https://drive.google.com/file/d/12yMfMKmL0CsPgwxpEaB0cksRK6gtz-J9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              Arquitectura Cloud.
            </a>
          }
          description="Instituto Profesional INACAP."
        />
      </div>
      <div className="space-y-12">
        <CertificadosItem
          title={
            <a
              href="https://drive.google.com/file/d/1Jc3v8evedIQrKDO3Y1pCiit1zt_jv7BT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              Desarrollo Full-Stack.
            </a>
          }
          description="Instituto Profesional INACAP."
        />
      </div>
      <div className="space-y-12">
        <CertificadosItem
          title={
            <a
              href="https://drive.google.com/file/d/1629qkt8qjTVZte9ScymQzpf1ERIVX-Ju/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              Diseño y Gestión de Base de Datos SQL y NoSQL.
            </a>
          }
          description="Instituto Profesional INACAP."
        />
      </div>
      <div className="space-y-12">
        <CertificadosItem
          title={
            <a
              href="https://drive.google.com/file/d/1J4MOAQHU8yR264-UasaWkOOJxu3q0s9i/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              Diseño Ágil de Sistemas SCRUM.
            </a>
          }
          description="Instituto Profesional INACAP."
        />
      </div>
    </section>
  );
}

function CertificadosItem({ title, description }) {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-green-200">
      <div className="absolute left-0 top-2 h-2 w-2 -translate-x-[4.5px] rounded-full bg-green-600" />
      <div className="group">
        <h3 className="text-xl font-semibold mb-1 flex items-center gap-2 text-gray-800">
          {title}
          <ChevronRight className="h-4 w-4 text-green-600 transition-transform group-hover:translate-x-1" />
        </h3>
        <span className="text-lg text-gray-600">{description}</span>
      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "HTML", icon: "icons/html.svg" },
    { name: "CSS", icon: "icons/css.svg" },
    { name: "JavaScript", icon: "icons/javascript.svg" },
    { name: "Typescript", icon: "icons/typescript.svg" },
    { name: "ReactJS", icon: "icons/react.svg" },
    { name: "ReactNative", icon: "icons/reactnative.svg" },
    { name: "NextJS", icon: "icons/nextjs.svg" },
    { name: "NodeJS", icon: "icons/nodejs.svg" },
    { name: "jQuery", icon: "icons/jquery.svg" },
    { name: "TailwindCSS", icon: "icons/tailwind.svg" },
    { name: "Bootstrap", icon: "icons/bootstrap.svg" },
    { name: "PHP", icon: "icons/php.svg" },
    { name: "Python", icon: "icons/python.svg" },
    { name: "Django", icon: "icons/django.svg" },
    { name: "Flask", icon: "icons/flask.svg" },
    { name: "MySQL", icon: "icons/mysql.svg" },
    { name: "PostgreSQL", icon: "icons/postgresql.svg" },
    { name: "MongoDB", icon: "icons/mongodb.svg" },
    { name: "Supabase", icon: "icons/supabase.svg" },
    { name: "AWS Cloud", icon: "icons/aws.svg" },
    { name: "Google Cloud", icon: "icons/googlecloud.svg" },
    { name: "GIT", icon: "icons/git.svg" },
    { name: "Github", icon: "icons/github.svg" },
    { name: "PowerBI", icon: "icons/powerbi.svg" },
    { name: "PowerAutomate", icon: "icons/microsoft.svg" },
    { name: "PowerPlatform", icon: "icons/microsoft.svg" },
    { name: "PowerApps", icon: "icons/microsoft.svg" },
    { name: "Azure", icon: "icons/azure.svg" },
    { name: "OCI", icon: "icons/oci.svg" },
    { name: "N8N", icon: "icons/n8n.svg" },
  ];

  return (
    <section id="skills" className="grid gap-6 scroll-mt-20">
      <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-gray-800">
        <BrainCircuit size={38} className="text-blue-600" />
        Skills
      </h3>
      <motion.ul
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.li
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="p-6 flex flex-col items-center gap-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={skill.icon || "/placeholder.svg"}
              alt={`${skill.name} icon`}
              width={48}
              height={48}
            />
            <span className="text-sm text-center text-gray-700">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 py-16 mt-28">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <div className="space-y-4 mb-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800">
            ¿Te gustaría contactarme?
          </h2>
          <p className="text-xl">
            <a
              href="mailto:ikerfaridc@gmail.com"
              className="text-blue-600 hover:underline"
            >
              ikerfaridc@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <ContactButton
            href="https://wa.me/+56936004327"
            icon={<PhoneCall size={20} />}
            text="Whatsapp"
          />
          <ContactButton
            href="https://drive.google.com/file/d/1S83FzW1rJu1JCLbsmW8kb-Bf5HxfkvHL/view?usp=sharing"
            icon={<BookOpenCheck size={20} />}
            text="Curriculum Vitae"
          />
          <ContactButton
            href="https://www.linkedin.com/in/iker-farid-castro-s%C3%A1nchez-830259240/"
            icon={<Linkedin size={20} />}
            text="LinkedIn"
          />
        </div>
        <span className="text-sm text-gray-600">
          Desarrollado por Iker Farid Castro Sánchez, Enero del 2025.
        </span>
      </div>
    </footer>
  );
}

function ContactButton({ href, icon, text }) {
  return (
    <motion.a
      href={href}
      className="inline-flex items-center text-sm text-gray-700 gap-2 py-2 px-4 rounded-lg transition-all duration-300 bg-white shadow-md hover:shadow-lg hover:text-blue-600 focus:ring-2 focus:ring-blue-400"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {text}
    </motion.a>
  );
}