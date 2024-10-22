"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Menu, Smartphone, QrCode, Car } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Header from "./Header"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#FFC314] text-gray-900">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 relative">
        <Header />
        <h1 className="text-1xl font-bold tracking-tighter sm:text-4xl md:text-2xl text-black  ">Frota Leve</h1>
        <button
          className="ml-auto lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50 lg:ml-auto items-center gap-4 p-4 lg:p-0 border-b lg:border-b-0 border-gray-200`}>
          {["Recursos", "Sobre", "Preços", "Contato"].map((item) => (
            <Link
              key={item}
              className="text-sm font-medium hover:text-[#FFC314] transition-colors w-full lg:w-auto text-center py-2 lg:py-0"
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Sua frota no controle certo
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Automatize o gerenciamento de frotas da sua empresa ou órgão público com a frota leve a
                  solução completa que você precisa para substituir o controle no papel.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#preços" passHref>
                  <Button className="w-full sm:w-auto bg-[#FFC314] text-gray-900 hover:bg-[#FFD700]">Comece agora</Button>
                </Link>
                <Link href="#sobre" passHref>
                  <Button variant="outline" className="w-full sm:w-auto text-gray-900 border-gray-300 hover:bg-gray-100">Saiba Mais</Button>
                </Link>

              </div>
            </div>
          </div>
        </section>
        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Recursos Principais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Smartphone, title: "Registro completo de viagens", description: "Mantenha todas as informações das viagens organizadas e acessíveis. Registre cada detalhe, desde o horário de partida até o destino final, garantindo total controle e rastreabilidade." },
                { icon: BarChart, title: "Análises Detalhadas", description: "Acompanhe métricas críticas, como consumo de combustível, manutenção preventiva e uso da frota. Identifique tendências e tome decisões estratégicas com base em dados precisos." },
                { icon: Car, title: "Reserva de veículos e controle de combustível", description: "Planeje e gerencie a utilização dos veículos com eficiência. Monitore o consumo de combustível e agende reservas para evitar conflitos e garantir disponibilidade." },
                { icon: QrCode, title: "Início de corrida com QR Code", description: "TSimplifique o processo de início de viagens com tecnologia QR Code. Permita que motoristas iniciem corridas com rapidez e segurança, sem complicações burocráticas." },
              ].map((feature, index) => (
                <Card key={index} className="bg-gray-50 border-gray-200">
                  <CardHeader>
                    <feature.icon className="w-8 h-8 mb-2 text-[#FFC314]" />
                    <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-gray-900">Sobre a Frota Leve</h2>
                <p className="text-gray-600 md:text-lg mb-6">
                  A Frota Leve é uma solução completa de gerenciamento de frotas desenvolvida para empresas e órgãos públicos que desejam simplificar suas operações logísticas. Nosso foco é reduzir a burocracia e melhorar a eficiência através da tecnologia.
                </p>
                <p className="text-gray-600 md:text-lg mb-6">
                  Com uma equipe dedicada de desenvolvedores, designers e especialistas em experiência do usuário, estamos constantemente inovando e melhorando nossa plataforma para atender às necessidades em constante evolução dos profissionais modernos.
                </p>
                {/* <Button variant="outline" className="w-full sm:w-auto text-gray-900 border-gray-300 hover:bg-gray-100">Conheça Nossa Equipe</Button> */}
              </div>
              <div className="relative h-[300px] sm:h-[400px] w-full">
                <Image
                  src="/logo.png"
                  alt="Equipe TaskMaster"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section id="cores" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Nossa Paleta de Cores</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { color: "#FFC314", name: "Cor Principal" },
                { color: "#FFFFFF", name: "Fundo", border: true },
                { color: "#111827", name: "Texto Principal" },
                { color: "#4B5563", name: "Texto Secundário" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full ${item.border ? 'border border-gray-200' : ''}`} style={{ backgroundColor: item.color }}></div>
                  <p className="mt-4 font-semibold text-gray-900">{item.color}</p>
                  <p className="text-gray-600">{item.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Como Usamos Nossas Cores</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nossa paleta de cores foi cuidadosamente selecionada para criar uma experiência visual agradável e profissional. O amarelo vibrante (#FFC314) representa energia e otimismo, enquanto os tons de cinza e branco proporcionam equilíbrio e clareza. Essa combinação reflete a eficiência e a simplicidade que o TaskMaster oferece aos seus usuários.
              </p>
            </div>
          </div>
        </section> */}
        <section id="preços" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Planos e Preços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Básico", price: "R$499/mês", features: ["Até 50 veículos", "Controle digital básico", "Relatórios essenciais", "Suporte por email"] },
                { title: "Pro", price: "R$999/mês", features: ["Até 200 veículos", "Recursos avançados", "Análises detalhadas", "Suporte prioritário"], highlight: true },
                { title: "Enterprise", price: "Personalizado", features: ["Veículos ilimitados", "Recursos personalizados", "Integração com sistemas", "Suporte dedicado 24/7"] },
              ].map((plan, index) => (
                <Card key={index} className={`bg-white ${plan.highlight ? 'border-2 border-[#FFC314]' : 'border-gray-200'}`}>
                  <CardHeader>
                    <CardTitle className="text-gray-900">{plan.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold mb-2 text-gray-900">{plan.price}</div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#FFC314] text-gray-900 hover:bg-[#FFD700]">
                      {plan.title === "Enterprise" ? "Contate-nos" : "Escolher Plano"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Entre em Contato</h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Nome" className="bg-white border-gray-300" />
              <Input type="email" placeholder="Email" className="bg-white border-gray-300" />
              <Input type="text" placeholder="Empresa" className="bg-white border-gray-300" />
              <textarea
                className="w-full h-32 px-3 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC314]"
                placeholder="Mensagem"
              ></textarea>
              <Button className="w-full bg-[#FFC314] text-gray-900 hover:bg-[#FFD700]">Enviar Mensagem</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 border-t border-gray-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© 2024 Frota Leve. Todos os direitos reservados.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-[#FFC314]" href="#">
                Termos de Serviço
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-[#FFC314]" href="#">
                Privacidade
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}