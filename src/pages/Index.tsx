import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'GreenBattery',
      category: 'Энергия',
      stage: 'Seed',
      description: 'Биоразлагаемые батареи из органических материалов',
      funding: '2.5M ₽',
      team: 4,
      status: 'active'
    },
    {
      id: 2,
      name: 'AirFilter Pro',
      category: 'Экология',
      stage: 'Pre-seed',
      description: 'Система очистки воздуха для промышленных зданий',
      funding: '1.2M ₽',
      team: 3,
      status: 'seeking'
    },
    {
      id: 3,
      name: 'WaterCycle',
      category: 'Вода',
      stage: 'Series A',
      description: 'Автоматизированная система рециркуляции воды',
      funding: '8M ₽',
      team: 12,
      status: 'active'
    },
    {
      id: 4,
      name: 'SolarSkin',
      category: 'Энергия',
      stage: 'Seed',
      description: 'Интеграция солнечных панелей в фасады зданий',
      funding: '4.5M ₽',
      team: 7,
      status: 'active'
    }
  ];

  const pillars = [
    {
      icon: 'Building2',
      title: 'Архитектура и Редевелопмент',
      description: 'Превращаем заброшенные промышленные здания в самодостаточные умные пространства с зелеными технологиями',
      features: ['Адаптивное использование', 'Вертикальное озеленение', 'Биореакторы']
    },
    {
      icon: 'Cpu',
      title: 'Цифровая экосистема',
      description: 'Digital Twin каждого здания — виртуальный двойник с управлением всеми потоками в реальном времени',
      features: ['Цифровой двойник', 'Управление ресурсами', 'Участие жителей']
    },
    {
      icon: 'Users',
      title: 'Сообщество и Образование',
      description: 'Живые лабораторные центры с мастерскими, лекциями и акселератором clean-tech стартапов',
      features: ['FabLab мастерские', 'Воркшопы', 'Акселератор']
    }
  ];

  const workshops = [
    { title: 'Городское садоводство', date: '15 янв', spots: 12 },
    { title: 'Циркулярная экономика', date: '22 янв', spots: 8 },
    { title: 'Устойчивое строительство', date: '29 янв', spots: 15 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/logoza.ru.png" alt="Эко-Хаб" className="h-10 w-auto object-contain" />
            <span className="text-2xl font-bold">Эко-Хаб</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm hover:text-secondary transition-colors">О проекте</a>
            <a href="#pillars" className="text-sm hover:text-secondary transition-colors">Направления</a>
            <a href="#projects" className="text-sm hover:text-secondary transition-colors">Проекты</a>
            <a href="#platform" className="text-sm hover:text-secondary transition-colors">Платформа</a>
            <a href="#education" className="text-sm hover:text-secondary transition-colors">Образование</a>
            <a href="#contact" className="text-sm hover:text-secondary transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="bg-secondary hover:bg-secondary/90">
            Присоединиться
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-secondary text-secondary-foreground border-0">
              Умные эко-системы будущего
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Превращаем заброшенные здания в устойчивые сообщества
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Гибридная организация на стыке урбанистики, экологии и цифровых технологий. 
              Мы создаём пространства, которые генерируют больше энергии, чем потребляют.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="Rocket" className="mr-2" size={20} />
                Подать заявку в акселератор
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть проекты
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наша миссия</h2>
            <p className="text-xl text-muted-foreground">
              Создавать устойчивые, самодостаточные сообщества и пространства, которые восстанавливают 
              экологию города, стимулируют инновации и сохраняют индустриальную память места.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'Zap', label: 'Энергия+', value: '150%', desc: 'Генерация к потреблению' },
              { icon: 'Droplet', label: 'Вода', value: '80%', desc: 'Рециркуляция ресурсов' },
              { icon: 'Leaf', label: 'CO₂', value: '-95%', desc: 'Сокращение выбросов' }
            ].map((stat, i) => (
              <Card key={i} className="text-center border-border/40 bg-card/50">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name={stat.icon as any} className="text-secondary" size={32} />
                  </div>
                  <CardTitle className="text-5xl font-bold text-secondary">{stat.value}</CardTitle>
                  <CardDescription className="text-lg font-semibold">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pillars" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Три столпа деятельности</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к трансформации промышленных пространств
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, i) => (
              <Card key={i} className="border-border/40 bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                    <Icon name={pillar.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  <CardDescription className="text-base">{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-eco-foreground" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио акселератора</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Clean-tech стартапы, которые меняют будущее устойчивого развития
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {['all', 'Энергия', 'Экология', 'Вода'].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? 'default' : 'outline'}
                  onClick={() => setActiveTab(tab)}
                  size="sm"
                  className={activeTab === tab ? 'bg-secondary hover:bg-secondary/90' : ''}
                >
                  {tab === 'all' ? 'Все проекты' : tab}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects
              .filter(p => activeTab === 'all' || p.category === activeTab)
              .map((project) => (
                <Card key={project.id} className="border-border/40 bg-card hover:shadow-lg transition-all hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl">{project.name}</CardTitle>
                      <Badge variant={project.status === 'active' ? 'default' : 'secondary'} className="bg-eco text-eco-foreground">
                        {project.status === 'active' ? 'Активен' : 'Ищет инвестора'}
                      </Badge>
                    </div>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <Badge variant="outline">{project.stage}</Badge>
                    </div>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Icon name="DollarSign" className="text-accent" size={20} />
                        <div>
                          <p className="text-xs text-muted-foreground">Финансирование</p>
                          <p className="font-semibold">{project.funding}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" className="text-secondary" size={20} />
                        <div>
                          <p className="text-xs text-muted-foreground">Команда</p>
                          <p className="font-semibold">{project.team} человек</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-secondary hover:bg-secondary/90" size="sm">
                      Подробнее о проекте
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Посмотреть все проекты
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="platform" className="py-20 bg-gradient-to-br from-secondary/5 via-accent/5 to-eco/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-secondary text-secondary-foreground">Digital Twin</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Цифровой двойник здания</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Единая платформа управления, которая отображает все потоки в реальном времени: 
                  энергию, воду, отходы и мобильность людей.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: 'Activity', title: 'Мониторинг в реальном времени', desc: 'Отслеживание всех ресурсов 24/7' },
                    { icon: 'BarChart3', title: 'Аналитика и прогнозы', desc: 'ИИ-алгоритмы оптимизации' },
                    { icon: 'Vote', title: 'Участие жителей', desc: 'Голосование за улучшения через приложение' }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={feature.icon as any} className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="mt-8 bg-secondary hover:bg-secondary/90" size="lg">
                  Демо платформы
                  <Icon name="ExternalLink" className="ml-2" size={20} />
                </Button>
              </div>

              <Card className="border-2 border-secondary/20 bg-card/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Gauge" className="text-secondary" size={24} />
                    Панель управления
                  </CardTitle>
                  <CardDescription>Данные в реальном времени</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: 'Генерация энергии', value: 145, max: 100, unit: 'кВт', color: 'bg-accent' },
                    { label: 'Потребление воды', value: 67, max: 100, unit: 'м³', color: 'bg-secondary' },
                    { label: 'Переработка отходов', value: 89, max: 100, unit: '%', color: 'bg-eco-foreground' }
                  ].map((metric, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{metric.label}</span>
                        <span className="text-muted-foreground">{metric.value}{metric.unit}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${metric.color} transition-all duration-500 animate-pulse-glow`}
                          style={{ width: `${Math.min(metric.value, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-center text-muted-foreground mb-2">Экологический вклад сегодня</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: 'Leaf', value: '-12', label: 'тонн CO₂' },
                        { icon: 'Zap', value: '+45', label: 'кВт·ч' },
                        { icon: 'Trees', label: '23', value: 'деревьев' }
                      ].map((stat, i) => (
                        <div key={i} className="text-center p-2 bg-muted/50 rounded">
                          <Icon name={stat.icon as any} className="text-eco-foreground mx-auto mb-1" size={20} />
                          <p className="font-bold text-sm">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Образование и Мастерские</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Открытые лаборатории, воркшопы и лекции по устойчивому развитию
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-border/40 bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Wrench" className="text-accent" size={28} />
                    <CardTitle className="text-2xl">FabLab</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Открытая мастерская с современным оборудованием для прототипирования и производства
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {['3D-принтеры', 'Лазерная резка', 'Электроника', 'Деревообработка'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="text-eco-foreground" size={16} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">Записаться на экскурсию</Button>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="GraduationCap" className="text-secondary" size={28} />
                    <CardTitle className="text-2xl">Ближайшие воркшопы</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Практические занятия с экспертами в области clean-tech
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workshops.map((workshop, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-semibold text-sm">{workshop.title}</p>
                          <p className="text-xs text-muted-foreground">{workshop.date}</p>
                        </div>
                        <Badge variant="outline">{workshop.spots} мест</Badge>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90">
                    Смотреть все события
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Присоединяйтесь к нам</h2>
              <p className="text-xl text-muted-foreground">
                Станьте частью сообщества, создающего устойчивое будущее
              </p>
            </div>

            <Card className="border-border/40 bg-card">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Интересующая область</label>
                    <div className="flex flex-wrap gap-2">
                      {['Инвестор', 'Стартап', 'Образование', 'Партнёрство', 'Жилец'].map((tag) => (
                        <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем интересе к Эко-Хабу..." rows={4} />
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              {[
                { icon: 'Mail', label: 'Email', value: 'hello@ecohub.dev' },
                { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
                { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Промышленная, 42' }
              ].map((contact, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name={contact.icon as any} className="text-secondary" size={24} />
                  </div>
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="font-semibold">{contact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://cdn.poehali.dev/files/logoza.ru.png" alt="Эко-Хаб" className="h-8 w-auto object-contain" />
                <span className="text-xl font-bold">Эко-Хаб</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Создаём устойчивые сообщества и пространства будущего
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Проект</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#about" className="hover:text-secondary transition-colors">О нас</a></li>
                <li><a href="#pillars" className="hover:text-secondary transition-colors">Направления</a></li>
                <li><a href="#projects" className="hover:text-secondary transition-colors">Портфолио</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Сообщество</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#education" className="hover:text-secondary transition-colors">Образование</a></li>
                <li><a href="#platform" className="hover:text-secondary transition-colors">Платформа</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Соцсети</h4>
              <div className="flex gap-3">
                {['Twitter', 'Linkedin', 'Instagram', 'Youtube'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all">
                    <Icon name={social as any} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
            <p>© 2025 Эко-Хаб. Все права защищены. Создаём устойчивое будущее вместе.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;