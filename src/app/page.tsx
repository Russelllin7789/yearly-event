"use client";

import React, { useState } from "react";
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventHeader from "@/components/ui/eventSwiper";
import { validateUser } from "@/lib/validation";

export default function EventPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    birthday: string;
    nickname: string;
  } | null>(null);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <div className="text-8xl font-bold text-red-300">內</div>
        <label
          htmlFor="username"
          className="text-2xl font-bold text-white mt-20 flex items-center justify-center"
        >
          LINE 暱稱
          <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="ml-4 max-w-[200px] text-black text-base p-2"
            placeholder="例如：Russell Lin"
          />
        </label>
        <label
          htmlFor="password"
          className="text-2xl font-bold text-white mt-4 flex items-center justify-center"
        >
          西元生日
          <input
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ml-7 max-w-[200px] text-black text-base p-2"
            placeholder="例如：19880809"
          />
        </label>
        <button
          onClick={() => {
            const user = validateUser(username, password) as {
              name: string;
              birthday: string;
              nickname: string;
            };
            if (user) {
              setCurrentUser(user);
              setIsLoggedIn(true);
            } else {
              alert("在哈囉？怎麼會輸錯！");
            }
          }}
          className="text-2xl font-bold text-white mt-8 flex items-center justify-center bg-blue-600 rounded-lg py-2 px-6"
        >
          登入
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 導航欄 */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 hover:transform hover:scale-110 transition-transform duration-300">
            2025 內場尾牙,{" "}
            {currentUser?.name ? currentUser.nickname : "你哪位？"}
          </div>
          <div className="md:hidden">
            {isMenuOpen ? (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                <ChevronUp size={24} className="text-black" />
              </button>
            ) : (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                <ChevronDown size={24} className="text-black" />
              </button>
            )}
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="hover:text-blue-600 text-black font-semibold hover:transform hover:scale-110 transition-transform duration-300"
            >
              活動資訊
            </a>
            <a
              href="#schedule"
              className="hover:text-blue-600 text-black font-semibold hover:transform hover:scale-110 transition-transform duration-300"
            >
              活動流程
            </a>
            {/* <a
              href="#register"
              className="hover:text-blue-600 text-black font-semibold hover:transform hover:scale-110 transition-transform duration-300"
            >
              立即報名
            </a> */}
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <a href="#about" className="py-2 hover:text-blue-600 text-black">
                ✧活動資訊✧
              </a>
              <a
                href="#schedule"
                className="py-2 hover:text-blue-600 text-black"
              >
                ✧活動流程✧
              </a>
              {/* <a href="#register" className="py-2 hover:text-blue-600">
                立即報名
              </a> */}
            </div>
          </div>
        )}
      </nav>

      {/* 主視覺區域 */}
      {/* <header className="pt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl md:text-6xl font-bold mb-6">
            ✧蛇來好彩頭，福氣好年冬✧
          </h1>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            不用報名，騙你點ㄉ按鈕
          </Link>
        </div>
      </header> */}
      <EventHeader />

      {/* 活動資訊 */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            ✧活動資訊✧
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Calendar className="mx-auto text-blue-600" size={32} />
                <CardTitle className="text-center">活動日期</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-bold text-xl">2025年1月12日</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="mx-auto text-blue-600" size={32} />
                <CardTitle className="text-center">活動時間</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-bold text-xl">18:00 - 22:00</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="mx-auto text-blue-600" size={32} />
                <CardTitle className="text-center">活動地點</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="https://maps.app.goo.gl/hehuyfgLVE6TPjvv6"
                  target="_blank"
                  className="text-blue-600 hover:underline text-xl font-bold"
                >
                  小樹屋
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 活動流程 */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            ✧活動流程✧
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-start pl-10 md:pl-20">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4 w-24 text-center text-xl">
                  18:30
                </div>
                <div>
                  <h3 className="font-semibold text-black text-xl">尾牙表演</h3>
                  <p className="text-gray-600">蛇麼都有萍有聚 🍀</p>
                </div>
              </div>
              <div className="flex items-center justify-start pl-10 md:pl-20">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4 w-24 text-center text-xl">
                  18:40
                </div>
                <div>
                  <h3 className="font-semibold text-black text-xl">一月慶生</h3>
                  <p className="text-gray-600">蛇來富貴吃蛋糕 🍰</p>
                </div>
              </div>
              <div className="flex items-center justify-start pl-10 md:pl-20">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4 w-24 text-center text-xl">
                  19:00
                </div>
                <div>
                  <h3 className="font-semibold text-black text-xl">有獎問答</h3>
                  <p className="text-gray-600">內場通蛇出來 🐍</p>
                </div>
              </div>
              <div className="flex items-center justify-start pl-10 md:pl-20">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4 w-24 text-center text-xl">
                  19:30
                </div>
                <div>
                  <h3 className="font-semibold text-black text-xl">尾牙抽獎</h3>
                  <p className="text-gray-600">蛇麼攏賀 🦩</p>
                </div>
              </div>
              <div className="flex items-center justify-start pl-10 md:pl-20">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4 w-24 text-center text-xl">
                  20:00
                </div>
                <div>
                  <h3 className="font-semibold text-black text-xl">生命故事</h3>
                  <p className="text-gray-600">把 mic 給佑佑 🎤</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 報名表單 */}
      {/* <section id="register" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">立即報名</h2>
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">姓名</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="請輸入姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    電子郵件
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="請輸入電子郵件"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    手機號碼
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="請輸入手機號碼"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  確認報名
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* 頁尾 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © 2025 NeiChang Tail-Tooth. Made with lots of ❤️❤️❤️. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
