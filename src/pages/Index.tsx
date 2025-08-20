import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Фестиваль СПб</h1>
            <Badge variant="destructive" className="bg-red-600 text-white">
              ОТМЕНЕНО
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section - Cancellation Notice */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Icon name="AlertTriangle" size={64} className="text-red-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Выступление отменено
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              К сожалению, выступления Надежды Кадышевой и Хабиба на фестивале 21 августа 2025 года на Дворцовой площади в Санкт-Петербурге отменяются
            </p>
          </div>

          {/* Key Info Card */}
          <Card className="mb-12 bg-red-50 border-red-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                    <Icon name="Calendar" size={20} className="mr-2 text-red-600" />
                    Дата события
                  </h3>
                  <p className="text-slate-700">21 августа 2025, Санкт-Петербург</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                    <Icon name="MapPin" size={20} className="mr-2 text-red-600" />
                    Место проведения
                  </h3>
                  <p className="text-slate-700">Дворцовая площадь</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                    <Icon name="Plane" size={20} className="mr-2 text-red-600" />
                    Причина отмены
                  </h3>
                  <p className="text-slate-700">Отмена рейса Москва — Санкт-Петербург</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                    <Icon name="Ticket" size={20} className="mr-2 text-green-600" />
                    Вход на фестиваль
                  </h3>
                  <p className="text-slate-700">Свободный (фестиваль продолжается)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Festival Info */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            О фестивале
          </h2>
          
          <div className="mb-12">
            <img 
              src="/img/73e601e5-c83d-4721-9310-9e6b44bf833a.jpg" 
              alt="Фестивальная сцена на Дворцовой площади" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ⚽
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">ФК Зенит</h3>
                <p className="text-slate-600 text-sm">Празднование достижений любимой команды</p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ❌
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Надежда Кадышева</h3>
                <p className="text-red-600 text-sm font-medium">Выступление отменено</p>
                <p className="text-slate-600 text-xs mt-1">Из-за отмены рейса</p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ❌
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Хабиб</h3>
                <p className="text-red-600 text-sm font-medium">Выступление отменено</p>
                <p className="text-slate-600 text-xs mt-1">Из-за отмены рейса</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ✅
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Нейромонах Феофан</h3>
                <p className="text-green-600 text-sm font-medium">Выступление состоится</p>
                <p className="text-slate-600 text-xs mt-1">По расписанию</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ✅
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Группа "Кирпичи"</h3>
                <p className="text-green-600 text-sm font-medium">Выступление состоится</p>
                <p className="text-slate-600 text-xs mt-1">По расписанию</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-700 mb-6">
              Фестиваль на Дворцовой площади продолжается! Нейромонах Феофан и группа "Кирпичи" выступят согласно программе.
            </p>
            <p className="text-slate-600">
              Вход на фестиваль остается свободным для всех желающих
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Остались вопросы?
          </h2>
          
          <Card>
            <CardContent className="p-8">
              <p className="text-slate-700 mb-6">
                Приносим извинения за доставленные неудобства. По всем вопросам обращайтесь к организаторам фестиваля.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с организаторами
                </Button>
                
                <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать письмо
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">
            © 2025 Фестиваль Санкт-Петербург. Следите за обновлениями программы.
          </p>
        </div>
      </footer>
    </div>
  );
}