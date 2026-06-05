import heroImg from '@/assets/hero-lighting.jpg'
import ambPedireito from '@/assets/amb-pedireito.jpg'
import ambGourmet from '@/assets/amb-gourmet.jpg'
import ambQuarto from '@/assets/amb-quarto.jpg'
import ambFachada from '@/assets/amb-fachada.jpg'
import logoAlusive from '@/assets/logo-alusive.png'
import { Reveal } from '@/components/Reveal'
import {
  MessageCircle,
  Instagram,
  Check,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  BadgeDollarSign,
  ListFilter,
  House,
  Handshake,
  Utensils,
  Landmark,
  CookingPot,
  BedDouble,
  Home,
  Sofa,
} from 'lucide-react'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '5500000000000'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
const INSTAGRAM_URL =
  import.meta.env.VITE_INSTAGRAM_URL ?? 'https://instagram.com/alusive_iluminacao'

const dores = [
  {
    icon: AlertTriangle,
    text: 'Tenho medo de comprar e ficar desproporcional ou fora do estilo.',
  },
  {
    icon: Lightbulb,
    text: 'Não sei qual temperatura de cor, potência ou altura usar.',
  },
  {
    icon: BadgeDollarSign,
    text: 'Tenho receio de desperdiçar dinheiro comprando a peça errada.',
  },
  {
    icon: ListFilter,
    text: 'São tantas opções que trava na hora de decidir.',
  },
  {
    icon: House,
    text: 'Quero uma casa bonita, mas a iluminação nunca entrega o efeito que imagino.',
  },
  {
    icon: Handshake,
    text: 'As lojas só vendem — ninguém me orienta de verdade.',
  },
]

const pilares = [
  {
    title: 'Projeto Personalizado',
    desc: 'Analisamos o seu ambiente e indicamos as peças certas para cada ponto, estilo e necessidade.',
  },
  {
    title: 'Atendimento Consultivo',
    desc: 'Um especialista ao seu lado desde a escolha até a instalação, respondendo cada dúvida com clareza.',
  },
  {
    title: 'Resultado Garantido',
    desc: 'Do básico ao sofisticado, entregamos iluminação que transforma e valoriza seu imóvel.',
  },
]

const ambientes = [
  {
    icon: Utensils,
    nome: 'Sala de Jantar',
    desc: 'Pendentes que criam o clima perfeito',
    img: heroImg,
  },
  {
    icon: Landmark,
    nome: 'Pé-direito Duplo',
    desc: 'Lustres que impressionam',
    img: ambPedireito,
  },
  {
    icon: CookingPot,
    nome: 'Área Gourmet',
    desc: 'Luz que aquece e aconchega',
    img: ambGourmet,
  },
  {
    icon: BedDouble,
    nome: 'Quarto',
    desc: 'Conforto e relaxamento',
    img: ambQuarto,
  },
  {
    icon: Home,
    nome: 'Fachada',
    desc: 'Valorização e charme do imóvel',
    img: ambFachada,
  },
  {
    icon: Sofa,
    nome: 'Sala de Estar',
    desc: 'Elegância no detalhe',
    img: ambPedireito,
  },
]

const beneficios = [
  'Especialistas em iluminação decorativa e funcional',
  'Projetos que unem estética e funcionalidade',
  'Atendimento consultivo — não apenas vendemos, orientamos',
  'Soluções para cada etapa da sua obra ou reforma',
  'Produtos do básico ao alto padrão',
  'Mão de obra especializada para instalação',
  'Ajudamos a escolher tamanho, altura, temperatura de cor e potência ideal',
]

const depoimentos = [
  {
    text: 'Tinha muito medo de errar na escolha dos pendentes da sala. O atendimento da Alusive foi incrível — me orientaram em tudo e o resultado ficou exatamente o que eu sonhava.',
    autor: 'Ana Clara M.',
    info: 'cliente desde 2023',
  },
  {
    text: 'Comprei a iluminação da minha cozinha gourmet aqui. Além das peças lindas, eles me ajudaram com a distribuição e ficou perfeito. Recomendo muito!',
    autor: 'Roberto F.',
    info: 'reformou em 2024',
  },
  {
    text: 'Finalmente encontrei uma loja que entende de iluminação de verdade. Me senti seguro em cada decisão. O ambiente ficou sofisticado e aconchegante.',
    autor: 'Fernanda S.',
    info: 'construção nova',
  },
]

function CTAButton({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-gold inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider md:text-base ${className}`}
    >
      {children}
    </a>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/40 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" aria-label="Alusive" className="inline-flex items-center">
  <span
    className="block h-8 w-36 bg-[#c6ae7e] md:h-9 md:w-40"
    style={{
      WebkitMaskImage: `url(${logoAlusive})`,
      maskImage: `url(${logoAlusive})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }}
  />
