import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Utensils,
  Flame,
  Smartphone,
  Brain,
  Star,
  Shield,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PersonalTrainerLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner-pc.png"
            alt="Personal Trainer em ação"
            fill
            className="object-cover opacity-60"
          />

           {/* Imagem para celular (menor que md) */}
          <Image
            src="/banner-cel.jpg"
            alt="Personal Trainer em ação"
            fill
            className="block md:hidden object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-900 hover:bg-red-700 text-white px-4 py-2 text-sm font-bold">
            VAGAS LIMITADAS
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Transforme seu Corpo em <span className="text-red-800">90 Dias</span>
            <br />
            com Acompanhamento <span className="text-red-800">100% Personalizado</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300 font-medium">
            Resultados reais, treinos direcionados e suporte total para você alcançar o melhor shape da sua vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/5511999999999?text=Olá! Quero começar minha transformação agora e gostaria de saber mais sobre o acompanhamento personalizado!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-red-800 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold w-full">
                QUERO COMEÇAR AGORA
              </Button>
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar minha avaliação gratuita. Quando podemos conversar?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-sm font-bold bg-transparent w-full"
              >
                AGENDAR AVALIAÇÃO GRATUITA
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Benefícios Diretos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
              Por que treinar comigo é <span className="text-red-800">diferente</span> de tudo que você já tentou?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Plano 100% Personalizado</h3>
                <p className="text-gray-600">Plano de treino 100% personalizado para o seu corpo e objetivo</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Orientação Alimentar</h3>
                <p className="text-gray-600">Orientação alimentar para acelerar seus resultados</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Acompanhamento Constante</h3>
                <p className="text-gray-600">Acompanhamento constante para você não desistir no meio do caminho</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Suporte Total</h3>
                <p className="text-gray-600">Suporte online e presencial, onde você estiver</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow lg:col-span-2">
              <CardContent className="p-8 text-center">
                <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Mentalidade Vencedora</h3>
                <p className="text-gray-600">Treino com foco em saúde, estética e mentalidade vencedora</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Veja o que meus <span className="text-red-700">alunos dizem</span>:
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/camila.jpg"
                    alt="Camila S."
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">Camila S.</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Perdi 8kg em 3 meses com os treinos da Angelica. Além do físico, ganhei autoestima!"
                </p>
                <Badge className="bg-red-800">-8kg em 3 meses</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/ricardo.jpg"
                    alt="Ricardo M."
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">Ricardo M.</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Nunca pensei que conseguiria ganhar massa muscular aos 45 anos. A angelica provou que é possível!"
                </p>
                <Badge className="bg-red-800">+12kg massa magra</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/ana.jpg"
                    alt="Ana P."
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">Ana P.</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "O acompanhamento é incrível! Mesmo sendo mãe de 2 filhos, consegui meus resultados."
                </p>
                <Badge className="bg-red-800">-15kg pós-parto</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-bold text-red-600 mb-4">
              Se eles conseguiram, você também consegue. E eu vou te provar isso.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
              Como funciona o meu método de <span className="text-red-800">transformação corporal</span>:
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-red-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Avaliação Física Completa</h3>
              <p className="text-gray-600">Análise detalhada do seu corpo, histórico e objetivos</p>
            </div>

            <div className="text-center">
              <div className="bg-red-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Plano Sob Medida</h3>
              <p className="text-gray-600">Treino e alimentação personalizados para você</p>
            </div>

            <div className="text-center">
              <div className="bg-red-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Acompanhamento Individual</h3>
              <p className="text-gray-600">Suporte constante e ajustes quando necessário</p>
            </div>

            <div className="text-center">
              <div className="bg-red-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Resultados em 90 Dias</h3>
              <p className="text-gray-600">Transformação real e duradoura</p>
            </div>
          </div>

          <div className="hidden text-center mt-12">
            <div className="bg-gray-100 rounded-lg p-8 max-w-2xl mx-auto">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Metodologia explicada"
                width={500}
                height={300}
                className="rounded-lg mx-auto mb-4"
              />
              <p className="text-gray-600 font-medium">Vídeo de 60 segundos explicando toda a metodologia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta com Urgência */}
      <section className="py-16 bg-red-800 text-white">
        <div className="container mx-auto px-2 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Vagas limitadas para acompanhamento personalizado!</h2>

          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Por atender de forma individual, abro poucas vagas por mês.
            <br />
            Garanta agora sua avaliação gratuita ou 1ª semana com desconto exclusivo.
          </p>

          <div className="bg-white/10 rounded-lg p-8 max-w-md mx-auto mb-8">
            <div className="text-3xl font-black mb-2">APENAS</div>
            <div className="text-6xl font-black mb-2">5</div>
            <div className="text-xl">VAGAS RESTANTES</div>
          </div>

          <Link
            href="https://wa.me/5511999999999?text=Olá! Quero garantir uma das vagas limitadas para acompanhamento personalizado. Como funciona?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-black hover:bg-green-700 text-white px-8 py-6 text-sm font-bold">
              QUERO GARANTIR MINHA VAGA
            </Button>
          </Link>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
              Você no controle. <span className="text-red-800">Treine sem riscos.</span>
            </h2>

            <p className="text-xl mb-6 text-gray-700">
              Se após 7 dias você sentir que meu acompanhamento não é pra você, pode sair sem custo algum.
            </p>

            <p className="text-lg font-bold text-black">
              A confiança nos resultados é o que me permite oferecer essa garantia.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre o Personal */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Angelica Santos - Personal Trainer"
                width={500}
                height={600}
                className="rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Sou <span className="text-red-800">Angelica Santos</span>
              </h2>

              <p className="text-xl mb-6 text-gray-300">
                Personal Trainer há 5 anos, com mais de 200 alunos atendidos.
              </p>

              <p className="text-lg mb-6 text-gray-300">
                Meu foco é transformar vidas através do exercício físico e disciplina. Já ajudei mães, trabalhadores,
                jovens e iniciantes a conquistarem corpos saudáveis e fortes.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-red-800 mb-2">200+</div>
                  <div className="text-sm text-gray-400">Alunos Transformados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-red-800 mb-2">5</div>
                  <div className="text-sm text-gray-400">Anos de Experiência</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Badge className="bg-red-800">CREF Ativo</Badge>
                <Badge className="bg-red-800">Especialista em Emagrecimento</Badge>
                <Badge className="bg-red-800">Hipertrofia</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
              Perguntas <span className="text-red-800">Frequentes</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">Não tenho tempo. Ainda assim consigo fazer?</h3>
                <p className="text-gray-600">
                  Sim! Monto treinos de 30-45 minutos que cabem na sua rotina. O importante é a consistência, não a
                  duração.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">E se eu estiver totalmente fora de forma?</h3>
                <p className="text-gray-600">
                  Perfeito! Especializo-me em iniciantes. Começamos devagar e evoluímos no seu ritmo, sempre respeitando
                  seus limites.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">Posso treinar em casa?</h3>
                <p className="text-gray-600">
                  Claro! Tenho programas para casa e academia. Adapto tudo conforme sua preferência e disponibilidade de
                  equipamentos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">Como funciona o suporte online?</h3>
                <p className="text-gray-600">
                  WhatsApp direto comigo, app exclusivo com seus treinos, vídeos explicativos e check-ins semanais por
                  videochamada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-20 bg-gradient-to-r from-black to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Você está a uma decisão de mudar seu corpo e sua vida.
          </h2>

          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Não deixe mais um ano passar sem conquistar o corpo que você merece. Suas metas estão esperando por você.
          </p>

          <div className="mb-8">
            <Badge className="bg-red-600 text-white px-2 py-2 text-xs font-bold mb-4">
              VAGAS LIMITADAS PARA ACOMPANHAMENTO PERSONALIZADO
            </Badge>
          </div>

          <Link
            href="https://wa.me/5511999999999?text=Olá! Estou pronto(a) para mudar meu corpo e minha vida. Vamos começar?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-red-800 hover:bg-green-800 text-white px-8 py-6 text-sm font-bold">
              QUERO COMEÇAR AGORA
            </Button>
          </Link>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-800">Angelica Santos</h3>
              <p className="text-gray-400 mb-4">Personal Trainer</p>
              <p className="text-gray-400">Transformando vidas através do fitness</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-red-800" />
                  <span className="text-gray-400">(94) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-red-800" />
                  <span className="text-gray-400">email</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-red-800" />
                  <span className="text-gray-400">Parauapebas, PA</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-red-800">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-red-800">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="hidden text-gray-400 hover:text-red-800">
                  <Youtube className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="#" className="text-gray-400 hover:text-red-800 block">
                  Termos de Uso
                </Link>
                <Link href="#" className="text-gray-400 hover:text-red-800 block">
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 Angelica Santos Personal Trainer. Todos os direitos reservados.
              </p>
              <Link
                href="https://www.instagram.com/blendocosta1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                Desenvolvido por <span className="font-bold hover:text-red-800 transition-colors">Blendo Costa</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