</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm text-gold hover:bg-gradient-gold hover:text-white transition-colors"
            style={{ borderColor: 'var(--gold)' }}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Sala de jantar iluminada com pendentes dourados"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
          <Reveal>
            <span
              className="inline-block rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] text-gold"
              style={{ border: '1px solid oklch(0.76 0.07 85 / 40%)' }}
            >
              Iluminação de alto padrão
            </span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-8 text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
              A iluminação certa transforma qualquer ambiente em uma{' '}
              <span className="text-gold italic font-light">experiência única.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Projetos personalizados de iluminação para quem está construindo ou reformando com
              sofisticação.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <CTAButton>
                <MessageCircle className="h-5 w-5" />
                Falar com um especialista no WhatsApp
              </CTAButton>
              <p className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
                <Sparkles className="h-4 w-4 text-gold" />
                Atendimento consultivo especializado · Projetos para obra e reforma
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
          {[
            { n: '+500', l: 'Projetos realizados' },
            { n: '+8', l: 'Anos de experiência' },
            { n: '100%', l: 'Atendimento personalizado' },
            { n: '★★★★★', l: 'Clientes em toda a região' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-extrabold text-gold md:text-3xl">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problema */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-center text-3xl md:text-5xl">
              Escolher a iluminação errada pode{' '}
              <span className="text-gold">arruinar o resultado</span> de toda a sua obra.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dores.map((d, i) => {
  const Icon = d.icon

  return (
    <Reveal key={d.text} delay={i * 80}>
      <div className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-gold">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </div>

        <p className="mt-4 text-base leading-relaxed text-foreground/90">
          "{d.text}"
        </p>
      </div>
    </Reveal>
  )
})}
          </div>
          <Reveal>
            <p className="mt-16 text-center text-lg italic text-muted-foreground md:text-xl">
              Se você se identificou com alguma dessas situações, a{' '}
              <span className="text-gold not-italic font-semibold">Alusive</span> foi feita para
              você.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solução */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Nosso método</span>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Consultoria completa de iluminação —
                <br />
                <span className="text-gold">do projeto à instalação.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                A gente não apenas vende luminárias. Nós entendemos o seu espaço e ajudamos a
                criar ambientes que emocionam.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pilares.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-2xl font-extrabold shadow-gold" style={{ color: 'var(--primary-foreground)' }}>
                    {i + 1}
                  </div>
                  <h3 className="mt-6 text-xl text-gold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ambientes */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl">
                Cada ambiente tem sua{' '}
                <span className="text-gold italic font-light">linguagem de luz.</span>
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Veja como a iluminação certa muda tudo.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ambientes.map((a, i) => {
  const Icon = a.icon

  return (
    <Reveal key={a.nome} delay={i * 80}>
      <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
        <img
          src={a.img}
          alt={a.nome}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-background/70 text-gold backdrop-blur-sm">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </div>

          <h3 className="mt-3 text-xl text-gold">{a.nome}</h3>
          <p className="text-sm text-muted-foreground">{a.desc}</p>
        </div>
      </div>
    </Reveal>
  )
})}
          </div>
          <Reveal>
            <div className="mt-16 text-center">
              <p className="mb-6 text-lg text-muted-foreground">
                Quer saber qual iluminação combina com o seu ambiente?
              </p>
              <CTAButton>
                <MessageCircle className="h-5 w-5" />
                Falar com especialista
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'oklch(0.19 0.005 80 / 30%)' }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center text-3xl md:text-5xl">
              Por que escolher a <span className="text-gold">Alusive?</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {beneficios.map((b, i) => (
              <Reveal key={b} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-background/40 p-5">
                  <div className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-gold" style={{ color: 'var(--primary-foreground)' }}>
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <p className="text-foreground/90">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-center text-3xl md:text-5xl">
              O que dizem quem já transformou sua casa com a{' '}
              <span className="text-gold">Alusive</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <Reveal key={d.autor} delay={i * 120}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                  <div className="text-5xl leading-none text-gold">"</div>
                  <p className="mt-2 italic leading-relaxed text-foreground/90">{d.text}</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <div className="font-semibold text-gold">{d.autor}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {d.info}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden py-28 md:py-40">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, oklch(0.55 0.09 82 / 0.4), transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl">
              Sua casa merece transmitir{' '}
              <span className="text-gold italic font-light">quem você é.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
              Fale com nossos especialistas agora e receba uma orientação gratuita para o seu
              projeto de iluminação.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <CTAButton className="px-10 py-5 text-base">
                <MessageCircle className="h-6 w-6" />
                Falar com especialista no WhatsApp
              </CTAButton>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Atendimento rápido · Sem compromisso · 100% consultivo
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <a href="#top" aria-label="Alusive" className="inline-flex items-center">
  <span
    className="block h-8 w-36 bg-[#c6ae7e] md:h-9 md:w-40"
    style={{
      WebkitMaskImage: `url(${logoAlusive})`,
      maskImage: `url(${logoAlusive})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }}
  />
</a>
          <p className="text-sm italic text-muted-foreground">Iluminando Sonhos</p>
          <div className="flex gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 Alusive Iluminação. Todos os direitos reservados. Desenvolvido por{" "}
<a
  href="https://bastelliconsultoria.com.br/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-current/80 transition hover:text-current hover:underline underline-offset-4"
>
  Bastelli Consultoria
</a>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold shadow-gold transition-transform hover:scale-105"
        style={{ color: 'var(--primary-foreground)' }}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Falar agora</span>
      </a>
    </div>
  )
}
